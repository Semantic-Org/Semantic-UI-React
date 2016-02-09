// https://github.com/chmontgomery/gulp-help#requiregulp-helprequiregulp-options

export default {
  description: '',                  // modifies the default help message
  aliases: [],                      // adds aliases to the default help task
  hideEmpty: true,                  // hide all tasks with no help message
  hideDepsMessage: true,            // hide all task dependencies
  afterPrintCallback: () => {},     // run after the default help task runs
}
