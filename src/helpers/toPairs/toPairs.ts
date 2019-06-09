import { hasProperty } from '../../';

/**
 * toPairs
 *
 * Converts an object into an array of key-value arrays.
 * Only the object's own properties are used. Note that the
 * order of the output array is not guaranteed to be
 * consistent across different JS platforms.
 */

interface IndexedObject {
	[key: string]: any;
}

export function toPairs( obj : IndexedObject ): [string | number, any][] {
	const pairs = [];

	for ( const prop in obj ) {
		if ( hasProperty( prop, obj ) ) {
			pairs[pairs.length] = [prop, obj[prop]];
		}
	}

	return pairs;
}
