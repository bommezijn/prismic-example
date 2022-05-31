<template>
  <!-- <Tutorial /> -->
  <div>
    <slice-zone :components="components" :slices="document.data.slices" />
    <section v-for="component in components" :key="component.version">
    {{component}}

    </section>
    <!-- <slice-zone :components="components" :slices="document.data" /,> -->
  </div>
</template>

<script>

import { components } from '~/slices'

export default {
  name: 'IndexPage',
  async asyncData({$prismic, params, error}) {
    const document = await $prismic.api.getByUID(
      'standaard',
      'standaard-1'
    )

    if (document) {
      // console.log('kekekeke', document.data.slices[0])
      return {document}
    } else {
      error({statusCode: 404, message: 'Page has not been found, apologies.'})
    }
  },
    data () {
    return {components}
  },
}
</script>
