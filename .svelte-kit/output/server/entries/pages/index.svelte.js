import { c as create_ssr_component, e as escape, n as null_to_empty, b as add_attribute, v as validate_component, d as each } from "../../chunks/index-0d7e3173.js";
import { M as MovieCard } from "../../chunks/MovieCard-71d66bc2.js";
var SearchMovies_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".search.svelte-tbwfuj{position:absolute;right:1rem;top:0;width:30%;background-color:antiquewhite}button.svelte-tbwfuj{font-size:0.8rem;font-weight:bold;padding:0rem 0.5rem;color:#fff;background-color:#000;border:none;height:100%;position:absolute;bottom:50%;right:0;transform:translateY(50%);border-top-right-radius:10px;border-bottom-right-radius:10px;cursor:pointer;animation:0.5s ease-in svelte-tbwfuj-SearchAnimation}button.svelte-tbwfuj:hover{font-size:0.9rem}input.svelte-tbwfuj{width:100%;border:none;font-size:1rem;font-family:inherit;outline:none;color:#fff;font-weight:bold;border-radius:10px;padding:1rem;transition:background 0.5s ease-in;background-color:grey;animation:0.75s ease-in svelte-tbwfuj-SearchAnimation}@keyframes svelte-tbwfuj-SearchAnimation{0%{background-color:#fff}}label.svelte-tbwfuj{position:absolute;font-size:0.8rem;top:50%;left:0;transform:translateY(-50%);pointer-events:none;color:#fff;padding:0rem 1rem}input.selected.svelte-tbwfuj{background:darkslategray}",
  map: null
};
const SearchMovies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let text = "";
  $$result.css.add(css$1);
  return `<form class="${"search svelte-tbwfuj"}">${`<label for="${"search_movie"}" class="${"svelte-tbwfuj"}">Click to search...</label>`}
	<input for="${"search_movie"}" type="${"text"}" class="${escape(null_to_empty("")) + " svelte-tbwfuj"}"${add_attribute("value", text, 0)}>
	${``}
</form>`;
});
var PopularMovies_svelte_svelte_type_style_lang = "";
const css = {
  code: "h3.svelte-xpw3i9{padding:0 1rem;font-size:1.5rem;height:3rem;position:relative}.popular-movies.svelte-xpw3i9{margin:3rem 1rem;padding:2rem 4rem;display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));grid-column-gap:1rem;grid-row-gap:2rem;position:relative}.popular-border__show.svelte-xpw3i9{width:2rem;height:2rem;background-color:darkslategray;z-index:5;position:absolute}.popular-border__hide.svelte-xpw3i9{width:1.9rem;height:1.9rem;background-color:white;z-index:6;position:absolute}.popular-border--1.svelte-xpw3i9{top:0;left:0}.popular-border__hide--1.svelte-xpw3i9{transform:translate(0.2rem, 0.2rem)}.popular-border--2.svelte-xpw3i9{top:0;right:0}.popular-border__hide--2.svelte-xpw3i9{transform:translate(-0.2rem, 0.2rem)}.popular-border--3.svelte-xpw3i9{bottom:0;left:0}.popular-border__hide--3.svelte-xpw3i9{transform:translate(0.2rem, -0.2rem)}.popular-border--4.svelte-xpw3i9{bottom:0;right:0}.popular-border__hide--4.svelte-xpw3i9{transform:translate(-0.2rem, -0.2rem)}",
  map: null
};
const PopularMovies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  $$result.css.add(css);
  return `<h3 class="${"svelte-xpw3i9"}">Popular movies
	${validate_component(SearchMovies, "SearchMovies").$$render($$result, {}, {}, {})}</h3>
<div class="${"popular-movies svelte-xpw3i9"}">${each(popular, (movie) => {
    return `${validate_component(MovieCard, "MovieCard").$$render($$result, { movie }, {}, {})}`;
  })}
	<span class="${"popular-border__show popular-border--1 svelte-xpw3i9"}"></span>
	<span class="${"popular-border__hide popular-border--1 popular-border__hide--1 svelte-xpw3i9"}"></span>
	<span class="${"popular-border__show popular-border--2 svelte-xpw3i9"}"></span>
	<span class="${"popular-border__hide popular-border--2 popular-border__hide--2 svelte-xpw3i9"}"></span>
	<span class="${"popular-border__show popular-border--3 svelte-xpw3i9"}"></span>
	<span class="${"popular-border__hide popular-border--3 popular-border__hide--3 svelte-xpw3i9"}"></span>
	<span class="${"popular-border__show popular-border--4 svelte-xpw3i9"}"></span>
	<span class="${"popular-border__hide popular-border--4 popular-border__hide--4 svelte-xpw3i9"}"></span>
</div>`;
});
async function load({ fetch }) {
  const res = await fetch(`${"https://api.themoviedb.org/3"}/movie/popular?api_key=${"22a2b619b5fe2221f6c9e2a24e7a28dd"}&language=en-US&page=1`);
  const data = await res.json();
  if (res.ok) {
    return { props: { popular: data.results } };
  }
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { popular } = $$props;
  if ($$props.popular === void 0 && $$bindings.popular && popular !== void 0)
    $$bindings.popular(popular);
  return `<main>${validate_component(PopularMovies, "PopularMovies").$$render($$result, { popular }, {}, {})}</main>`;
});
export { Routes as default, load };
