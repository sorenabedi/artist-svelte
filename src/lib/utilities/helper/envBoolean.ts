export default (envString: string | boolean): boolean => {
	try {
		return JSON.parse(`${envString}`.toLowerCase());
	} catch (error) {
		return undefined;
	}
};
