<template>
  <div class="container-fluid position-relative app-background">
    <div class="row flex-nowrap">
      <ProjectSidebar />
      <main class="col">
        <button type="button" class="btn open-button" data-bs-toggle="collapse" data-bs-target="#menuSidebar">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-align-justified"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l12 0" /></svg>
        </button>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import ProjectSidebar from './components/ProjectSidebar.vue';

export default {
  name: 'App',
  components: {
    ProjectSidebar
  }
}
</script>

<style>
body {
  background-color: #E5E1DA; /* Set the page background color to black */
}

.app-background {
  min-height: 100vh;
}

.open-button {
  color: white;
  font-size: 1rem;
  border-radius: 10px;
  padding: 6px 12px;
  margin-top: 10px;
  background-color: #75c1cd;
  border-color: #75c1cd;
}

.open-button:hover {
  background: white;
  color: black;
  border-color: #75c1cd;
}
</style>
