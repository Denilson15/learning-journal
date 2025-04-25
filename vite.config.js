import {defineConfig} from "vite"

export default defineConfig({
	plugins: [
		
	],
	root: 'html',
	build: {
		outDir: '../dist',   // <-- THIS sends the build output to the root /dist/
		emptyOutDir: true,    // <-- THIS clears the old dist first (important for Netlify)
	}
})

