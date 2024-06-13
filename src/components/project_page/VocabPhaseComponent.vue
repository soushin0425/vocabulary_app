<template>
    <div v-bind:style="{'background-color':backgroundColor}" class="vocab-phase">
        <ul id="list1" class="list" name="ul"></ul>
    </div>
</template>
  
<script>
export default {
  name: 'VocabPhaseComponent',
  props: {
    backgroundColor: {
      type: String,
      required: true
    }
  }


    
}
</script>

<style>
.vocab-phase {
  float: left;
  width:280px;
  height:700px;
  margin: 20px;
  border-radius: 10px;
}
</style>