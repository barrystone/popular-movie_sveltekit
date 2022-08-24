<script>
  import { page } from '$app/stores';
  import { base } from '$app/paths';
  // import { onMount } from 'svelte';
  // onMount(() => {
  // 	console.log($page);
  // });
  $: title =
    $page.url.pathname === (`${base}` || `${base}/`) ? 'HOME' : 'Back to Home';

  // testing path
  console.log('b_path', $page.url.pathname);
  const tt = () => {
    console.log('nav_title_path', $page.url.pathname);
  };
  //
</script>

<nav>
  <a href={base}>
    {title}
  </a>

  <button on:click={tt}>test</button>
</nav>

<style>
  nav {
    display: flex;
    min-height: 10vh;
    align-items: center;
    justify-content: center;
  }
  a {
    font-family: 'Hubballi';
    font-size: 1.3rem;
    font-weight: bold;
    color: #000;
    text-decoration: none;
    padding-bottom: 0.4rem;
    border-bottom: 2px #000 solid;
  }
  a:hover {
    /* opacity: 0.7; */
    text-shadow: 0.5px 0.5px 1px #000;
    /* box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
  }
</style>
