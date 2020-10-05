# Node.js Caesar cipher CLI tool

The application is used to encrypt and decrypt using the Caesar cipher.
It transform only latin letters.

## How to install

1. Download or clone this repository
2. Change directory to `"caesar-cipher-cli"`
3. Install dependencies.

`npm i` or `npm install`

## How to use

Command string:

`node caesar options`

Options:

* `-s, --shift`: cipher shift. Positive or negative number
* `-a, --action`: action. Use `encode` to encrypt text and `decode` to decrypt.
* `-i, --input`: input file. (Optional)
* `-o, --output`: output file. (Optional)

## Examples:

`$ node caesar --action encode --shift 42 --input input-file.txt --output output-file.txt`

`$ node caesar -a encode -s 42 -i input-file.txt -o output-file.txt`

`$ node caesar -a encode --shift 42 -o output-file.txt`

`$ node caesar -a decode --shift 42 -i input-file.txt`

`$ node caesar -a decode -s 42`

## Files

* `caesar.js` - executable file.
* `cipher.js` - Caesar cipher
* `transformer.js` - transform stream creation
* `validation.js` - options validation
