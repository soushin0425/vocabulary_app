<template>
    <CardInput/>       
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
