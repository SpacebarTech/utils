import { iterate } from './iterate';

describe( '#iterate()', () => {
	it( 'properly iterates over arrays', () => {
		const double = n => n * 2;
		const result = iterate( double, [1, 2, 3] );
		const expected = [2, 4, 6];

		expect( result ).toStrictEqual( expected );
	} );

	it( 'properly iterates over objects', () => {
		const square = n => n * n;
		const result = iterate( square, { x : 1, y : 2, z : 3 } );
		const expected = { x : 1, y : 4, z : 9 };

		expect( result ).toStrictEqual( expected );
	} );
} );
