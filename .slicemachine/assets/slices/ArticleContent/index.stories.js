import MyComponent from '../../../../slices/ArticleContent';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ArticleContent'
}


export const _Default = () => ({
  components: {
    MyComponent,
    SliceZone
  },
  methods: {
    resolve() {
      return MyComponent
    }
  },
  data() {
    return {
      mock: {"variation":"default","name":"Default","slice_type":"article_content","items":[{"articleHeading":"syndicate e-business ROI","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1537498425277-c283d32ef9db?w=900&h=500&fit=crop"},"articleContent":[{"type":"paragraph","text":"Veniam cillum consequat amet voluptate ipsum. Culpa elit fugiat dolore proident irure sunt elit tempor eu culpa ipsum est enim esse dolore. Commodo deserunt aliquip nostrud dolor minim labore do culpa ipsum exercitation consectetur adipisicing sit mollit.","spans":[]}]},{"articleHeading":"aggregate next-generation infrastructures","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1586952518485-11b180e92764?w=900&h=500&fit=crop"},"articleContent":[{"type":"paragraph","text":"Minim aliquip eiusmod consectetur et nulla deserunt incididunt culpa dolore. Ad reprehenderit incididunt culpa mollit deserunt officia ipsum reprehenderit tempor excepteur laborum. Aliquip aliqua amet mollit incididunt commodo sint fugiat adipisicing sunt tempor.","spans":[]}]},{"articleHeading":"harness value-added networks","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1600861194802-a2b11076bc51?w=900&h=500&fit=crop"},"articleContent":[{"type":"paragraph","text":"Esse culpa sint culpa enim dolore non dolore eu voluptate qui qui aliqua officia. In cupidatat velit est exercitation esse qui anim nulla ullamco Lorem dolor ullamco aliqua Lorem. Et enim irure est fugiat qui eu nostrud Lorem est reprehenderit.","spans":[]}]},{"articleHeading":"generate sticky users","image":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1587613865763-4b8b0d19e8ab?w=900&h=500&fit=crop"},"articleContent":[{"type":"paragraph","text":"Proident in excepteur reprehenderit.","spans":[]}]}],"primary":{},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'