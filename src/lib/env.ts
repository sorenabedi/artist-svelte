import EnvBooleanParser from './utilities/helper/envBoolean';

export default {
	RTL: EnvBooleanParser(import.meta.env?.VITE_RTL)
};
