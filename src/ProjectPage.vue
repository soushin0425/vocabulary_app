<template>
    <h1>{{ project }}</h1>
    <div>
        <div>
            <div></div>
        </div>
    </div>
    <VocabPhase backgroundColor="#f1f1d5"></VocabPhase>
    <VocabPhase backgroundColor="#d3f2e0"></VocabPhase>
    <VocabPhase backgroundColor="#ead5f0"></VocabPhase>
    <VocabPhase backgroundColor="#cbdaf0"></VocabPhase>
</template>
  
<script>
import VocabPhase from './components/project_page/VocabPhaseComponent.vue';

export default {
    name: 'Project',
    props:{
        project: String
    },
    components: {
      VocabPhase
    },
}
</script>