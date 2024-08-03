<template>
  <div class="vocab-phase" v-bind:style="{'background-color': backgroundColorWithOpacity}">
    <div v-for="item in word_list" :key="item.word_id">
      <div v-if="$route.params.project_id === item.project_id.toString() && status === item.status.toString()" class="word-item">
        <button class="word-button" @click="handleClick(item)">
          <span class="word-text">{{ item.word }}</span>
        </button>
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
    },
    backgroundColorWithOpacity() {
      const hex = this.backgroundColor.replace('#', '');
      const r = parseInt(hex.substring(0, 2), 16);
      const g = parseInt(hex.substring(2, 4), 16);
      const b = parseInt(hex.substring(4, 6), 16);
      const opacity = 0.3; 
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }
  },
  methods: {
    handleClick(item) {
      // 単語をクリックしたときの処理をここに書きます
      console.log('Clicked word:', item.word);
      // ここに他の処理を追加することができます
    }
  }
}
</script>

<style>
.vocab-phase {
  max-width: 280px;
  width: 300px;
  height: 700px;
  margin: 20px;
  border-radius: 10px;
  padding: 10px;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.word-item {
  margin: 10px 0;
}

.word-button {
  width: 100%;
  height: 70px;
  background: white;
  border: none;
  border-radius: 5px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 23px;
  cursor: pointer;
}

.word-button:hover {
  background-color: #AAD7D9;
}
</style>
