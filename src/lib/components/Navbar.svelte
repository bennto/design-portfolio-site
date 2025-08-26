<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { derived } from "svelte/store";

  const currentPath = derived(page, ($page) => $page.url.pathname);
  const pageName = derived(page, ($page) => {
    const segments = $page.url.pathname.split("/").filter(Boolean);
    return segments[segments.length - 1] || "home";
  });

  let sidebarOpen = false;
  let isMobile = false;

  function toggleSidebar() {
    sidebarOpen = !sidebarOpen;
  }

  onMount(() => {
    // Set initial state
    isMobile = document.documentElement.clientWidth < 768;
    sidebarOpen = !isMobile;

    const handleResize = () => {
      isMobile = document.documentElement.clientWidth < 768;
      sidebarOpen = !isMobile;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
</script>

{#if isMobile}
  <div id="mobile-sidebar">
    <h2>{$pageName}</h2>
  </div>
{/if}

<!-- Hamburger button (mobile only) -->
{#if isMobile && !sidebarOpen}
  <button
    class="hamburger"
    on:click={toggleSidebar}
    aria-label="Open menu"
    aria-expanded={sidebarOpen}
    aria-controls="sidebar"
  >
    <div></div>
    <div></div>
    <div></div>
  </button>
{/if}

<nav id="sidebar" class="sidebar {sidebarOpen ? 'open' : ''}">
  <div class="sidebar-header">
    <div class="logo">Bennett Xu</div>

    {#if isMobile && sidebarOpen}
      <button class="close-btn" on:click={toggleSidebar} aria-label="Close menu"
        >×</button
      >
    {/if}
  </div>

  <a
    href="/"
    class:selected={$currentPath === "/"}
    on:click={() => (sidebarOpen = false)}>Home</a
  >
  <a
    href="/resume"
    class:selected={$currentPath === "/resume"}
    on:click={() => (sidebarOpen = false)}>Resume</a
  >
  <div class="section-header">Marketing</div>
  <a
    href="/ale"
    class:selected={$currentPath === "/ale"}
    on:click={() => (sidebarOpen = false)}>Alienware Longhorn Esports</a
  >
  <div class="section-header">UI / UX</div>
  <a
    href="/finthrive"
    class:selected={$currentPath === "/finthrive"}
    on:click={() => (sidebarOpen = false)}>FinThrive</a
  >
  <a
    href="/chicha"
    class:selected={$currentPath === "/chicha"}
    on:click={() => (sidebarOpen = false)}>Chicha San Chen</a
  >
  <div class="section-header">Webdev</div>
  <a
    href="/trel"
    class:selected={$currentPath === "/trel"}
    on:click={() => (sidebarOpen = false)}>Texas Rocket Engineering Lab</a
  >

  <div class="section-header">Contact</div>
  <a
    href="mailto:benn.too@gmaill.com"
    rel="noopener noreferrer"
    on:click={() => (sidebarOpen = false)}>Email</a
  >
  <a
    href="https://linkedin.com/in/bennettxu"
    target="_blank"
    rel="noopener noreferrer"
    on:click={() => (sidebarOpen = false)}>LinkedIn</a
  >
</nav>

<style>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 260px;
    padding: 2rem 1rem;
    background-color: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    transform: translateX(-100%);
    z-index: 1000;
    line-height: 2rem;
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  #mobile-sidebar {
    position: fixed;

    width: 100%;
    height: 60px;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  #mobile-sidebar h2 {
    text-align: center;
    text-transform: capitalize;
    transform: translateY(-6px);
  }

  .logo {
    font-size: 1.3rem;
    font-weight: 700;
    color: #000;
    margin-left: 0.5rem;
  }

  .close-btn {
    background: none;
    border: none;
    font-size: 2rem;
    margin-right: 0.5rem;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #000;
    padding: 4px 0 4px 0.6rem;
    border-radius: 10px;
    font-size: 0.9rem;
    font-weight: 400;
  }

  a:hover {
    color: red;
  }

  a.selected {
    background-color: rgba(0, 0, 0, 0.1);
    color: black;
  }

  .section-header {
    margin: 32px 0 4px 0.6rem;
    font-size: 0.75rem;
    color: #888;
    letter-spacing: 0.05em;
    user-select: none;
  }

  .hamburger {
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 30px;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: transparent;
    border: none;
    z-index: 1100;
    padding: 0;
    cursor: pointer;
  }

  .hamburger div {
    width: 100%;
    height: 3px;
    background: black;
    border-radius: 3px;
    transform-origin: 1px;
  }

  @media (min-width: 768px) {
    .hamburger {
      display: none;
    }

    .sidebar {
      transform: translateX(0);
    }

    .close-btn {
      display: none;
    }
  }
</style>
