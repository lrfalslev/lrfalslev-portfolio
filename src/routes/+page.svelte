<script lang="ts">
        import Letterboxd from '$lib/assets/letterboxd.svelte';
        import Github from '$lib/assets/github.svelte';
        import Linkedin from '$lib/assets/linkedin.svelte';
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
		<div class="font-extrabold text-center md:text-left">
			<h1 class="my-2 text-2xl md:text-4xl lg:text-5xl">Hello, I'm Luke!</h1>
			<p class="font-light my-4 md:text-2xl">
				I'm a full stack software developer who likes elegant solutions. I enjoy cycling, good food,
				snowboarding, and watching movies.
			</p>
			<div class="inline-flex w-full items-center justify-center py-4">
				{@render social('github', 'https://github.com/lrfalslev', Github)}
				{@render social('linkedin', 'https://www.linkedin.com/in/luke-falslev/', Linkedin)}
				{@render social('letterboxd', 'https://letterboxd.com/lrfalslev/', Letterboxd)}
			</div>
		</div>
	</div>
</div>

{#snippet social(name: string, link: string, Icon: any)}
<div class="px-4 md:px-7" >
	<a target="_blank" aria-label={name} rel="noopener noreferrer" href={link} class="fill-[#d6d6d6] hover:fill-white">
        <div class="h-8 md:h-12 w-8 md:w-12">
            <Icon />
        </div>
	</a>
</div>
{/snippet}