<template>
  <h1 class="mb-3 text-center">プロジェクト作成</h1>
  <div class="center-block">
    <div class="d-grid gap-3 col-4 mx-auto">
      <div class="row flex-nowrap">
        <input type="text" class="form-control border border-dark border-2" v-model="input">
        <button type="button" id="add-button" class="btn btn-primary ms-3" v-on:click="add_project">追加</button>
      </div>
    </div>
    <div class="d-grid gap-3 col-8 mx-auto mt-3">
      <h2>プロジェクト一覧</h2>
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
  </div>
</template>
  
<script>
export default {
    name: 'Home',
    data() {
      return{
        input: ""
      }
    },
    methods: {
      add_project(){
        this.$store.commit('add_project',this.input)
        this.input = ""
      },

    }

}
</script>

<style>
#add-button{
  width: 60px;
}

#delete-button{
  width: 60px;
}


</style>