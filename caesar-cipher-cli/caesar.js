const program = require('commander');
const fs = require('fs');
const { pipeline } = require('stream');
const checkOptions = require('./src/validation');
const Transformer = require('./src/transformer');

program
  .storeOptionsAsProperties(false)
  .version('1.0.0')
  .option('-a --action <action>', 'action encode or decode')
  .option('-s --shift <shift>', 'shift')
  .option('-i --input <file>', 'input file')
  .option('-o --output <file>', 'output file')
  .parse(process.argv);

const { action, shift, input, output } = program.opts();

checkOptions(action, shift, input, output, () => process.exit(-1));

pipeline(
  input ? fs.createReadStream(input) : process.stdin,
  new Transformer(action, shift),
  output ? fs.createWriteStream(output, { flags: 'a' }) : process.stdout,
  (err) => {
    if (err) {
      console.error('Pipeline failed.', err);
      process.exit(-1);
    }
  }
);
