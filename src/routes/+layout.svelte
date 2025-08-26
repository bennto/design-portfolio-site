<script>
  import Lightbox from "$lib/components/Lightbox.svelte";
  import favicon from "$lib/assets/favicon.svg";
  import Navbar from "$lib/components/Navbar.svelte";
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

<div class="app-container">
  <Navbar />
  <div class="main-container">
    <main class="main-content">
      <slot />
      <Lightbox />
    </main>
  </div>
</div>

<style>
  .app-container {
    display: flex;
    flex-direction: row;
    min-height: 100vh;
    width: 100vw;
  }

  .main-container {
    width: calc(100vw - 260px);
    min-height: 100%;
    margin-left: 260px; /* shift content right of sidebar */
    padding-top: 40px;
    display: flex;
    align-items: center;
  }

  main.main-content {
    width: 80%;
    height: fit-content;
    max-width: 710px;
    margin: 3rem auto; /* centers horizontally within flex-grow space */
    padding: 2rem;
  }

  @media (max-width: 1340px) {
    main.main-content {
      width: 90%;
    }
  }

  @media (max-width: 767px) {
    .app-container {
      flex-direction: column;
    }
    .main-container {
      margin-left: 0;
      width: 100%;
    }
    main.main-content {
      width: 100%;
      max-width: none;
      margin: 0;
    }
  }
</style>
