import { hasProperty } from '../hasProperty';

/**
 * map
 *
 * Takes a function and a functor, applies the function to
 * each of the functor's values, and returns a functor of
 * the same shape.
 *
 * This is a suitable `map` implementation for Array and
 * Object, so this may be applied to `[1, 2, 3]` or
 * `{x: 1, y: 2, z: 3}`.
 */

export function map<T>( fn : any, obj : T ): T | IndexedObject {
	// Working with arrays, just Array.prototype.map()
	if ( Array.isArray( obj ) ) {
		return obj.map( fn );
	}

	// When working with objects.
	if ( obj === Object( obj ) ) {
		const o : IndexedObject = {};
		for ( const prop in obj ) {
			if ( hasProperty( prop, obj ) ) {
				o[prop] = fn( obj[prop] );
			}
		}

		return o;
	}

	throw new Error( 'Cannot apply function to null or undefined value' );
}
