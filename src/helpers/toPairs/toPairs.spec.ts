import { toPairs } from './toPairs';

describe( '#toPairs()', () => {
	it( 'converts an object into a 2d array', () => {
		const obj = { x : 1, y: 2 };
		const result = toPairs( obj );
		const expected = [['x', 1], ['y', 2]];

		expect( result ).toStrictEqual( expected );
	} );
} );
