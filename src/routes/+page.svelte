<script lang="ts">
	import letterboxd from '$lib/assets/letterboxd.svg';
	import github from '$lib/assets/github.svg';
	import linkedin from '$lib/assets/linkedin.svg';
</script>

<div
	class="hero h-[calc(100vh-5rem)]"
	style="background-image: url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp);"
>
	<div class="hero-overlay bg-opacity-60 brightness-0"></div>
	<div class="hero-content flex-col md:flex-row w-2/3">
		<div class="avatar md:me-4">
			<div class="w-60 h-96 rounded-2xl ring-gray-200 ring-offset-zinc-700 ring ring-offset-4">
				<img
					class="scale-x-[-1] size-24 object-right-top"
					src="luke-temp-profile.jpg"
					alt="Luke's headshot"
				/>
			</div>
		</div>
		<div class="font-extrabold">
			<h1 class="my-5 text-2xl md:text-4xl lg:text-5xl">Hello, I'm Luke!</h1>
			<p class="font-light md:py-6 md:text-2xl">
				I'm a full stack software developer who likes elegant solutions. I enjoy cycling, good food,
				snowboarding, and watching movies.
			</p>
			<div class="inline-flex w-full items-center justify-center py-4 md:py-0">
				<a
					target="_blank"
					aria-label="github"
					rel="noopener noreferrer"
					href="https://github.com/lrfalslev"
					class="px-1"
				>
					<div class="h-12 w-12">
						<img src={github} alt="Image" />
					</div>
				</a>
				<a
					target="_blank"
					aria-label="linkedin"
					rel="noopener noreferrer"
					href="https://www.linkedin.com/in/luke-falslev/"
					class="px-1"
				>
					<div class="h-12 w-12">
						<img src={linkedin} alt="linkedin" />
					</div>
				</a>
				<a
					target="_blank"
					aria-label="letterboxd"
					rel="noopener noreferrer"
					href="https://letterboxd.com/lrfalslev/"
					class="px-1"
				>
					<div class="h-12 w-12">
						<img src={letterboxd} alt="letterboxd" />
					</div>
				</a>
				<!-- {@render social('https://github.com/lrfalslev', 'github', '{createNote}')}
				{@render social('https://www.linkedin.com/in/luke-falslev/', 'linkedin', { linkedin })}
				{@render social('https://letterboxd.com/lrfalslev/', 'letterboxd', { letterboxd })} -->
			</div>
		</div>
	</div>
</div>

{#snippet social(link: string, name: string, logo: string)}
	<a target="_blank" aria-label={name} rel="noopener noreferrer" href={link}>
        <div class="h-12 w-12">
            <img src={logo} alt={name} />
        </div>
	</a>
{/snippet}
