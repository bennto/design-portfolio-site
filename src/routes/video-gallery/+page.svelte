<section>
  <div class="video-grid">
    <div class="video-card">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/ZahhbbXaQPI"
          title="DESCENT | Opening Cutscene Storyboard"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
      <div class="video-info">
        <h3>DESCENT | Opening Cutscene Storyboard</h3>
        <p class="video-date">March 2023</p>
        <p class="video-description">
          This video was created as part of a video game writing class. Inspired
          by pop-up books, I used Apple Motion's 3D rendering feature for more
          realistic lighting. By the end of this project, my poor Mackbook Air
          was begging for mercy!
        </p>
        <div class="video-tags">
          <span class="tag">Apple Motion</span>
          <span class="tag">Procreate</span>
        </div>
      </div>
    </div>
    <div class="video-card">
      <div class="video-container">
        <iframe
          src="https://www.youtube.com/embed/U5AhLEFGSs4"
          title="Teaching Computers How To Smell"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        >
        </iframe>
      </div>
      <div class="video-info">
        <h3>Teaching Computers How To Smell</h3>
        <p class="video-date">February 2023</p>
        <p class="video-description">
          I created this video in coordination for the <a
            href="https://www.behance.net/gallery/160758205/Texas-Rocket-Engineering-Lab-(UX-Case-Study)"
            target="_blank"
            rel="noopener noreferrer">Texas Student Research Showdown</a
          >, obtaining 2nd place! The video explains research conducted by my
          friend, David Park, into translating smells into data!
        </p>
        <div class="video-tags">
          <span class="tag">Adobe After Effects</span>
          <span class="tag">Procreate</span>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .video-grid {
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
  }

  .video-card {
    background: #f9f9f9;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease;
  }

  .video-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .video-container {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }

  .video-info h3 {
    margin: 0 0 0.5rem 0;
    color: #333;
    font-size: 1.25rem;
    font-weight: 600;
  }

  .video-date {
    color: #666;
    font-size: 0.9rem;
    margin: 0 0 1rem 0;
    font-weight: 500;
  }

  .video-description {
    color: #555;
    line-height: 1.6;
    margin: 0 0 1rem 0;
  }

  .video-tags {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .tag {
    background: rgba(0, 0, 0, 0.1);
    color: #333;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
  }

  @media (min-width: 768px) {
    .video-grid {
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
  }
</style>
