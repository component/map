
# map

  Map utility

## Installation

    $ component install component/map

## API

### map(array, fn[, ctx])

  Map returning a new array:

```js
var names = map(users, function(user){
  return user.name;
});
```

Optionally pass a context object:

```js
map([1, 2, 3], function(num, i) {
  // ...
}, this);
```

### map(array, string[, ctx])

  Map properties in `string` returning a new array:

```js
var names = map(users, 'user.name');
var firstNames = map(users, 'user.name.first');
```

# License

  MIT
