import { g as getContext, c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/index-0d7e3173.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Nav_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-n3f8sb{display:flex;min-height:10vh;align-items:center;justify-content:center}a.svelte-n3f8sb{font-family:'Hubballi';font-size:1.3rem;font-weight:bold;color:#000;text-decoration:none;padding-bottom:0.4rem;border-bottom:2px #000 solid}a.svelte-n3f8sb:hover{text-shadow:0.5px 0.5px 1px #000}",
  map: null
};
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let title;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css);
  title = $page.url.pathname === "/" ? "HOME" : "Back to Home";
  $$unsubscribe_page();
  return `<nav class="${"svelte-n3f8sb"}"><a href="${"/"}" class="${"svelte-n3f8sb"}">${escape(title)}</a>
</nav>`;
});
var global = "";
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `${$$result.title = `<title>Popular Movie</title>`, ""}`, ""}

${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}
${slots.default ? slots.default({}) : ``}`;
});
export { _layout as default };
