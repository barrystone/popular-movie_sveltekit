<script>
  import { goto } from '$app/navigation';
  import { fly } from 'svelte/transition';
  import { base } from '$app/paths';

  export let searchMovieText;
  let text = searchMovieText ? searchMovieText : '';
  let active = false;

  const cancelInactive = () => (text ? (active = true) : (active = false));

  const submitSearch = () => {
    // href = "/search/+ inputValue"
    goto(`${base}/search/` + text);
  };
</script>

<form class="search" on:submit|preventDefault={submitSearch}>
  {#if !active}
    <label
      in:fly={{ y: -10, duration: 500 }}
      out:fly={{ y: -10, duration: 500 }}
      for="search_movie">Click to search... <span>ex: Marvel</span></label
    >
  {/if}
  <input
    on:focus={() => (active = true)}
    on:blur={() => cancelInactive}
    bind:value={text}
    for="search_movie"
    type="text"
    class={active ? 'selected' : ''}
  />
  {#if active}
    <button out:fly={{ x: 0, duration: 500 }} in:fly={{ x: 20, duration: 500 }}>
      <!-- <button> Search</button> -->
      Search</button
    >
  {/if}
</form>

<style>
  .search {
    position: absolute;
    right: 1rem;
    top: 0;
    width: 30%;
    /* margin: 1rem; */
    background-color: antiquewhite;
  }
  button {
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0rem 0.5rem;
    color: #fff;
    background-color: #000;
    border: none;
    height: 100%;
    position: absolute;
    bottom: 50%;
    right: 0;
    transform: translateY(50%);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    cursor: pointer;
    animation: 0.5s ease-in SearchAnimation;
  }
  button:hover {
    font-size: 0.9rem;
  }
  input {
    width: 100%;
    border: none;
    font-size: 1rem;
    font-family: inherit;
    outline: none;
    color: transparent;
    font-weight: bold;
    border-radius: 10px;
    padding: 1rem;
    transition: background 0.5s ease-in;
    background-color: grey;
    animation: 0.75s ease-in SearchAnimation;
  }

  @keyframes SearchAnimation {
    0% {
      background-color: #fff;
    }
  }
  label {
    width: 100%;
    position: absolute;
    font-size: 1rem;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    pointer-events: none;
    color: #fff;
    padding: 0rem 1rem;
  }

  label span {
    float: right;
    font-size: 0.8rem;
  }
  input.selected {
    color: #fff;
    background: darkslategray;
  }
</style>
