import { Booleanify } from '../../../lib/utilities/helper';

describe('Booleanify helper test suite', () => {
	it('it works', async () => {
		expect(Booleanify('some')).toEqual(undefined);
	});
	it('testing falsy inputs', async () => {
		expect(Booleanify('false')).toEqual(false);
		expect(Booleanify('False')).toEqual(false);
		expect(Booleanify('FALSE')).toEqual(false);
	});
	it('testing truthy inputs', async () => {
		expect(Booleanify('true')).toEqual(true);
		expect(Booleanify('True')).toEqual(true);
		expect(Booleanify('TRUE')).toEqual(true);
	});
});
