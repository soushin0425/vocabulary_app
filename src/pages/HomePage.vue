<template>
  <h1 class="mb-3 text-center">プロジェクト作成</h1>
  <div class="center-block">
    <ProjectInput/>
    <div class="d-grid gap-3 col-8 mx-auto mt-3">
      <h2>プロジェクト一覧</h2>
      <ProjectList/>
    </div>
  </div>
</template>
  
<script>
import ProjectList from '../components/ProjectList.vue';
import ProjectInput from '../components/ProjectInput.vue';

export default {
    name: 'Home',
    components: {
      ProjectList,
      ProjectInput,
    },
}
</script>

<style></style>