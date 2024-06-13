<template>
  <div class="d-grid gap-3 col-4 mx-auto">
    <div class="row flex-nowrap">
      <input type="text" class="form-control border border-dark border-2" v-model="input">
      <button type="button" id="add-button" class="btn btn-primary ms-3" v-on:click="add_project">追加</button>
    </div>
  </div> 
</template>

<script>

export default {
  name: 'ProjectInput',
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
</style>