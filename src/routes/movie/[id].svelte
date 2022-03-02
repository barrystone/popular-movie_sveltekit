<script context="module">
	export async function load({ fetch, params }) {
		console.log('params', params.id);
		return {
			props: {
				movieId: params.id
			}
		};
	}
</script>

<script>
	export let movieId;
</script>

<h1>{movieId}</h1>
<a href="/">back to home</a>
