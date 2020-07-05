## Singleton
When creating objects, especially in modularized applications such as Node.js apps, we often need a singular instance of an object to be available across all modules/functions. A Singleton helps us achieve that.

#### `Summary`
- `As a singleton, objects only have a single instance, with single point of access.`
- `Node's module system caches modules.`
- `The module system offers a rudimentary implementation of a singleton.`
- `The behavior is dependent on filename consistency.`
- `Inconsistent filenames will result in multiple cached instances.`
- `When working with classes, instantiating a class before exporting it out of a module will result in singleton.`
