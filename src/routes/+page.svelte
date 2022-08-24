<script>
  import { fly } from 'svelte/transition';
  import PopularMovies from '../components/PopularMovies.svelte';

  export let data;
  const { popular, searchMovieText } = data;
</script>

<main in:fly={{ y: 50, duration: 500 }} out:fly={{ duration: 500 }}>
  <PopularMovies {popular} {searchMovieText} />
</main>
