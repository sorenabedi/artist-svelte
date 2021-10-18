import { EnvBooleanParser } from '$lib/utilities/helper';

describe('EnvBooleanParser helper test suite', () => {
	it('it works', async () => {
		expect(EnvBooleanParser('some')).toEqual(undefined);
	});
	it('testing falsy inputs', async () => {
		expect(EnvBooleanParser('false')).toEqual(false);
		expect(EnvBooleanParser('False')).toEqual(false);
		expect(EnvBooleanParser('FALSE')).toEqual(false);
	});
	it('testing truthy inputs', async () => {
		expect(EnvBooleanParser('true')).toEqual(true);
		expect(EnvBooleanParser('True')).toEqual(true);
		expect(EnvBooleanParser('TRUE')).toEqual(true);
	});
});
