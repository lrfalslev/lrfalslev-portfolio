<script lang="ts">
  import Lightbox from './components/Lightbox.svelte';

  import img1 from '$lib/assets/pictures/P1010819.jpg';
  import img2 from '$lib/assets/pictures/P1010859.jpg';
  import img3 from '$lib/assets/pictures/P1010879.jpg';
  import img4 from '$lib/assets/pictures/P1010881.jpg';
  import img5 from '$lib/assets/pictures/P1020990.jpg';
  import img6 from '$lib/assets/pictures/P1030022.jpg';
  import img7 from '$lib/assets/pictures/P1030085.jpg';
  import img8 from '$lib/assets/pictures/P1030088.jpg';
  import img9 from '$lib/assets/pictures/P1030162.jpg';
  import img10 from '$lib/assets/pictures/P1030164.jpg';
  import img11 from '$lib/assets/pictures/P1030167.jpg';
  import img12 from '$lib/assets/pictures/P1030173.jpg';
  import img13 from '$lib/assets/pictures/P1030243.jpg';
  import img14 from '$lib/assets/pictures/P1030250.jpg';
  import img15 from '$lib/assets/pictures/P1030257.jpg';

  let albumIdx = 0;
  let albums = [
    {description: "Farmington Station", images: [img1, img2, img3, img4]},
    {description: "Old Granary", images: [img5, img6, img7, img8]},
    {description: "USU Greenhouse", images: [img9, img10, img11, img12]},
    {description: "Moab", images: [img13, img14, img15]}
  ];
  
  function openLightbox (idx: number) {
      albumIdx = idx;
      const targetElement = document.getElementById('lightbox');

      var requestMethod = targetElement?.requestFullscreen;

      if (requestMethod) {
        requestMethod.call(targetElement);
      }
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
          <figure>
            {#if idx < 3}
              <img src={album.images[0]} alt="img" />
            {:else}
              <img loading=lazy src={album.images[0]} alt="img" />
            {/if}
          </figure>
          <div class="card-body">
            <p>{album.description}</p>
          </div>
        </button>
      </div>
    {/each}
  </div>
  
</div>

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