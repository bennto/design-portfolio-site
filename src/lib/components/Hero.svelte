<script>
  const thumbnails = import.meta.glob("$lib/assets/thumbnails/*.png", {
    eager: true,
  });
  const images = Object.entries(thumbnails).map(([path, mod]) => {
    const filename = path.split("/").pop(); // e.g. "site_chicha.png"
    const name = filename.split("_").pop().replace(".png", ""); // e.g. "chicha"
    return { src: mod.default, href: `/${name}` };
  });

  console.log(images);
</script>

<section>
  <div class="image-grid">
    {#each images as img}
      <a href={img.href}>
        <div class="image-container">
          <img src={img.src} alt={img.href.slice(1)} />
        </div>
      </a>
    {/each}
  </div>
</section>

<style>
  .image-grid {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.4rem;
  }
  .image-container {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    transition: 0.2s ease;
  }
  .image-container img {
    object-fit: cover;
    width: 100%;
    transition: 0.2s ease;
    cursor: pointer;
  }
  .image-container:hover {
    border-radius: 10px;
  }
  img:hover {
    transform: scale(1.1);
  }
</style>
