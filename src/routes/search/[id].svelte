<script context="module">
	export async function load({ fetch, params }) {
		const searchMovieText = params.id;
		const res = await fetch(
			`${import.meta.env.VITE_TMDB_API_BASE}/search/movie?api_key=${
				import.meta.env.VITE_TMDB_API_KEY
			}&language=en-US&page=1&include_adult=false&query=${searchMovieText}`
		);
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
</script>

<script>
	import MovieCard from '../../components/MovieCard.svelte';
	export let searchMovieText;
	export let searchedMovieCount;
	export let searchedMovie;
</script>

<h3>
	Searched Movies <span>
		input: <b>{searchMovieText}</b>, count: <b>{searchedMovieCount}</b>
	</span>
</h3>
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
		margin: 3rem 1rem;
	}

	h3 {
		padding: 0 1rem;
		font-size: 1.5rem;
		height: 2rem;
	}
	h3 span {
		text-align: right;
		float: right;
	}
	h3 span b {
		color: darkslategray;
	}
	h3 span b:first-child {
		font-size: 2rem;
	}
</style>
