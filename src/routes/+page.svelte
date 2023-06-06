<svelte:head>
	<title>MZ · Home</title>
</svelte:head>

<div
	class="h-full md:h-screen flex flex-col items-center justify-center sm:flex-row p-4 bg-gradient-to-br from-tertiary-500 to-secondary-800"
>
	<img src="/my-picture.jpg" alt="" class="rounded rounded-full w-72 me-6" />
	<div class="sm:w-2/3 flex flex-col justify-between">
		<div>
			<header class="card-header">
				<h2 class="h4 bg-secondary-700/50 inline p-1 rounded">
					&#60; Frontend developer &#47; &#62;
				</h2>
				<h1 class="h1 mt-2">Melisa Zorraindo</h1>
			</header>
			<section class="px-4 py-6">
				<p class="text-lg lg:text-xl">
					I’m passionate about technology and languages and interested in seeing how language
					technology could unlock new ways of making language education more interactive and
					relevant to students. Currently taking formal education in front-end development so that I
					could develop a product which makes language education more inclusive and immersive.
					Seeking outlets to explore these concepts in a commercial setting. Duolingo enthusiast.
					Currently teaching myself both Polish and Japanese.
				</p>
			</section>
		</div>
		<footer class="card-footer text-end">
			<a href="./projects" class="btn p-0 bg-primary-500 text-surface-900 text-lg lg:text-xl">
				<i class="bx bx-book-bookmark text-3xl ps-1" aria-hidden="true" />
				<span class="pe-2">View my projects</span>
			</a>
		</footer>
	</div>
</div>
