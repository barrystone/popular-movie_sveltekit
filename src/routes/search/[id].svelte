<script context="module">
	export async function load({ fetch, params }) {
		const searchMovieId = params.id;
		const res = await fetch(
			`${import.meta.env.VITE_TMDB_API_BASE}/search/movie?api_key=${
				import.meta.env.VITE_TMDB_API_KEY
			}&language=en-US&page=1&include_adult=false&query=${searchMovieId}`
		);
		const data = await res.json();
		if (res.ok) {
			return {
				props: {
					searchedMovie: data.results
				}
			};
		}
	}
</script>

<script>
	import MovieCard from '../../components/MovieCard.svelte';
	export let searchedMovie;
</script>

<div class="searched-movies">
	{#each searchedMovie as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		grid-column-gap: 0.5rem;
		grid-row-gap: 1.5rem;
		height: 20vh;
	}
</style>
