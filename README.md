# Utils

VueJS frontend helper functions.

## Usage

### Installation

```sh
npm i @jetstech/utils
```

### API

#### `#hasProperty()`

`s → {s: x} → Boolean`

Returns whether or not an object has an _own_ property with
the specified name.

```ts
hasProperty('name', {name: 'Alice'}); //=> true
hasProperty('name', {name: 'Bob'});   //=> true
hasProperty('name', {});              //=> false

const point = {x: 0, y: 0};
hasProperty('x', point); //=> true
hasProperty('y', point); //=> true
hasProperty('z', point); //=> false
```

#### `#objToArray()`

**DEPRECATED/RENAMED**

`({String: {y: ...}}, String) → [{x: String, y: ...}]`

Transforms an object with nested objects into an array of
objects, where the specified top-level key becomes a
property of that object.

```ts
const obj = {
  '1': { x: 1 },
  '2': { x: 1 },
};

assocByKey(obj, 'key');
//=> [{ 'key': 1, 'x': 1 }, { 'key': 2, 'x': 1 }]
```

See also [`assocByKey`](#assocbykey).

#### `#assocByKey()`

`({String: {y: ...}}, String) → [{x: String, y: ...}]`

Transforms an object with nested objects into an array of
objects, where the specified top-level key becomes a
property of that object.

```ts
const obj = {
  '1': { x: 1 },
  '2': { x: 1 },
};

assocByKey(obj, 'key');
//=> [{ 'key': 1, 'x': 1 }, { 'key': 2, 'x': 1 }]
```

#### `#uid()`

`s → String`

`String → String`

Returns a new string with a hash appended to an input
string.

```ts
uid('hello');     //=> hello-625255399542
uid('something'); //=> something-820055635071
```

#### `#iterate()`

**DEPRECATED/RENAMED**

`Functor f => (a → b) → f a → f b`

Takes a function and a `functor`, applies the function to
each of the functor's values, and returns a functor of the
same shape.

This is a suitable `map` implementation for `Array` and
`Object`, so this may be applied to `[1, 2, 3]` or
`{x: 1, y: 2, z: 3}`

```ts
const double = x => x * 2;

iterate(double, [1, 2, 3]);         //=> [2, 4, 6]
iterate(double, {x: 1, y: 2, z: 3}) //=> {x: 2, y: 4, z: 6}
```

See also [`map`](#map)

#### `#map()`

`Functor f => (a → b) → f a → f b`

Takes a function and a `functor`, applies the function to
each of the functor's values, and returns a functor of the
same shape.

This is a suitable `map` implementation for `Array` and
`Object`, so this may be applied to `[1, 2, 3]` or
`{x: 1, y: 2, z: 3}`

```ts
const double = x => x * 2;

map(double, [1, 2, 3]);         //=> [2, 4, 6]
map(double, {x: 1, y: 2, z: 3}) //=> {x: 2, y: 4, z: 6}
```

#### `#clone()`

`{*} → {*}`

Creates a deep copy of the value which may contain (nested)
`Array`s and `Object`s, `Number`s, `String`s, `Boolean`s,
and `Date`s. `Function`s are assigned by reference rather
than copied. Can be very useful for default preferences and
updating preferences.

BUG(rfc): The current implementation does not clone `Date`
objects. This will be fixed in the future.

```ts
const objects = [{}, {}, {}];
const objectsClone = clone(objects);

objects === objectsClone;       //=> false
objects[0] === objectsClone[0]; //=> false
```

#### `#compare()`

**DEPRECATED/RENAMED**

`a → b → Boolean`

Returns `true` if its arguments are equivalent, `false`
otherwise. Handles cyclical data structures.

```ts
compare(1, 1);                 //=> true
compare(1, '1');               //=> false
compare([1, 2, 3], [1, 2, 3]); //=> true
```

See also [`equals`](#equals)

#### `#equals()`

`a → b → Boolean`

##### Note: uses `fast-deep-equal` under the hood

Returns `true` if its arguments are equivalent, `false`
otherwise. Handles cyclical data structures.

```ts
equals(1, 1);                 //=> true
equals(1, '1');               //=> false
equals([1, 2, 3], [1, 2, 3]); //=> true
```
