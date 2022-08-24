import { c as create_ssr_component, b as add_attribute, e as escape } from "./index-0d7e3173.js";
var MovieCard_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1bjjc80{width:100%;height:30vh;object-fit:cover;border-radius:1rem}h2.svelte-1bjjc80{font-size:0.9rem;text-align:center}.description.svelte-1bjjc80{height:5vh}p.svelte-1bjjc80{font-size:0.7rem;text-align:center}.movie-card.svelte-1bjjc80{display:flex;flex-direction:column;justify-content:space-around;padding:1rem}",
  map: null
};
const MovieCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { movie } = $$props;
  if ($$props.movie === void 0 && $$bindings.movie && movie !== void 0)
    $$bindings.movie(movie);
  $$result.css.add(css);
  return `<div class="${"movie-card svelte-1bjjc80"}"><a${add_attribute("href", `/movie/${movie.id}`, 0)}><img${add_attribute("src", `https://image.tmdb.org/t/p/w500${movie.poster_path}`, 0)}${add_attribute("alt", movie.title, 0)} class="${"svelte-1bjjc80"}"></a>
	<div class="${"description svelte-1bjjc80"}"><h2 class="${"svelte-1bjjc80"}">${escape(movie.title)}</h2>
		<p class="${"svelte-1bjjc80"}">${escape(movie.release_date)}</p></div>
</div>`;
});
export { MovieCard as M };
