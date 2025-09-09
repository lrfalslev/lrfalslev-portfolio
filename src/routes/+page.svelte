<script lang="ts">
        import Letterboxd from '$lib/assets/letterboxd.svelte';
        import Github from '$lib/assets/github.svelte';
        import Linkedin from '$lib/assets/linkedin.svelte';
</script>

<div
	class="hero h-[calc(100vh-5rem)]"
	style="background-image: url('/P1020650.JPG'); background-position: center 80%;"
>
	<div class="hero-overlay bg-opacity-60 brightness-0"></div>
	<div class="hero-content flex-col md:flex-row w-full md:w-2/3">
		<div class="avatar md:me-4">
			<div class="w-40 h-64 md:w-60 md:h-96 rounded-2xl ring-gray-200 ring-offset-zinc-700 ring ring-offset-4">
				<img
					class="scale-x-[-1] size-24 object-right-top"
					src="luke-temp-profile.jpg"
					alt="Luke's headshot"
				/>
			</div>
		</div>
		<div class="font-extrabold">
			<h1 class="text-center md:text-left my-4 text-md md:text-4xl lg:text-5xl">Lucas Falslev</h1>
			<div class="font-light my-4 text-sm md:text-xl space-y-3">
				<p>I'm a software engineer passionate about building clean, scalable solutions that solve real-world problems.</p>
				<p>My experience spans backend services, event-driven systems, and modern web technologies, with a focus on reliability, maintainability, and performance.</p>
				<p>Outside of work, I enjoy cycling scenic routes in the summer, snowboarding in the winter, experimenting with new recipes, and relaxing with a good movie.</p>
			</div>
			<div class="inline-flex w-full items-center justify-center mt-10">
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