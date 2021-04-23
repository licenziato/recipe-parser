# recipe-parser

Natural language parser for recipes and lists of ingredients. Can parse a string into an object and also combine an array of these ingredient objects.

## About

This project was built on top of code written by [suprmat95](https://github.com/suprmat95/recipe-parser).

What's different from the original?

- improved support for the Italian language (use the same key of English to improve interoperability).
- added support to parse the whole recipe trying to split ingredients and directions
- added sentences tokenizer to split directions

## To install

`npm install recipe-parser` or `yarn add recipe-parser`

## To use

`import { parse } from 'recipe-parser';`

And then use on a string, for example:
`parse('1 teaspoon basil', 'eng');`
or 
`parse('1 grammo di zucchero', 'ita');`


Will return an object:

```
{
  quantity: 1,
  unit: 'teaspoon',
  ingredient: 'basil',
  minQty: 1,
  maxQty: 1
};
```

### Combine ingredient objects

```
combine([{
  quantity: 1,
  unit: 'teaspoon',
  ingredient: 'basil',
  minQty: 1,
  maxQty: 2,
},
{
  quantity: 2,
  unit: 'teaspoon',
  ingredient: 'basil',
  minQty: 2,
  maxQty: 2
}]);
```

Will return

```
[{
  quantity: 3,
  unit: 'teaspoon',
  ingredient: 'basil',
  minQty: 3,
  maxQty: 4
}]
```

### Languages supported

Languages currently supported:

- English `eng`
- Italian `ita`

### Unicode Fractions

Will also correctly parse unicode fractions into the proper amount

### Development

Clone the repo and `yarn` to install packages. If `yarn test` comes back good after your code changes, give yourself a pat on the back.

## Natural Language Parsing

This project uses Natural, for more information, see https://dzone.com/articles/using-natural-nlp-module

### Publishing

Checkout https://docs.npmjs.com/getting-started/publishing-npm-packages for more info
