import { sveltekit } from '@sveltejs/kit/vite';
import adapter from 'svelte-adapter-azure-swa';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    // other configurations...
  },
  // other configurations...
};

export default config;
