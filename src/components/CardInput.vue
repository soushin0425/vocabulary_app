<template>
  <button type="button" class="btn add-list-button" data-bs-toggle="modal" data-bs-target="#addCardModal">
    <svg class="add-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px">
      <path d="M520-400h80v-120h120v-80H600v-120h-80v120H400v80h120v120ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"/>
    </svg>
  </button>
  <div class="modal fade" id="addCardModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="input-text">
            <label class="ef"><input type="text" placeholder="Word" v-model="word"></label>
          </div>
          <select v-model="status" class="select-level">
            <option disabled value="">習得レベル</option>
            <option v-for="level in optionLevels" :key="level.status" :value="level.status">
              {{ level.label }}
            </option>
          </select>
          <hr class="double-line">
          <div class="input-text">
            <label class="ef"><input type="text" placeholder="Meaning" v-model="meaning"></label>
          </div>
          <hr class="single-line">
          <div class="input-text">
            <label class="ef"><input type="text" placeholder="Image" v-model="image"></label>
          </div>
          <hr class="single-line">
          <div class="input-text">
            <label class="ef"><input type="text" placeholder="Example" v-model="example"></label>
          </div>
          <hr class="single-line">
          <div align="right">
            <button type="button" id="close-button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal()">Close</button>
            <button type="button" id="add-button" class="btn btn-primary ms-3" @click="addWord($route.params.project_id)">Add</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: 'ProjectInput',
  data() {
    return {
      word: "",
      status: "",
      meaning: "",
      image: "",
      example: "",
      optionLevels: [ 
        { status: 0, label: "インプット中（レベル１）" }, 
        { status: 1, label: "インプット済（レベル２）" }, 
        { status: 2, label: "瞬発クリア（レベル３）" },
        { status: 3, label: "話せる（レベル４）" }, 
      ], 
    };
  },
  methods: {
    addWord(project_id) {
      if (this.status === "" && this.word === "") {
        alert("単語を入力し，習得レベルを選択してください．")
      } 
      else if (this.status === "") {
        alert("習得レベルを選択してください．")
      } 
      else if (this.word === "") {
        alert("単語を入力してください．")
      }
      else {
        this.$store.commit('add_word', { project_id: project_id, input_word: this.word, input_status: this.status, input_meaning: this.meaning, input_image: this.image, input_example: this.example});
        this.word = "";
        this.status = "";
        this.meaning = "";
        this.image = "";
        this.example = "";
        const modal = bootstrap.Modal.getInstance(document.getElementById('addCardModal'));
        modal.hide();
      }
    },
    closeModal() {
      this.word = "";
      this.status = "";
      this.meaning = "";
      this.image = "";
      this.example = "";
    },
  }
};
</script>

<style scoped>
#add-button {
  width: 60px;
}
#close-button {
  border-radius: 10px;
}
#close-button:hover {
  background: white;
  color: black;
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

.input-text{
  position: relative;
  width: 100%;
  margin-bottom: 15px;
}

.ef{
  width: 100%;
}

.input-text input[type='text'] {
  font: 15px/1.6 sans-serif;
  width: 100%;
  padding: 0.3em;
  color: black;
  border: none;
  border-bottom: 2px solid #1b2538;
  background: transparent;
  transition: 0.3s;
}
.input-text .ef input[type='text']:focus {
  border-bottom: 2px solid #da3c41;
  outline: none;
  width: 100%;
}

.select-level {
  height: 38px;
  width: 190px;
  border: none;
  border-bottom: 2px solid #1b2538;
  background-color: transparent;
}

.select-level:focus {
  outline: none;
  border-bottom: 2px solid #da3c41; /* フォーカス時のボトムラインの色変更 */
}
</style>
