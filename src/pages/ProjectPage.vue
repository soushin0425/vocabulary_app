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
                  <CardInput/>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="vocab-phase-container">
            <VocabPhase backgroundColor="#ECF4D6" status="0"></VocabPhase>
            <VocabPhase backgroundColor="#9AD0C2" status="1"></VocabPhase>
            <VocabPhase backgroundColor="#2D9596" status="2"></VocabPhase>
            <VocabPhase backgroundColor="#265073" status="3"></VocabPhase>
        </div>
    </div>
</template>
  
<script>
import VocabPhase from '../components/VocabPhaseComponent.vue';
import CardInput from '../components/CardInput.vue';

export default {
    name: 'Project',
    components: {
      VocabPhase,
      CardInput,
    },
}
</script>

<style>
.vocab-phase-container {
  display: flex; /* Arrange items horizontally */
}

.add-list-button {
  color: white;
  font-size: 1rem;
  border-radius: 10px;
  padding: 6px 12px;
  margin-top: 10px;
  background-color: #75c1cd;
  border-color: #75c1cd;
  margin-left: 10px;
}

.add-list-button .add-icon {
  fill: white; /* 通常時のアイコン色 */
}

.add-list-button:hover {
  background: white;
  color: black;
  border-color: #75c1cd;
}

.add-list-button:hover .add-icon {
  fill: #000000; /* ホバー時のアイコン色 */
}

</style>
