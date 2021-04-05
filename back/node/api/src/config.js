const envs = {
	dev: {
		port: 3000,
		envName: 'dev'
	},
	prod: {
		port: 5000,
		envName: 'prod'
	}
};

let { NODE_ENV: currentEnvironment } = process.env;
if (typeof(currentEnvironment) !== "string") currentEnvironment = '';
const exportedConfig = envs[currentEnvironment.trim()] ?? envs.dev;

export default exportedConfig;