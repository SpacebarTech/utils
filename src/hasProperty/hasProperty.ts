/**
 * hasProperty
 *
 * Returns whether or not an object has an own property
 * with the specified name.
 */

interface IndexedObject {
	[key: string]: any;
}

export function hasProperty( obj : IndexedObject, key: string ): boolean {
	return Object.prototype.hasOwnProperty.call( obj, key );
}
