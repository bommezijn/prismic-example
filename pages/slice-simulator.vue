<template>
  <sliceSimulator v-slot="{ slices }" :state="state">
    <sliceZone :slices="slices" :components="components"/>
  </sliceSimulator>
</template>

<script>
import {SliceSimulator} from '@prismicio/slice-simulator-vue'
import {components} from '~/slices'
import state from '~~/.slicemachine/libraries-state.json'

export default {
  components: {
    SliceSimulator
  },
  data () {
    return {state, components}
  }
}
</script>