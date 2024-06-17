<template>
  <div class="col-auto px-0">
    <div id="menuSidebar" class="collapse collapse-horizontal">
      <div id="sidebar-nav" class="list-group rounded-0 rounded-end vh-100 bg-dark position-relative">
        <div class="add_close">
          <button class="btn btn-outline-light close-button" type="button" data-bs-toggle="collapse" data-bs-target="#menuSidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-align-justified"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l12 0" /></svg>
          </button>
          <router-link to="/" class="btn btn-outline-light add-project">
            + New Project
          </router-link>
        </div>
        <template v-for="project in proj_list" :key="project.project_id">
          <router-link :to="{name: 'list', params: {project_id: project.project_id}}" class="btn project-link" :class="{ 'active-link': $route.params.project_id === project.project_id.toString() }">
            <div class="text-fade">{{ project.project_name }}</div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'Sidebar',
  computed: {
    proj_list() {
      return this.$store.state.proj_list;
    }
  },
  
}
</script>
  
<style>
#sidebar-nav {
  width: 260px;
}

.add-project {
  margin-left: auto; /* Ensure the add project button takes up remaining space */
  border-radius: 10px;
}

.add_close {
  display: flex;
  justify-content: space-between;
  align-items: center; /* Vertically center the buttons */
  padding: 10px; /* Optional: Add some padding for spacing */
  margin-bottom: 10px;
}

.collapse-horizontal {
  position: absolute;
  z-index: 1050;
}

.close-button {
  background: none;
  border: 1px solid white; /* Add white border */
  color: white;
  font-size: 1rem;
  padding: 6px 12px; /* Match padding to other buttons */
  border-radius: 10px; /* Optional: Add border radius to match other buttons */
}

.close-button:hover {
  background: lightgray;
}

.project-link {
  background: transparent; /* Remove background */
  color: white;
  border: none; /* Remove border */
  border-radius: 0; /* Remove border radius */
  text-align: left; /* Align text to the left */
  height: 60px;
  display: flex;
  align-items: center; /* Center vertically */
  justify-content: flex-start; /* Align content to the start */
}

.project-link:hover {
  background: white; /* White background on hover */
  color: black; /* Change text color to black on hover */
}

.active-link {
  background-color: #a90c0c; /* Change background color of active link */
}

.text-fade {
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden; /* Hide overflowed text */
  text-overflow: ellipsis;
}

</style>