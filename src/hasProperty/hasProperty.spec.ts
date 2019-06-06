import { hasProperty } from './hasProperty';

describe( '#hasProperty()', () => {
	it( 'checks if an object has an own property', () => {
		const result1 = hasProperty( { x: 1 }, 'x' );
		const result2 = hasProperty( { x: 1 }, 'y' );

		expect( result1 ).toBeTruthy();
		expect( result2 ).toBeFalsy();
	} );
} );
