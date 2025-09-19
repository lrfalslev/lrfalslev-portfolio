<script lang="ts">
</script>

<div id="resume" class="py-4 px-4 lg:px-8 xl:px-28">
	<h1 class="text-2xl text-center pb-2">Lucas Falslev</h1>
	<div class="justify">
		<span>lrfalslev@gmail.com</span>
		<span>(385) 313-7895</span>
		<a class="link" href="https://www.linkedin.com/in/luke-falslev/">linkedin.com/in/luke-falslev</a>
	</div>
	<div>
		<h2>EXPERIENCE:</h2>
		<div>
			{@render experience({
				company: 'J.B. Hunt',
				location: 'Remote, USA',
				titles: ['Software Developer II', 'Software Developer I'],
				tenures: ['Sept 2024 - Present', 'Dec 2022 - Sept 2024'],
				points: [
					'Primary developer on an externally available tracking solution with enterprise wide integrations.',
					'Improved maintainability and data integrity by rewriting core services, consolidating redundant processes, and standardizing data models, event types, and timestamps.',
					'Migrated CI/CD from YAML/Kustomize to Helm, streamlining deployments.',
					'Collaborated across teams to modernize legacy systems by developing and validating new workflows. Ensured functional parity, and backwards compatibility.',
					'Partnered with senior engineers on solution design and mentored interns through onboarding and technical challenges.',
				]
			})}
			{@render experience({
				company: 'Fox Pest Control',
				location: 'Logan, UT',
				titles: ['Jr Software Architect', 'Software Developer'],
				tenures: ['April 2022 - Dec 2022', 'Jun 2021 - Mar 2022'],
				points: [
					'Refactored payroll processing service to decrease processing time by 50%.',
					'Developed and maintained tests to increase code coverage from 55% to over 80%.',
					'Planned and executed a rewrite of payroll software to comply with tax law.',
					'Performed code reviews and aided in sprint planning for a team of 7 developers.',
					'Built new features and fixed bugs using PHP, Laravel, and Javascript.'
				]
			})}
			{@render experience({
				company: 'Fox Pest Control',
				location: 'Lexington, KY',
				titles: ['Route Sales Manager'],
				tenures: ['Summers 2017 - 2020'],
				points: [
					'Generated over $60,000 in 2020 and $40,000 average in 2017-2019.',
					'Provided sales training for first-year sales reps.'
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
		<h2>SKILLS:</h2>
		<ul>
			<li><b>Languages & Frameworks:</b> C#, .NET, TypeScript, SvelteKit, PHP, Laravel</li>
			<li><b>Technologies & Tools:</b> MongoDB, SQL, Kafka, ActiveMQ, Kubernetes, Git</li>
			<li><b>Other:</b> Fluent in Spanish</li>
		</ul>
	</div>
	<div>
		<h2>PROJECTS:</h2>
		<div>
			{@render project({
				name: 'Workplace Leaderboard',
				stack: 'Sveltekit, TypeScript, SQLite',
				link: 'https://github.com/lrfalslev/workplace-leaderboard',
				points: [
					'Designed and built a full-stack web application to track workplace metrics and lottery tickets for an internal small business competition.',
					'Developed a RESTful API to handle CRUD operations and query data summaries.',
					'Integrated ApexCharts.js to render a reactive leaderboard with role-based views.'
				]
			})}
			{@render project({
				name: '"Zombiez" Game',
				stack: 'Lua, Love2D',
				link: 'https://github.com/coledtaylor/hackathon',
				points: [
					'Handled camera tracking and state logic of a 2D top-down shooter for HackUSU.'
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
		<div>
			<b class="text-xs md:text-sm lg:text-lg">{project.name}</b>
			<span>({project.stack})</span>
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
