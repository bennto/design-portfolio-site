<script>
  import { openLightbox } from "$lib/stores/lightboxStore.js";
  import Thumbnail from "$lib/assets/thumbnails/1_ale-summer-camp.png";

  // Grab all PNGs in the thumbnails folder
  const thumbnails = import.meta.glob(
    "$lib/assets/ale-summer-camp/ale-*.{png,jpg}",
    {
      eager: true,
    }
  );

  // Turn into an array with filename info
  const images = Object.entries(thumbnails).map(([path, mod]) => {
    const filename = path.split("/").pop();
    const name = filename.replace(/\.(png|jpg)$/, "");
    return { src: mod.default, name };
  });
  console.log(images);
</script>

<section>
  <h1>Esports Summer Camp</h1>
  <h6>Summer 2024 - Summer 2025</h6>
  <br />
  <div class="image-container">
    <img src={Thumbnail} alt="ALE thumbnail" />
  </div>
  <p>
    A major project I undertook during my time at Alienware Longhorn Esports was
    designing our first-ever summer camp. I was responsible for pitching the
    project to leadership, coordinating with relevant stakeholders, and
    promoting the event.
  </p>
  <h3>Marketing Deliverables</h3>
  <ul>
    <li>Email campaign targeting ALE and University Unions recipients</li>
    <li>Exclusive discount promotion for university faculty</li>
    <li>USPS Every Door Direct Mail (EDDM) distribution</li>
    <li>Summer Camp Guide listing in Austin Family Magazine</li>
  </ul>
  <div class="image-grid">
    <div class="tall">
      <button type="button" on:click={() => openLightbox(images[0].src)}>
        <img src={images[0].src} alt={images[0].name} />
      </button>
    </div>
    <div class="short">
      <button type="button" on:click={() => openLightbox(images[1].src)}>
        <img src={images[1].src} alt={images[1].name} />
      </button>
    </div>
    <div class="short">
      <button type="button" on:click={() => openLightbox(images[2].src)}>
        <img src={images[2].src} alt={images[2].name} />
      </button>
    </div>
  </div>
  <h3>Outcome</h3>
  <ul>
    <li>Received 36 camper registrations</li>
    <li>Generated $16k in revenue (20% of yearly total)</li>
  </ul>
  <div class="image-container">
    <img src={images[3].src} alt="Esports summer camp" />
  </div>
  <br />
  <div class="image-container">
    <img src={images[4].src} alt="Esports summer camp" />
  </div>
  <br />
  <div class="image-container">
    <img src={images[5].src} alt="Esports summer camp" />
  </div>
</section>

<style>
  .image-container {
    width: 100%;
    display: flex;
    overflow: hidden;
  }
  .image-container:nth-of-type(1) {
    height: 440px;
  }
  .image-container img {
    object-fit: cover;
    width: 100%;
  }
  .image-container img:nth-of-type(1) {
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-sizing: border-box;
  }

  .image-grid {
    display: grid;
    grid-template-columns: 1.05fr 1fr; /* left is wide, right is narrow */
    grid-template-rows: 1fr 1fr; /* two rows */
    gap: 0.5rem;
  }

  .tall {
    grid-row: 1 / span 2; /* spans both rows */
  }

  .short,
  .tall {
    overflow: hidden;
  }

  .image-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }
</style>
