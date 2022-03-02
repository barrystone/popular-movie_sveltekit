<script context="module">
	export async function load({ fetch, params }) {
		const movieId = params.id;
		const res = await fetch(
			`${import.meta.env.VITE_TMDB_API_BASE}/movie/${movieId}?api_key=${
				import.meta.env.VITE_TMDB_API_KEY
			}&language=en-US`
		);

		const data = await res.json();

		return {
			props: {
				movieDetail: data
			}
		};
	}
</script>

<script>
	export let movieDetail;
</script>

<div class="movies-details">
	<div class="img-container">
		<img
			src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
			alt={movieDetail.title}
		/>
	</div>
	<div class="txt container">
		<h1>
			{movieDetail.title}
		</h1>
		<p class="overview">{movieDetail.overview}</p>
		<p>
			<span>Release date:</span>
			{movieDetail.release_date}
			<br />
			<span>Budget:</span>
			${movieDetail.budget}
			<br />
			<span>Rating:</span>
			${movieDetail.vote_average}
			<br />
			<span>Runtime:</span>
			${movieDetail.runtime}mins
			<br />
		</p>
	</div>
</div>

<a href="/">back to home</a>
