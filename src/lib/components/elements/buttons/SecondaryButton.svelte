<script lang="ts">
	export let url: string;
	export let text: string;
	export let target: string;
</script>

<a href={url} class="corner-border" {target}>
	<span>{text}</span>
</a>

<style>
	a {
		background-color: black;
		color: white;
	}

	a:hover {
		background-color: transparent;
		color: black;
		transition: all 0.2s ease-in-out;
	}

	.corner-border {
		position: relative;
		display: inline-block;
		padding: 10px 20px;
		text-decoration: none;
	}

	.corner-border::before,
	.corner-border::after {
		content: '';
		position: absolute;
		background-color: black;
		transition: var(--smooth);
	}

	.corner-border::before {
		top: 0;
		left: 0;
		width: 0;
		height: 2px;
	}

	.corner-border span::before,
	.corner-border span::after {
		content: '';
		position: absolute;
		background-color: black;
		width: 2px;
		height: 0;
		transition: var(--smooth);
	}

	.corner-border span::before {
		top: 0;
		left: 0;
	}

	.corner-border::after {
		bottom: 0;
		right: 0;
		width: 0;
		height: 2px;
	}

	.corner-border span::after {
		bottom: 0;
		right: 0;
	}

	.corner-border:hover::before {
		width: 100%;
	}

	.corner-border:hover span::before {
		height: 100%;
	}

	.corner-border:hover::after {
		width: 100%;
	}

	.corner-border:hover span::after {
		height: 100%;
	}
</style>
