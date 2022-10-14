import babel from "@rollup/plugin-babel";
export default {
	input: ["./src/index.js"],
	output: {
		file: "./dist/InputAdviser.js",
		format: "umd",
		name: "InputAdviser",
	},
	plugins: [babel()],
}