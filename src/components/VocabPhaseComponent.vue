<template>
  <div class="vocab-phase" v-bind:style="{'background-color': backgroundColorWithOpacity}">
    <div v-for="(item,id) in word_list" :key="item.word_id">
      <div v-if="$route.params.project_id === item.project_id.toString() && status === item.status.toString()" class="word-item">
        <button class="word-button" data-bs-toggle="modal" :data-bs-target="'#wordDetailModal' + id" @click="setDetails(item)">
          <span class="word-text">{{ item.word }}</span>
        </button>
        <div class="modal fade" :id="'wordDetailModal' + id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-body">
                <div>{{ currentDetail.word }}</div>
                <div>{{ statusDisplay }}</div>
                <hr class="double-line">
                <div>{{ currentDetail.meaning }}</div>
                <hr class="single-line">
                <div>{{ currentDetail.image }}</div>
                <hr class="single-line">
                <div>{{ currentDetail.example }}</div>
                <hr class="single-line">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VocabPhaseComponent',
  data() {
    return {
      currentDetail: {
        word: "",
        status: "",
        meaning: "",
        image: "",
        example: "",
      }
    }
  },
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
    },
    statusDisplay() {
      switch(this.currentDetail.status) {
        case 0:
          return "インプット中（レベル１）";
        case 1:
          return "インプット済（レベル２）";
        case 2:
          return "瞬発クリア（レベル３）";
        case 3:
          return "話せる（レベル４）";
      }
    }
  },
  methods: {
    setDetails(item) {
      this.currentDetail = {
        word: item.word,
        status: item.status,
        meaning: item.meaning,
        image: item.image,
        example: item.example,
      }
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

hr {
  color: black;
}
.double-line {
  border-top: 3px double;
}

.single-line {
  border-top: 1px solid;
}
</style>
