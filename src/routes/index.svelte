<script context="module">
	export async function load({ fetch }) {
		const base = 'https://api.themoviedb.org/3';

		const res = await fetch(
			`${base}/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
		);
		const data = await res.json();
		// console.log('API', data);

		if (res.ok) {
			return {
				props: {
					popular: data.results
				}
			};
		}
	}
</script>

<script>
	export let popular;
</script>

<h1>Fetch API</h1>

<h3>Popular Movie title</h3>
<ul>
	{#each popular as mv}
		<li>{mv.original_title}</li>
	{/each}
</ul>

<a href="/about">about page</a>
