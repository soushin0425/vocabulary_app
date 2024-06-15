<template>
  <div class="container-fluid position-relative">
    <div class="row flex-nowrap">
      <Sidebar />
      <main class="col">
        <button type="button" class="btn btn-dark open-button" data-bs-toggle="collapse" data-bs-target="#menuSidebar">
          <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-align-justified"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l12 0" /></svg>
        </button>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar
  }
}
</script>

<style>

.open-button {
  color: white;
  font-size: 1rem;
  border-radius: 10px;
  padding: 6px 12px;
  margin-top: 10px;
}

</style>