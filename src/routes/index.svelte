<script context="module" lang="ts">
  export const prerender = true
</script>

<script lang="ts">
  import Counter from "$lib/Counter/index.svelte"
  import svelteWelcomeWebp from "$lib/assets/svelte-welcome.webp"
  import svelteWelcomePng from "$lib/assets/svelte-welcome.png"
</script>

<svelte:head>
  <title>Home</title>
</svelte:head>

<section>
  <h1>
    <div class="welcome">
      <picture>
        <source srcset={svelteWelcomeWebp} type="image/webp" />
        <img src={svelteWelcomePng} alt="Welcome" />
      </picture>
    </div>

    to your new<br />SvelteKit app
  </h1>

  <h2>
    try editing <strong>src/routes/index.svelte</strong>
  </h2>

  <Counter />
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
  }

  h1 {
    width: 100%;
  }

  .welcome {
    position: relative;
    width: 100%;
    height: 0;
    padding: 0 0 calc(100% * 495 / 2048) 0;
  }

  .welcome img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: block;
  }
</style>
