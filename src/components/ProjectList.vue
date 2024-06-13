<template>
  <div>
    <ul>
      <template v-for="(project,index) in $store.state.proj_list">
        <div class="d-flex flex-row">
          <div class="d-grid col-8 mx-auto">
            <router-link :to="{name: 'list', params: {project: project}}" class="btn btn-primary">
              <div class="col-8 fs-3 d-flex">
                {{ project }}
              </div>
              <div class="d-flex flex-row-reverse">
                <button id="delete-button" class="btn btn-danger" v-on:click.prevent="$store.commit('delete_project',index)">削除</button>
              </div>
            </router-link>
          </div>
        </div>
      </template>
    </ul>
  </div>
</template>
  
<script>
export default {
    name: 'ProjectList',
}
</script>

<style>

#delete-button{
  width: 60px;
}

</style>