import {defineConfig} from "vite"

export default defineConfig({
	plugins: [
		
	],
	root: 'html',
	base: './',
	build: {
		outDir: '../dist',   
		emptyOutDir: true,  
	}
})

