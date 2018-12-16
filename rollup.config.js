import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{ file: pkg.main, format: 'umd', globals: { axios: "axios" } },
		{ file: pkg.module, format: 'es' }
	],
	name: 'mazzuma-node',
	external: ['axios'],
	plugins: [
		typescript({
			typescript: require('typescript')
		})
	]
};