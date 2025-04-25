import {defineConfig} from "vite"

export default defineConfig({
	plugins: [
		
	],
	root: 'html',
	build: {
		outDir: '../dist',   
		emptyOutDir: true,  
	},
	base: './'
})

