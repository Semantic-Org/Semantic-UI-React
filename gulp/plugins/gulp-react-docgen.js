var _ = require('lodash');
var gutil = require('gulp-util');
var docgen = require('react-docgen');
var doctrine = require('doctrine');
var through = require('through2');
var path = require('path');

module.exports = function(filename) {
  var defaultFilename = 'docgenInfo.json';
  var result = {};
  var pluginName = 'gulp-react-docgen';
  var finalFile;
  var latestFile;

  function parseDocBlock(docBlock) {
    return doctrine.parse(docBlock || '', {unwrap: true});
  }

  function bufferContents(file, enc, cb) {
    latestFile = file;

    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError(pluginName, 'Streaming is not supported'));
      return;
    }

    try {
      var relativePath = file.path.replace(process.cwd() + '/', '');
      var parsed = docgen.parse(file.contents);

      // replace the component`description` string with a parsed doc block object
      parsed.docBlock = parseDocBlock(parsed.description);
      delete parsed.description;

      // replace prop `description` strings with a parsed doc block object
      _.each(parsed.props, function(propDef, propName) {
        parsed.props[propName].docBlock = parseDocBlock(propDef.description);
        delete parsed.props[propName].description;
      });

      result[relativePath] = parsed;

      cb();
    } catch (err) {
      this.emit(
        'error',
        new gutil.PluginError(pluginName, err)
      );
    }
  }

  function endStream(cb) {
    finalFile = latestFile.clone({contents: false});
    finalFile.path = path.join(latestFile.base, (filename || defaultFilename));
    finalFile.contents = new Buffer(JSON.stringify(result, null, 2));
    this.push(finalFile);
    cb();
  }

  return through.obj(bufferContents, endStream);
};
