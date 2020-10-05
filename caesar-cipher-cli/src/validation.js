const fs = require('fs');

function validateFile(file, purpose) {
  if (purpose !== 'input file' && purpose !== 'output file') {
    return false;
  }

  if (fs.existsSync(file)) {
    try {
      fs.accessSync(file, purpose === 'input file' ? fs.constants.W_OK : fs.constants.R_OK);
    } catch (err) {
      console.error(`"${purpose}" file "${file}" is not accessible`);
      return false;
    }
  } else {
    console.error(`"${purpose}" file "${file}" does not exist`);
    return false;
  }

  return true;
}

function checkOptions(action, shift, input, output, terminator) {
  let isError = false;
  
  if (action === undefined) {
    console.error('"action" is required option');
    isError = true;
  }
  
  if (action !== 'encode' && action !== 'decode') {
    console.error('"action" must be "encode" or "decode"');
    isError = true;
  }

  if (shift === undefined) {
    console.error('"shift" is required option');
    isError = true;
  }

  if (!Number.isInteger(+shift)) {
    console.error('"shift" must be an integer number');
    isError = true;
  }

  if (input && !validateFile(input, 'input file')) {
    isError = true;
  }

  if (output && !validateFile(output, 'output file')) {
    isError = true;
  }

  if (isError) {
    terminator();
  }
}

module.exports = checkOptions;
