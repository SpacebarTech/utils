import { hasProperty } from './hasProperty';

describe( '#hasProperty()', () => {
	it( 'checks if an object has an own property', () => {
		const result1 = hasProperty( 'x', { x: 1 } );
		const result2 = hasProperty( 'y', { x: 1 } );

		expect( result1 ).toBeTruthy();
		expect( result2 ).toBeFalsy();
	} );
} );
