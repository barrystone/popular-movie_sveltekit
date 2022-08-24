import { c as create_ssr_component, e as escape, d as each, v as validate_component } from "../../../chunks/index-0d7e3173.js";
import { M as MovieCard } from "../../../chunks/MovieCard-71d66bc2.js";
var _id__svelte_svelte_type_style_lang = "";
const css = {
  code: ".searched-movies.svelte-13bt41z.svelte-13bt41z{display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));grid-column-gap:0.5rem;grid-row-gap:1.5rem;height:20vh;margin:3rem 1rem}h3.svelte-13bt41z.svelte-13bt41z{padding:0 1rem;font-size:1.5rem;height:2rem}h3.svelte-13bt41z span.svelte-13bt41z{text-align:right;float:right}h3.svelte-13bt41z span b.svelte-13bt41z{color:darkslategray}h3.svelte-13bt41z span b.svelte-13bt41z:first-child{font-size:2rem}",
  map: null
};
async function load({ fetch, params }) {
  const searchMovieText = params.id;
  const res = await fetch(`${"https://api.themoviedb.org/3"}/search/movie?api_key=${"22a2b619b5fe2221f6c9e2a24e7a28dd"}&language=en-US&page=1&include_adult=false&query=${searchMovieText}`);
  const data = await res.json();
  if (res.ok) {
    return {
      props: {
        searchedMovie: data.results,
        searchedMovieCount: data.total_results,
        searchMovieText
      }
    };
  }
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { searchMovieText } = $$props;
  let { searchedMovieCount } = $$props;
  let { searchedMovie } = $$props;
  if ($$props.searchMovieText === void 0 && $$bindings.searchMovieText && searchMovieText !== void 0)
    $$bindings.searchMovieText(searchMovieText);
  if ($$props.searchedMovieCount === void 0 && $$bindings.searchedMovieCount && searchedMovieCount !== void 0)
    $$bindings.searchedMovieCount(searchedMovieCount);
  if ($$props.searchedMovie === void 0 && $$bindings.searchedMovie && searchedMovie !== void 0)
    $$bindings.searchedMovie(searchedMovie);
  $$result.css.add(css);
  return `<h3 class="${"svelte-13bt41z"}">Searched Movies <span class="${"svelte-13bt41z"}">input: <b class="${"svelte-13bt41z"}">${escape(searchMovieText)}</b>, count: <b class="${"svelte-13bt41z"}">${escape(searchedMovieCount)}</b></span></h3>
<div class="${"searched-movies svelte-13bt41z"}">${each(searchedMovie, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
</div>`;
});
export { U5Bidu5D as default, load };
