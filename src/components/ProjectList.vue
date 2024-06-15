<template>
  <div>
    <template v-for="(project, index) in $store.state.proj_list">
      <router-link :to="{ name: 'list', params: { project: project } }" class="project-item-link">
        <div class="project-item my-3">
          <div class="project-info">
            {{ project }}
          </div>
          <div class="project-stats">
            <div class="status">passive : 0</div>
            <div class="status">active : 0</div>
            <button class="delete-button" v-on:click.stop.prevent="$store.commit('delete_project', index)">削除</button>
          </div>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ProjectList',
}
</script>

<style>
.project-item {
  background-color: white;
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
  background-color: #f0f0f0;
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
  width: 70px;
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
