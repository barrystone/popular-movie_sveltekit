// import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
// const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  //   preprocess: preprocess(),
  kit: {
    prerender: { default: true },
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      fallback: null
    }),
    paths: {
      base: dev ? '' : '/svelte_testing'
    }
  }
};

export default config;
