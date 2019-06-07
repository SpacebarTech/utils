import { toPairs } from '../../';

/**
 * assocByKey
 *
 * Transforms an object with nested objects into an array
 * of objects, where the specified top-level key becomes a
 * property of that object.
 */

export function assocByKey( obj : IndexedObject, key: string ) : IndexedObject[] {
	const pairs = toPairs( obj );
	const fn = ( [value, obj] ) => { return obj[key] = value, obj; };

	return pairs.map( fn );
}
