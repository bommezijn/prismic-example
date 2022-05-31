import MyComponent from '../../../../slices/Article';
import SliceZone from 'vue-slicezone'

export default {
  title: 'slices/Article'
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
      mock: {"variation":"default","name":"Default","slice_type":"article","items":[],"primary":{"title":[{"type":"heading1","text":"Incentivize cross-platform convergence","spans":[]}],"description":[{"type":"paragraph","text":"Aute id consectetur officia magna sunt irure ut. Labore non voluptate adipisicing enim quis laboris nulla officia sunt sint ullamco.","spans":[]}]},"id":"_Default"}
    }
  },
  template: '<SliceZone :slices="[mock]" :resolver="resolve" />'
})
_Default.storyName = 'Default'
