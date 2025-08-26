<script>
  import { openLightbox } from "$lib/stores/lightboxStore.js";
  import Thumbnail from "$lib/assets/thumbnails/1_ale.png";

  // Grab all PNGs in the thumbnails folder
  const thumbnails = import.meta.glob("$lib/assets/ale/ale-*.png", {
    eager: true,
  });

  // Turn into an array with filename info
  const images = Object.entries(thumbnails).map(([path, mod]) => {
    const filename = path.split("/").pop();
    const name = filename.replace(".png", "");
    return { src: mod.default, name };
  });
</script>

<section>
  <h1>Alienware Longhorn Esports</h1>
  <h6>Summer 2024 - Summer 2025</h6>
  <br />
  <div class="image-container">
    <img src={Thumbnail} alt="ALE thumbnail" />
  </div>
  <p>
    After I graduated from college, I continued working at our school's gaming
    lounge. I tackled a wide range of responsibilities, ranging from marketing
    to financial reporting. Some highlights include:
  </p>
  <h2>Esports Summer Camp</h2>
  <p>
    A major project I undertook during my time at ALE was designing our
    first-ever summer camp. I was responsible for pitching the project to
    leadership, coordinating with relevant stakeholders, and promoting the
    event.
  </p>
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
  <h2>Financials & Reporting</h2>
  <p>
    Another vital responsibility I had was to check and update our financials
    month-over-month. To do so, I created an Excel spreadsheet which took in
    individual sales entries and output our sales consolidated by month,
    semester, and year.
  </p>
  <p>
    I then took that sales data and used Python to create a sales dashboard. The
    purpose of this was to create a user-friendly interface for non-technical
    stakeholders.
  </p>
  <div class="image-container">
    <img src={images[3].src} alt={images[3].name} />
  </div>
  <p>
    Visit the dashboard <a
      href="https://ale-sales.streamlit.app/"
      target="_blank"
      rel="noopener noreferrer">here</a
    >!
  </p>
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
