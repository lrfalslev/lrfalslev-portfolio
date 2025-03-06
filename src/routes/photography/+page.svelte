<script lang="ts">
  import Lightbox from './components/Lightbox.svelte';
  import type { Album } from './components/Lightbox.svelte';
  
  const assets: { [key: string]: string } = import.meta.glob('$lib/assets/photography/*/*.jpg', {
    query: '?url',
    import: 'default',
    eager: true,
  });

  let albumIdx = 0;
  const albums: Album[] = [];

  Object.entries(assets).forEach(([path, img]) => {
    const directoryName = path.split('/').slice(-2, -1)[0];
    const album = albums.find(a => a.name === directoryName);

    if (album) {
      album.images.push(img);
    } else {
      albums.push({ name: directoryName, images: [img] });
    }
  });

  function openLightbox (idx: number) {
      albumIdx = idx;
      const targetElement = document.getElementById('lightbox');
      targetElement?.requestFullscreen?.call(targetElement);
    }
</script>

<Lightbox bind:albumIdx={albumIdx} albums={albums}/>

<div class="w-full max-h-screen overflow-y-auto bg-primary no-scrollbar">
  <div class="grid
    grid-cols-1 md:grid-cols-2  lg:grid-cols-3 
    gap-4       md:gap-8        lg:gap-12 
    py-4        md:py-8         lg:py-20 
    mx-4        md:mx-8         lg:mx-20">
    {#each albums as album, idx}
      <div class="flex items-center justify-center">
        <button on:click={_ => openLightbox(idx)} class="card card-compact bg-base-300 shadow-xl">
          <img src={album.images[0]} alt="{album.images[0].split('/').pop()}" />
          <div class="card-body">
            <p>{album.name}</p>
          </div>
        </button>
      </div>
    {/each}
  </div>
</div>

<p>This page is a work in progress :)</p>

<style>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>