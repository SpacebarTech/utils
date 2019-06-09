/**
 * uid
 *
 * Returns a new string with a hash appended to an input
 * string.
 */

export function uid( str : string ) : string {
	const salt = Math.floor( Math.random() * 9000 ) + 1000;
	const now  = Date.now().toString();

	return `${str}-${salt}${now.substr( 5, now.length )}`;
}
