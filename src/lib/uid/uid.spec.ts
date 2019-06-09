import { uid } from './uid';

describe( '#uid()', () => {
	it( 'returns a hashed string', () => {
		const result = uid( 'something' );

		expect( result.startsWith( 'something-' ) ).toBeTruthy();
	} );
} );
