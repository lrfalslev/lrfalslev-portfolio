<script>
    import { onMount } from 'svelte'
    export let src;
    export let alt;

    let loaded = false;

    onMount(() => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            loaded = true;
        };
    })
</script>
    
{#if loaded}
	<img class="w-full h-full object-scale-down" {src} alt={alt} />
{:else}
    <div class="w-16 h-16 border-8 border-dashed rounded-full animate-spin bg-primary"></div>
{/if}
