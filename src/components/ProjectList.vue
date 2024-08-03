<template>
  <div>
    <template v-for="(project, index) in proj_list" :key="project.project_id">
      <router-link :to="{ name: 'list', params: { project_id: project.project_id } }" class="project-item-link">
        <div class="project-item my-3">
          <div class="project-info">
            {{ project.project_name }}
          </div>
          <div class="project-stats">
            <div class="status">passive : 0</div>
            <div class="status">active : 0</div>
            <button class="delete-button" v-on:click.stop.prevent="$store.commit('delete_project', index)">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
            </button>
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
  computed: {
    proj_list() {
      return this.$store.state.proj_list;
    }
  }
}
</script>

<style>
.project-item {
  background-color: #FBF9F1;
  border-radius: 20px;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-bottom: 7px;
  padding-right: 7px;
  position: relative;
  margin-top: 1rem;
  margin-bottom: 1rem;
  min-height: 110px;
  max-width: 450px; /* Set the maximum width */
  width: 100%; /* Allow the width to be responsive */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: black;
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Add shadow */
}

.project-item:hover {
  background-color: #AAD7D9;
}

.project-item-link {
  text-decoration: none; /* Remove underline from link */
  display: flex; /* Ensure the link covers the entire project item */
  justify-content: center; /* Center the project items */
}

.project-info {
  flex-grow: 1; /* Make the project info take up available space */
  font-size: 1.3rem;
}

.project-stats {
  display: flex;
  justify-content: space-between; /* Distribute items evenly */
}

.delete-button {
  width: 50px;
  height: 40px;
  border-radius: 15px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer; /* Ensure button looks clickable */
}

.status {
  display: flex;
  align-items: center; /* Center the text vertically */
}
</style>
