<script>
  import { activeImage, closeLightbox } from "$lib/stores/lightboxStore.js";

  // Handle keyboard events for accessibility
  function handleKeydown(event) {
    if (event.key === "Escape") closeLightbox();
  }
</script>

{#if $activeImage}
  <div
    class="overlay"
    role="dialog"
    aria-modal="true"
    tabindex="0"
    on:click={closeLightbox}
    on:keydown={handleKeydown}
  >
    <!-- Wrap image in button for accessibility (no click on img itself) -->
    <button
      type="button"
      class="preview-button"
      on:click|stopPropagation
      tabindex="-1"
      aria-hidden="true"
    >
      <img class="preview" src={$activeImage} alt="Preview" />
    </button>

    <!-- Close button -->
    <button
      type="button"
      class="close-btn"
      aria-label="Close lightbox"
      on:click={closeLightbox}
    >
      ×
    </button>
  </div>
{/if}

<style>
  .overlay {
    position: fixed;
    width: 100%;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    cursor: pointer;
    outline: none;
  }

  .preview-button {
    border: none;
    background: none;
    padding: 0;
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 90vh; /* use viewport height instead of % of parent */
  }

  .preview {
    width: auto; /* allow width to scale */
    height: 90vh; /* fills 90% of viewport height */
    max-width: 90vw; /* don’t exceed viewport width */
    object-fit: contain; /* keep aspect ratio */
  }

  .preview-button img {
    margin: auto;
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    font-size: 2rem;
    padding: 0.2rem 0.6rem;
    cursor: pointer;
    border-radius: 4px;
  }

  .close-btn:hover {
    color: red;
  }
</style>
