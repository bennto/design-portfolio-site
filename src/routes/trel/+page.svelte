<script>
  import video from "$lib/assets/trel/trel-home.mp4";
  import A from "$lib/assets/trel/trel-1.gif";
  import B from "$lib/assets/trel/trel-2.gif";
</script>

<section>
  <h1>Texas Rocket Engineering Lab</h1>
  <h6>Fall 2021 - Spring 2023</h6>
  <br />
  <div class="thumbnail-container">
    <!-- svelte-ignore a11y-media-has-caption -->
    <video autoplay loop src={video}></video>
  </div>
  <p>
    Texas Rocket Engineering Lab (TREL) was one of the first student
    organizations that I joined in college. Their goal was to build a rocket and
    my job was to build a website promoting the org.
  </p>
  <p>A couple of highlights from my time at TREL include:</p>
  <ul>
    <li>
      Implementing a backend dashboard so our copywriting team could directly
      create blog content for the website;
    </li>
    <li>
      Implementing SEO by creating UGC, increasing backlinks to site, and more;
    </li>
    <li>
      And training and managing new students seeking to learn web development!
    </li>
  </ul>
  <p>
    A more in-depth writeup can be found <a
      href="https://www.behance.net/gallery/160758205/Texas-Rocket-Engineering-Lab-(UX-Case-Study)"
      target="_blank"
      rel="noopener noreferrer">here</a
    >.
  </p>
  <div class="thumbnail-container">
    <img src={A} alt="Access Coordinator problems" />
  </div>
  <div class="thumbnail-container">
    <img src={B} alt="Access Coordinator problems" />
  </div>
</section>

<style>
  .thumbnail-container {
    width: 100%;
    display: flex;
    overflow: hidden;
    margin-bottom: 6px;
  }
  .thumbnail-container video {
    object-fit: cover;
    width: 100%;
    animation: fadeIn 2s cubic-bezier(0.25, 0.48, 0.55, 1.01);
  }
  .thumbnail-container img {
    object-fit: cover;
    width: 100%;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
