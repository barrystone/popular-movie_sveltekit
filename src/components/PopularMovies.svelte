<script>
  import MovieCard from './MovieCard.svelte';
  import SearchMovies from '../components/SearchMovies.svelte';

  export let popular, searchMovieText;
</script>

<h3>
  Popular movies
  <SearchMovies {searchMovieText} />
</h3>
<div class="popular-movies">
  {#each popular as movie}
    <MovieCard {movie} />
  {/each}
  <span class="popular-border__show popular-border--1" />
  <span
    class="popular-border__hide popular-border--1 popular-border__hide--1"
  />
  <span class="popular-border__show popular-border--2" />
  <span
    class="popular-border__hide popular-border--2 popular-border__hide--2"
  />
  <span class="popular-border__show popular-border--3" />
  <span
    class="popular-border__hide popular-border--3 popular-border__hide--3"
  />
  <span class="popular-border__show popular-border--4" />
  <span
    class="popular-border__hide popular-border--4 popular-border__hide--4"
  />
</div>

<style>
  h3 {
    padding: 0 1rem;
    font-size: 1.5rem;
    height: 3rem;
    position: relative;
  }
  .popular-movies {
    margin: 3rem 1rem;
    padding: 2rem 4rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    grid-column-gap: 1rem;
    grid-row-gap: 2rem;
    position: relative;
  }

  .popular-border__show {
    width: 2rem;
    height: 2rem;
    background-color: darkslategray;
    z-index: 5;
    position: absolute;
  }
  .popular-border__hide {
    width: 1.9rem;
    height: 1.9rem;
    background-color: white;
    z-index: 6;
    position: absolute;
  }
  .popular-border--1 {
    top: 0;
    left: 0;
  }
  .popular-border__hide--1 {
    transform: translate(0.2rem, 0.2rem);
  }
  .popular-border--2 {
    top: 0;
    right: 0;
  }
  .popular-border__hide--2 {
    transform: translate(-0.2rem, 0.2rem);
  }
  .popular-border--3 {
    bottom: 0;
    left: 0;
  }
  .popular-border__hide--3 {
    transform: translate(0.2rem, -0.2rem);
  }
  .popular-border--4 {
    bottom: 0;
    right: 0;
  }
  .popular-border__hide--4 {
    transform: translate(-0.2rem, -0.2rem);
  }
</style>
