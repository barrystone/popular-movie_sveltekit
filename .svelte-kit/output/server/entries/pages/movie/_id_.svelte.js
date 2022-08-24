import { c as create_ssr_component, b as add_attribute, e as escape } from "../../../chunks/index-0d7e3173.js";
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-n7gfvr{padding:1rem 0rem 2rem}p.svelte-n7gfvr{padding:1rem 0}.img-container.svelte-n7gfvr{width:100%}img.svelte-n7gfvr{width:100%;border-radius:15px}.movie-details.svelte-n7gfvr{margin:2rem 20%}span.svelte-n7gfvr{font-weight:bold}",
  map: null
};
async function load({ fetch, params }) {
  const movieId = params.id;
  const res = await fetch(`${"https://api.themoviedb.org/3"}/movie/${movieId}?api_key=${"22a2b619b5fe2221f6c9e2a24e7a28dd"}&language=en-US`);
  const data = await res.json();
  return { props: { movieDetail: data } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movieDetail } = $$props;
  if ($$props.movieDetail === void 0 && $$bindings.movieDetail && movieDetail !== void 0)
    $$bindings.movieDetail(movieDetail);
  $$result.css.add(css);
  return `<div class="${"movie-details svelte-n7gfvr"}"><div class="${"img-container svelte-n7gfvr"}"><img${add_attribute("src", `https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`, 0)}${add_attribute("alt", movieDetail.title, 0)} class="${"svelte-n7gfvr"}"></div>
	<div class="${"txt-container"}"><h1 class="${"svelte-n7gfvr"}">${escape(movieDetail.title)}</h1>
		<p class="${"overview svelte-n7gfvr"}">${escape(movieDetail.overview)}</p>
		<p class="${"svelte-n7gfvr"}"><span class="${"svelte-n7gfvr"}">Release date:</span>\xA0
			${escape(movieDetail.release_date)}
			<br>
			<span class="${"svelte-n7gfvr"}">Budget:</span>\xA0 $${escape(movieDetail.budget)}
			<br>
			<span class="${"svelte-n7gfvr"}">Rating:</span>\xA0 $${escape(movieDetail.vote_average)}
			<br>
			<span class="${"svelte-n7gfvr"}">Runtime:</span>\xA0 $${escape(movieDetail.runtime)}mins
			<br></p></div></div>

`;
});
export { U5Bidu5D as default, load };
