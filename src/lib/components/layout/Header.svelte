<script lang="ts">
	import { onMount } from 'svelte';
	import { beforeNavigate } from '$app/navigation';

	let isOpen = false;
	let bodyExists = false;

	onMount(() => {
		bodyExists = !!document.body;
	});

	$: if (bodyExists) {
		if (isOpen) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	}

	const toggleMenu = () => {
		isOpen = !isOpen;
	};

	beforeNavigate(() => (isOpen = false));
</script>

<header>
	<button aria-label="toggle menu" on:click={toggleMenu} class:open={isOpen}>
		<span class="burger line-top"></span>
		<span class="burger line-centre"></span>
		<span class="burger line-bottom"></span>
	</button>
	<nav class:menu-open={isOpen} id="nav">
		<ul class="menu">
			<li><a href="/">Home</a></li>
			<li class="last-li"><a href="/projects">Projects</a></li>
			<li class="contact-link">
				<a href="https://github.com/Melisa-Zorraindo" target="_blank" aria-label="github icon">
					<i class="gh-icon"></i>
				</a>
			</li>
			<li class="contact-link">
				<a
					href="https://www.linkedin.com/in/melisa-zorraindo-81719618b/"
					target="_blank"
					aria-label="linkedin icon"
				>
					<i class="li-icon"></i>
				</a>
			</li>
			<!-- <li class="last-li"><a href="/contact">Contact</a></li> -->
		</ul>
	</nav>
</header>

<style>
	:global(body.no-scroll) {
		overflow: hidden;
	}

	header {
		background-color: var(--dark);
		display: flex;
		flex-direction: row-reverse;
		justify-content: space-between;
		gap: 1rem;
		padding: 0 0.5rem 1rem;
		position: relative;
	}

	button {
		background-color: transparent;
		border: none;
		z-index: 2;
	}

	nav {
		background-color: var(--dark);
		color: var(--light);
		width: 100%;
		text-align: center;
		position: absolute;
		top: -600%;
		left: 50%;
		transform: translateX(-50%);
		z-index: 1;
		transition: var(--smooth);
	}

	.burger {
		background-color: var(--light);
		display: block;
		width: 2rem;
		height: 2px;
		border-radius: 1rem;
	}

	.line-top {
		margin-top: 2rem;
	}

	.line-centre {
		margin: 0.3rem 0;
	}

	.menu li {
		padding: 2rem 0;
	}

	/* .menu .last-li{
    display: none;
  } */

	.menu a {
		display: block;
		transition: var(--smooth);
	}

	.gh-icon {
		background: url('/icons/github.svg');
		background-repeat: no-repeat;
		background-size: cover;
		display: inline-block;
		height: 1.25rem;
		width: 1.25rem;
	}

	.li-icon {
		background: url('/icons/linkedin.svg');
		background-repeat: no-repeat;
		background-size: cover;
		display: inline-block;
		height: 1.25rem;
		width: 1.25rem;
	}

	button .line-top,
	button .line-bottom,
	button .line-centre {
		transition: all 0.2s ease-out;
		transition: var(--smooth);
	}

	button.open .line-top {
		transform: rotate(45deg) translate(5px, 5px);
	}

	button.open .line-centre {
		opacity: 0;
	}

	button.open .line-bottom {
		transform: rotate(-45deg) translate(5px, -5px);
	}

	nav.menu-open {
		transition: var(--smooth);
		top: 100%;
		width: 100%;
		height: 100vh;
	}

	@media (width >= 400px) {
		header {
			padding: 0;
		}

		.burger {
			display: none;
		}

		.menu {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
		}

		.menu a:hover {
			color: var(--accent);
		}

		.menu a::after {
			content: '';
			display: block;
			width: 0;
			height: 2px;
			background-color: var(--accent);
			transition: var(--smooth);
		}

		.menu a:hover::after {
			width: 100%;
		}

		.menu li {
			padding: 0.8rem 1.5rem;
		}

		.contact-link {
			display: none;
		}
	}
</style>
