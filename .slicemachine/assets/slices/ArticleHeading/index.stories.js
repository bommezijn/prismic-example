import MyComponent from '../../../../slices/ArticleHeading';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/ArticleHeading'
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
      mock: {"variation":"default","name":"Default","slice_type":"article_heading","items":[],"primary":{"title":[{"type":"heading1","text":"Deploy out-of-the-box e-markets","spans":[]}],"description":[{"type":"paragraph","text":"Fugiat ullamco id anim veniam exercitation irure eiusmod cillum sit do enim. Commodo est exercitation exercitation ullamco amet fugiat quis aliqua Lorem excepteur aliquip consectetur reprehenderit excepteur. Cupidatat commodo laborum deserunt ipsum.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
