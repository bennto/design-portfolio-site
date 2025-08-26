<script>
  import { openLightbox } from "$lib/stores/lightboxStore.js";

  // Grab all PNGs in the thumbnails folder
  const thumbnails = import.meta.glob("$lib/assets/chicha/chicha-*.png", {
    eager: true,
  });

  // Turn into an array with filename info
  const images = Object.entries(thumbnails).map(([path, mod]) => {
    const filename = path.split("/").pop(); // e.g. "chicha-1.png"
    const name = filename.replace(".png", ""); // e.g. "chicha-1"
    return { src: mod.default, name };
  });
</script>

<section>
  <h1>Chicha San Chen</h1>
  <h6>Fall 2024</h6>
  <br />
  <p>
    ChiCha San Chen is a bubble tea brand and chain based in Taiwan. They're
    known for their high-quality tea leaves and premium beverages and an
    exceptional in-store experience. In this case study, my goal was to bring
    that same elevated experience to a mobile ordering app where customers can
    create, save, and order their favorite drinks.
  </p>
  <div class="thumbnail-container">
    <img src={images[0].src} alt={images[0].name} />
  </div>
  <h2>Planning</h2>
  <div class="thumbnail-container">
    <button type="button" on:click={() => openLightbox(images[1].src)}>
      <img src={images[1].src} alt={images[1].name} />
    </button>
  </div>
  <div class="thumbnail-container">
    <button type="button" on:click={() => openLightbox(images[2].src)}>
      <img src={images[2].src} alt={images[2].name} />
    </button>
  </div>
  <h2>Wireframing</h2>
  <div class="thumbnail-container">
    <button type="button" on:click={() => openLightbox(images[3].src)}>
      <img src={images[3].src} alt={images[3].name} />
    </button>
  </div>
  <div class="thumbnail-container">
    <button type="button" on:click={() => openLightbox(images[4].src)}>
      <img src={images[4].src} alt={images[4].name} />
    </button>
  </div>
  <h2>Designing</h2>
  <div class="thumbnail-container">
    <button type="button" on:click={() => openLightbox(images[5].src)}>
      <img src={images[5].src} alt={images[5].name} />
    </button>
  </div>
  <div class="thumbnail-container">
    <button type="button" on:click={() => openLightbox(images[6].src)}>
      <img src={images[6].src} alt={images[6].name} />
    </button>
  </div>
  <p>
    Play with the <a
      href="https://www.figma.com/proto/g0SBuCuqA6b7IB7sKBuCPK/Practice?node-id=43-94&p=f&viewport=1880%252C-1322%252C0.29&t=vAnma1nEwQCwXbt9-0&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1095%253A9052&show-proto-sidebar=1"
      target="_blank"
      rel="noopener noreferrer">Figma prototype</a
    > here!
  </p>
</section>

<style>
  .thumbnail-container {
    width: 100%;
    display: flex;
    overflow: hidden;
    margin-bottom: 0.6rem;
  }
  .thumbnail-container img {
    object-fit: cover;
    width: 100%;
  }
</style>
