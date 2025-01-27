<script lang="ts">
	import '../app.css';
	import "tailwindcss/tailwind.css";
	let { children } = $props();
</script>

<div class="navbar bg-base-200">
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
			<li><a href="/" class="btn rounded-md btn-ghost text-xl">Home</a></li>
			<li><a href="/resume" class="btn rounded-md btn-ghost text-xl">Resume</a></li>
			<li><a href="/photography" class="btn rounded-md btn-ghost text-xl">Photography</a></li>
		</ul>
	</div>
	<div class="navbar-end">
	</div>
</div>

<div class="flex flex-col min-h-auto justify-center items-center m-4">
	{@render children()}
</div>