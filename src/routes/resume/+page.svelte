<script lang="ts">
    import Resume from './components/Resume.svelte';
    let date = new Date().toISOString().split('T')[0];
    let filename = "LucasFalslevResume" + date + ".pdf";
</script>

<div class="w-[95%] md:w-5/6 lg:w-2/3 text-[8px] md:text-sm lg:text-base mt-3 max-h-screen overflow-y-auto bg-primary">
    <Resume/>
</div>

<div class="btn my-2">
    <a download={filename} target="_blank" href={"/LucasFalslevResume.pdf"}>
        Download .pdf
    </a>
</div>