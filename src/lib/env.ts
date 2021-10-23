import Booleanify from './utilities/helper/booleanify';

export default {
	RTL: Booleanify(
		typeof process !== 'undefined' ? process.env['VITE_RTL'] : import.meta.env.VITE_RTL
	)
};
