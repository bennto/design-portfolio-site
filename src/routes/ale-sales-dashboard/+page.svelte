<script>
  import { openLightbox } from "$lib/stores/lightboxStore.js";

  // Grab all PNGs in the thumbnails folder
  const thumbnails = import.meta.glob(
    "$lib/assets/ale-sales-dashboard/ale-*.png",
    {
      eager: true,
    }
  );

  // Turn into an array with filename info
  const images = Object.entries(thumbnails).map(([path, mod]) => {
    const filename = path.split("/").pop();
    const name = filename.replace(".png", "");
    return { src: mod.default, name };
  });
</script>

<section>
  <h1>ALE Sales Dashboard</h1>
  <h6>August 2025</h6>
  <br />
  <div class="image-container">
    <button type="button" on:click={() => openLightbox(images[0].src)}>
      <img src={images[0].src} alt={images[0].name} />
    </button>
  </div>
  <p>
    At Alienware Longhorn Esports, I was responsible for checking and updating
    our financials month-over-month. To do so, I created an Excel spreadsheet
    which took in individual sales entries and output our sales consolidated by
    month, semester, and year.
  </p>
  <p>
    I then used that sales data to create a dashboard using Python, Pandas, and
    Streamlit. You can visit the dashboard <a
      href="https://ale-sales.streamlit.app/"
      target="_blank"
      rel="noopener noreferrer">here!</a
    >
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
    box-sizing: border-box;
  }
</style>
