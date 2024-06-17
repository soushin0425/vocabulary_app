<template>
    <div>
        <h1>{{ $route.params.project_id }}</h1>
        <div>
            <div>
                <div></div>
            </div>
        </div>
        <div class="vocab-phase-container">
            <VocabPhase backgroundColor="#f1f1d5" status="0"></VocabPhase>
            <VocabPhase backgroundColor="#d3f2e0" status="1"></VocabPhase>
            <VocabPhase backgroundColor="#ead5f0" status="2"></VocabPhase>
            <VocabPhase backgroundColor="#cbdaf0" status="3"></VocabPhase>
        </div>
    </div>
</template>
  
<script>
import VocabPhase from '../components/VocabPhaseComponent.vue';

export default {
    name: 'Project',
    components: {
      VocabPhase
    },
}
</script>

<style>
.vocab-phase-container {
  display: flex; /* Arrange items horizontally */
}
</style>