import Booleanify from './utilities/helper/booleanify';

export default {
	RTL: Booleanify(import.meta.env?.VITE_RTL)
};
