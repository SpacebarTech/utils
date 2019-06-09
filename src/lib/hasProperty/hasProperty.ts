/**
 * hasProperty
 *
 * Returns whether or not an object has an own property
 * with the specified name.
 */

interface IndexedObject {
	[key: string]: any;
}

export function hasProperty( key: string, obj : IndexedObject ): boolean {
	return Object.prototype.hasOwnProperty.call( obj, key );
}
