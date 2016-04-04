# ES6 -> ES5 Transpiler (Gulp + CommonJS)

## Requirements:
  - nodejs: https://nodejs.org/en/download/package-manager/

We will use nodejs to run our package.json in order to get all the files needed to the transpiler.
You can use this transpiler without running the installation proccess, however you will need to handle your dependencies.

## Installation

To install gulp and other dependencies, simply run:

```npm install```

**OBS**: You can jump this section and install all files manually. This tutorial assume that all your dependencies will be saved inside the folder /node_modules.

## Running gulp

To start the process simply run:

``` node node_modules/gulp/bin/gulp ```

The task will be executed everytime that you save an es6 file automagically.

## Stopping gulp

Hit ```ctrl + c ``` to stop the process.

## Configuration

In order to modify the folder in which your files are saved just change the variable ```paths``` in line 7.

## Additional References

- [ZRP Blog Post](http://labs.zrp.com.br/2016/04/04/transpilando-ecma-6-para-ecma-5/)
