// https://github.com/chmontgomery/gulp-help#requiregulp-helprequiregulp-options

module.exports = {
  description: '',                  // modifies the default help message
  aliases: [],                      // adds aliases to the default help task
  hideEmpty: true,                  // hide all tasks with no help message
  hideDepsMessage: true,            // hide all task dependencies
  afterPrintCallback: function() {  // run after the default help task runs

  }
};
