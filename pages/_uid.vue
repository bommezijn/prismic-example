<template>
  <section>
    <h1>{{document.data.Title}}</h1>
    <PrismicRichText :field="document.data.title" />
    <PrismicRichText :field="document.data.introduction" />
    <!-- Retrieve all chapters from a standard -->
    <article v-for="(chapter, index) in document.data.chapters" :key="index">
      <PrismicRichText :field="chapter['chapter-title']" />
      <Prismic-image :field="chapter['img']" />
      <PrismicRichText :field="chapter['content-of-chapter']" />
    </article>
  </section>
</template>

<script>
export default {
  async asyncData({$prismic, params, error}) {
    const document = await $prismic.api.getByUID('standaard', params.uid)

    if (document) {
      // console.log('kaka',document.data.chapters)
      return {document}
    } else {
      error({statuscode: 404, message: 'someTest Not Found'})
    }
  }
}
</script>

<style>
</style>