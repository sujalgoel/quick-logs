const fs = require("fs");

/**
 * Log data to json file.
 * @param {string} data Data to be logged.
 * @param {string} file Custom file name.
 */

function logToFile(data, file) {
  let filename = file
  if (!filename) {
    filename = "quick-logs.log";
  }
  const filetext = `${new Date()}\n\nData:\n${data}`;
  fs.writeFile(
    filename,
    filetext,
    function (error) {
      if (error) {
        console.log(error);
      }
    },
    () => {
      console.log(`Successfully written your data to ${filename}`);
    }
  );
}

module.exports = logToFile;
