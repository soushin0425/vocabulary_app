<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <Sidebar></Sidebar>
      <main class="col">
        <button type="button" class="btn btn-dark mb-3 mt-3" data-bs-toggle="collapse" data-bs-target="#menuSidebar">サイドバー</button>
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

