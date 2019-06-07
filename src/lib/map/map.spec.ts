import { map } from './map';

describe( '#map()', () => {
	it( 'properly maps over arrays', () => {
		const double = n => n * 2;
		const result = map( double, [1, 2, 3] );
		const expected = [2, 4, 6];

		expect( result ).toStrictEqual( expected );
	} );

	it( 'properly maps over objects', () => {
		const square = n => n * n;
		const result = map( square, { x : 1, y : 2, z : 3 } );
		const expected = { x : 1, y : 4, z : 9 };

		expect( result ).toStrictEqual( expected );
	} );
} );
