import { assocByKey } from './assocByKey';

describe( '#assocByKey()', () => {
	it( 'returns a 2d array', () => {
		const key = 'id';
		const obj = { 1: { x : 2, y : 1 }, 2: { x : 1, y : 2 } };
		const result = assocByKey( obj, key );
		const expected = [{ id : '1', x : 2, y : 1 }, { id : '2', x : 1, y : 2 }];

		console.log( result );

		expect( result ).toStrictEqual( expected );
	} );
} );
