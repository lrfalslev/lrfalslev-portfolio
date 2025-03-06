<script module lang="ts">
	export interface Album {
      name: string;
      images: Array<string>;
    }
</script>
  
<script lang="ts">
	export let albumIdx: number;
	export let albums: Array<Album>; 
	let imgIdx = 0;
	let isFullScreen = false;
	let uiVisible = false;
	let indicatorsVisible = false;

	function imgIterate(change: number) {
		showIndicators();
		const imgCount = albums[albumIdx].images.length;
		imgIdx = (imgIdx + change + imgCount) % imgCount;
	}

	function albumIterate(change: number) {
		showIndicators();
		albumIdx = (albumIdx + change + albums.length) % albums.length;
		imgIdx = 0;
	}

	function handleFullscreenChange() {
		isFullScreen = !isFullScreen;
		imgIdx = 0;
	}

	function mouseActive() {
		document.body.style.cursor = 'default';
		uiVisible = true;
		
		resetHideTimeout(() => {
			uiVisible = false;
			document.body.style.cursor = 'none';
		});
	}

	function showIndicators() {
		indicatorsVisible = true;

		resetHideTimeout(() => {
			indicatorsVisible = false;
		});
	}

	function resetHideTimeout(action: () => void) {
		clearTimeout((window as any).hideTimeout);
		(window as any).hideTimeout = setTimeout(action, 750);
	}

	function onKeyDown(e: KeyboardEvent) {
		switch (e.key) {
			case 'ArrowLeft':
				imgIterate(-1);
				break;
			case 'ArrowRight':
				imgIterate(1);
				break;
			case 'Escape':
				document.exitFullscreen();
				break;
			case 'Tab':
				albumIterate(e.shiftKey ? -1 : 1);
				return false;
		}
	}
</script>

<div id="lightbox" class="{isFullScreen ? '' : 'hidden'} absolute h-full w-full bg-primary">
	{#if uiVisible}
		{#if albums[albumIdx].images.length > 1}
			<div class="absolute inset-y-0 left-0 flex items-center justify-center">
				<button aria-label="prev" on:click={_ => imgIterate(-1)} class="icon h-3/4 rounded-r-3xl">
					<svg viewBox="0 -960 960 960">
						<path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
					</svg>
				</button>
			</div>
			<div class="absolute inset-y-0 right-0 flex items-center justify-center">
				<button aria-label="next" on:click={_ => imgIterate(1)} class="icon h-3/4 rounded-l-3xl">
					<svg viewBox="0 -960 960 960">
						<path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" />
					</svg>
				</button>
			</div>
		{/if}
		<button aria-label="close" on:click={_ => document.exitFullscreen()} class="absolute top-0 right-0 flex items-center justify-center icon rounded-bl-3xl">
			<svg viewBox="0 -960 960 960">
				<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
			</svg>
		</button>
	{/if}
	{#if uiVisible || indicatorsVisible}
		<div class="absolute inset-x-0 bottom-2 flex items-center justify-center">
			<div class="flex h-6 fill-white">
				{#each albums[albumIdx].images, i}
					{#if i == imgIdx}
						<svg viewBox="0 -960 960 960">
							<path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
						</svg>
					{:else}
						<svg viewBox="0 -960 960 960">
							<path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/>
						</svg>
					{/if}
				{/each}
			</div>
		</div>
	{/if}	
	<img class="w-full h-full object-scale-down" src={albums[albumIdx].images[imgIdx]} alt="{albums[albumIdx].images[imgIdx].split('/').pop()}" />
</div>

<svelte:window on:fullscreenchange={handleFullscreenChange} on:mousemove={mouseActive}  
	on:keydown|preventDefault={onKeyDown}/>

<style lang="postcss">
	.icon {
		@apply flex w-16 items-center justify-center fill-white p-4 opacity-55 hover:bg-stone-300 hover:fill-stone-700;
	}
</style>
