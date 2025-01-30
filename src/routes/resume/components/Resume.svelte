<script lang="ts">
</script>

<div id="resume" class="py-4 px-4 lg:px-8 xl:px-28">
	<h1 class="text-4xl text-center pb-2">Lucas Falslev</h1>
	<div class="justify">
		<span>lrfalslev@gmail.com</span>
		<span>(385) 313-7895</span>
		<a class="link" href="https://lrfalslev-portfolio.pages.dev">lrfalslev-portfolio.pages.dev</a>
	</div>
	<div>
		<h2>SKILLS:</h2>
		<ul>
			<li><b>Most Experienced</b> - C#, PHP</li>
			<li><b>Some Experience</b> - JavaScript, HTML/CSS</li>
			<li><b>Frameworks</b> - .NET 8, .NET 6, Laravel 7, SvelteKit</li>
			<li><b>Databases</b> - MongoDB, MSSQL, MySQL</li>
		</ul>
	</div>
	<div>
		<h2>EXPERIENCE:</h2>
		<div>
			{@render experience({
				company: 'J.B. Hunt',
				location: 'Remote, USA',
				titles: ['Software Developer II', 'Software Developer I'],
				tenures: ['2024 – Present', 'Dec 2022 – Sept 2024'],
				points: [
					'Added new nested data structure in request space to support International and Final Mile requests, maintained backwards compatibility for current processes/systems',
					'Ingested messages from ActiveMQ, Kafka and API calls; updated and added API endpoints to surface new order and request tracking information',
					'Converted apps from Kubernetes YAML/Kustomize manifests to Helm Charts',
					'Collaborated with senior developers and architects to determine solutions and implemented them, assisted interns with onboarding and roadblocks',
					'Updated schemas to current API specifications, documented processes in team wikis'
				]
			})}
			{@render experience({
				company: 'Fox Pest Control',
				location: 'Logan, UT',
				titles: ['Jr Software Architect', 'Software Developer'],
				tenures: ['April 2022 – Dec 2022', 'Jun 2021 – Mar 2022'],
				points: [
					'Refactored payroll processing service to decrease processing time by 50%',
					'Developed and maintained tests to increase code coverage from 55% to over 80%',
					'Planned and implemented a rewrite of payroll software to comply with tax law',
					'Performed code reviews for a team of 7 developers to keep applications maintainable',
					'Built new features and fixed bugs using PHP, Laravel, and Javascript'
				]
			})}
			{@render experience({
				company: 'Fox Pest Control',
				location: 'Lexington, KY',
				titles: ['Route Sales Manager'],
				tenures: ['Summers 2017 – 2020'],
				points: [
					'Generated over $60,000 revenue (2020)',
					'Generated avg $40,000 revenue (2017-2019)',
					'Provided sales training for first year reps'
				]
			})}
		</div>
	</div>
	<div>
		<h2>EDUCATION:</h2>
		<div>
			<div class="justify">
				<span
					><b class="text-xs md:text-sm lg:text-lg">University of Utah</b>, Salt Lake City, UT</span
				>
				<span>Graduated 2021</span>
			</div>
			<ul class="list-disc list-outside ms-8">
				<li>B.S. in Computer Science</li>
				<li>Minor in Spanish</li>
			</ul>
		</div>
	</div>
	<div>
		<h2>PROJECTS:</h2>
		<div>
			{@render project({
				name: 'Personal Portfolio',
				stack: 'Sveltekit, Tailwind, TypeScript',
				link: 'https://github.com/lrfalslev/lrfalslev-portfolio',
				points: [
					'Designed and coded a responsive personal portfolio with Sveltekit',
					'Automated deployment to Cloudflare with Github actions'
				]
			})}
			{@render project({
				name: '"Zombiez" Game',
				stack: 'Lua, Love2D',
				link: 'https://github.com/coledtaylor/hackathon',
				points: [
					'Built a 2D top down shooter as part of a team for a USU Hackathon',
					'Drew game world, managed camera tracking and game state'
				]
			})}
		</div>
	</div>
</div>

{#snippet experience(experience: any)}
	<div class="[&:not(:first-child)]:mt-2">
		{#each experience.titles as title, i}
			<div class="justify">
				<span><b class="text-xs md:text-sm lg:text-lg">{title}</b>, {experience.company}</span>
				<span>{experience.tenures[i]}</span>
			</div>
		{/each}
		<span>{experience.location}</span>
		<ul class="list-disc list-outside ms-8">
			{#each experience.points as point}
				<li>{point}</li>
			{/each}
		</ul>
	</div>
{/snippet}

{#snippet project(project: any)}
	<div class="[&:not(:first-child)]:mt-2">
		<div class="justify">
			<b class="text-xs md:text-sm lg:text-lg">{project.name}</b>
			<span>{project.stack}</span>
		</div>
		<a class="link" href={project.link}>{project.link}</a>
		<ul class="list-disc list-outside ms-8">
			{#each project.points as point}
				<li>{point}</li>
			{/each}
		</ul>
	</div>
{/snippet}

<style lang="postcss">
	h2 {
		@apply mt-4 border-b;
	}
	div.justify {
		@apply inline-flex w-full items-center justify-between;
	}
	@media print {
		:global(body) {
			visibility: hidden;
		}
		#resume {
			visibility: visible;
			font-family: 'Times New Roman';
		}
	}
</style>
