<script lang="ts">
    let date = new Date().toISOString().split('T')[0];
    let filename = "LucasFalslevResume" + date + ".pdf";
</script>

<div class="w-2/3 mt-3 max-h-screen overflow-y-auto bg-primary">
    <div class="py-4 px-28">   
        <h1 class="text-4xl text-center">Lucas Falslev</h1>
        <div class="container mx-auto w-full">
            <div class="inline-flex items-center justify-between w-full">
                <span>lrfalslev@gmail.com</span>
                <span>https://lrfalslev-portfolio.pages.dev/</span>
            </div>
            <div class="inline-flex items-center justify-between w-full">
                <span>(385) 313-7895</span>
                <span>linkedin.com/in/luke-falslev</span>
            </div>
        </div>
        <div>
            <h2 class="mt-4 border-b">SKILLS:</h2>
            <ul>
                <li><b>Most Experienced</b> - C#, PHP</li>
                <li><b>Some Experience</b> - JavaScript, HTML/CSS</li>
                <li><b>Frameworks</b> - .NET 8, .NET 6, Laravel 7, SvelteKit</li>
                <li><b>Databases</b> - MongoDB, MSSQL, MySQL</li>
            </ul>
        </div>
        <div>
            <h2 class="mt-4 border-b">EXPERIENCE:</h2>
            <div>
                <div class="container mx-auto w-full">
                    <div class="inline-flex items-center justify-between w-full">
                        <span><b class="text-lg">Software Developer II</b>, J.B. Hunt</span>
                        <span>Sept 2024 – Present</span>
                    </div>
                    <div class="inline-flex items-center justify-between w-full">
                        <span><b class="text-lg">Software Developer I</b>, J.B. Hunt</span>
                        <span>Dec 2022 – Sept 2024</span>
                    </div>
                </div>
                <span>Remote, USA</span>
                <ul class="list-disc list-outside ms-8">
                    <li>Added new nested data structure in request space to support International and Final Mile requests,
                        maintained backwards compatibility for current processes/systems</li>
                    <li>Ingested messages from ActiveMQ, Kafka and API calls; updated and added API endpoints to surface new
                        order and request tracking information</li>
                    <li>Converted apps from Kubernetes YAML/Kustomize manifests to Helm Charts</li>
                    <li>Collaborated with senior developers and architects to determine solutions and implemented them,
                        assisted interns with onboarding and roadblocks</li>
                    <li>Updated schemas to current API specifications, documented processes in team wikis</li>
                </ul>
            </div>
            <div class="mt-2">
                <div class="container mx-auto w-full">
                    <div class="inline-flex items-center justify-between w-full">
                        <span><b class="text-lg">Jr. Software Architect</b>, Fox Pest Control</span>
                        <span>April 2022 – Dec 2022</span>
                    </div>
                    <div class="inline-flex items-center justify-between w-full">
                        <span><b class="text-lg">Software Developer I</b>, Fox Pest Control</span>
                        <span>Jun 2021 – Mar 2022</span>
                    </div>
                </div>
                <span>Logan, UT</span>
                <ul class="list-disc list-outside ms-8">
                    <li>Refactored payroll processing service to decrease processing time by 50%</li>
                    <li>Developed and maintained tests to increase code coverage from 55% to over 80%</li>
                    <li>Planned and implemented a rewrite of payroll software to comply with tax law</li>
                    <li>Performed code reviews for a team of 7 developers to keep applications maintainable</li>
                    <li>Built new features and fixed bugs using PHP, Laravel, and Javascript</li>
                </ul>
            </div>
            <div class="mt-2">
                <div class="container mx-auto w-full">
                    <div class="inline-flex items-center justify-between w-full">
                        <span><b class="text-lg">Route Sales Manager</b>, Fox Pest Control</span>
                        <span>Summers 2017 – 2020</span>
                    </div>
                </div>
                <span>Lexington, KY</span>
                <ul class="list-disc list-outside ms-8">
                    <li>Generated over $60,000 revenue (2020)</li>
                    <li>Generated avg $40,000 revenue (2017-2019)</li>
                    <li>Provided sales training for first year reps</li>
                </ul>
            </div>
        </div>
        <div>
            <h2 class="mt-4 border-b">EDUCATION:</h2>
            <div>
                <div class="container mx-auto w-full">
                    <div class="inline-flex items-center justify-between w-full">
                        <span><b class="text-lg">University of Utah</b>, Salt Lake City, UT</span>
                        <span>Graduated 2021</span>
                    </div>
                </div>
                <ul class="list-disc list-outside ms-8">
                    <li>B.S. in Computer Science</li>
                    <li>Minor in Spanish</li>
                </ul>
            </div>
        </div>
        <div>
            <h2 class="mt-4 border-b">PROJECTS:</h2>
            <div>
                <div class="container mx-auto w-full">
                    <div class="inline-flex items-center justify-between w-full">
                        <b class="text-lg">Personal Portfolio</b>
                        <span>Sveltekit, Tailwind</span>
                    </div>
                </div>
                <a href="https://github.com/lrfalslev/lrfalslev-portfolio">https://github.com/lrfalslev/lrfalslev-portfolio</a>
                <ul class="list-disc list-outside ms-8">
                    <li>Designed and coded a responsive personal portfolio with Sveltekit</li>
                    <li>Automated deployment to cloudflare with github actions</li>
                </ul>
            </div>
            <div class="mt-2">
                <div class="container mx-auto w-full">
                    <div class="inline-flex items-center justify-between w-full">
                        <b class="text-lg">Zombiez Game</b>
                        <span>Lua, Love2D</span>
                    </div>
                </div>
                <a href="https://github.com/coledtaylor/hackathon">https://github.com/coledtaylor/hackathon</a>
                <ul class="list-disc list-outside ms-8">
                    <li>Constructed a functional 2D top down shooter as part of a team for a USU Hackathon</li>
                    <li>Built game world, managed camera tracking and game state</li>
                </ul>
            </div>
        </div>
    </div>
</div>

<div class="btn my-2">
    <a download={filename} target="_blank" href={"/LucasFalslevResume.pdf"}>
        Download .pdf
    </a>
</div>