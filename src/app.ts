const fs = require("fs");

/**
 * Log data to json file.
 * @param {string} data Data to be logged.
 * @param {string} file Custom file name.
 */

function logToFile(data, file) {
  let filename = file;
  if (!file) {
    filename = "quick-logs.json";
  } else if (!file.endsWith(".json")) {
    throw new Error("Only '.json' files are allowed.");
  }
  const filetext = `{"${new Date()}" : "${data}",\n"Logged using" : "Quick Logs"}`;
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
