<template>
  <div v-bind:style="{'background-color': backgroundColor}" class="vocab-phase">
    <div v-for="word in word_list" :key="word.word_id">
      <div v-if="$route.params.project_id === word.project_id.toString() && status === word.status.toString()"
           class="word-item">
        {{ word.input }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VocabPhaseComponent',
  props: {
    backgroundColor: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    }
  },
  computed: {
    word_list() {
      return this.$store.state.word_list;
    }
  }
}
</script>

<style>
.vocab-phase {
  max-width: 280px;
  width: 100%;
  height: 700px;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
  overflow-y: auto;
}

.word-item {
  padding: 5px;
  margin: 5px 0;
  background: #fff;
  border-radius: 5px;
}
</style>
