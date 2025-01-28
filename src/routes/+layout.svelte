<script lang="ts">
	import '../app.css';
	import "tailwindcss/tailwind.css";
	import { page } from '$app/state';
	let { children } = $props();	
</script>

<!-- WIP get buttons to have equal widths inside navbar-center -->
<!-- <ul class="flex flex-row flex-nowrap items-center gap-5 justify-center py-12">
	<li class="btn rounded-md btn-ghost text-xl flex-1 flex-grow"><a href="/">Home</a></li>
	<li class="btn rounded-md btn-ghost text-xl flex-1 flex-grow"><a href="/resume">Resume</a></li>
	<li class="btn rounded-md btn-ghost text-xl flex-1 flex-grow"><a href="/photography">Photography</a></li>
</ul> -->

<div class="navbar bg-base-200 min-h-0 h-5rem">
	<div class="navbar-start">
		<div class="hidden md:flex">
			<div class="grid h-16 w-16 place-items-center">
				<a class="h-full w-full" href="/">
					<img class="h-full w-full" src="/terminal.svg" alt="Computer Terminal" />
				</a>
			</div>
		</div>
	</div>
	<div class="navbar-center">
		<ul class="menu menu-horizontal px-1">
			<li class="px-1"><a href="/" class:btn-active="{page.url.pathname === '/'}" class="btn rounded-md btn-ghost text-xl">Home</a></li>
			<li class="px-1"><a href="/resume" class:btn-active="{page.url.pathname === '/resume'}" class="btn rounded-md btn-ghost text-xl">Resume</a></li>
			<li class="px-1"><a href="/photography" class:btn-active="{page.url.pathname === '/photography'}" class="btn rounded-md btn-ghost text-xl">Photography</a></li>
		</ul>
	</div>
	<div class="navbar-end">
		<div class="hidden md:flex p-2 border border-zinc-800">
			<a target="_blank" rel="noopener noreferrer" href="https://github.com/lrfalslev/lrfalslev-portfolio">
				<div class="flex justify-between items-center">
					<div class="h-4 w-4">
						<svg class="text-zinc-600 fill-current" viewBox="0 0 100 100">
							<path
								d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
						</svg>
					</div>
					<div class="hidden ms-1 lg:flex shrink">
						<span class="italic text-xs text-zinc-700">/lrfalslev-portfolio</span>
					</div>
				</div>
			</a>
		</div>
	</div>
</div>

<div class="flex flex-col min-h-auto min-w-auto justify-center items-center h-[calc(100vh-5rem)] bg-base-300">
	{@render children()}
</div>