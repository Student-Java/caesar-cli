const { Transform } = require('stream');
const { encode, decode } = require('./cipher');

class Transformer extends Transform {
  constructor(action, shift) {
    super();
    this.action = action;
    this.shift = +shift;
  }

  _transform(chunk, encoding, callback) {
    const source = chunk.toString('utf8');
    const destination = (this.action === 'encode' && this.shift > 0 || 
      this.action === 'decode' && this.shift < 0) ?
      encode(source, Math.abs(this.shift)) : 
      decode(source, Math.abs(this.shift));
    this.push(destination);
    callback();
  }
}

module.exports = Transformer;
