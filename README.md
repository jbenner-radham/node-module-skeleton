node-module-skeleton
====================
A Node.js skeleton project.

Project Structure
-----------------
As per the CommonJS packages spec:

> A CommonJS package will observe the following:
>   * A package.json file must be in the top level directory
>   * Binary files should be in the "bin" directory,
>   * Javascript code should be under the "lib" directory
>   * Documentation should be under the "doc" directory
>   * Unit tests should be under the "test" directory

Manpages
--------
Manpages can be installed during global install on non-Windows systems by specifying them in the `package.json` manifest e.g.

* `{"man": "man/doc.1"}`
* `{"man": ["man/doc.1", "man/doc.3"]}`
* `{"directories": {"man": "man/"}}`

Bootstrap
---------
Run the following in your project root:

```sh
$ yarn init && yarn add --dev eslint jasmine nyc trevor
```

Then add the following to the newly created `package.json`:

```json
{
  "scripts": {
    "prepublishOnly": "trevor",
    "pretest": "eslint {bin,lib,test}",
    "test": "nyc jasmine --config=test/spec/support/jasmine.json"
  }
}
```

References
----------
* [Packages/1.0 - CommonJS Spec Wiki - Package Directory Layout](http://wiki.commonjs.org/wiki/Packages/1.0#Package_Directory_Layout)
* [package.json | npm Documentation - man](https://docs.npmjs.com/files/package.json#man)
* [package.json | npm Documentation - directories.man](https://docs.npmjs.com/files/package.json#directoriesman)
