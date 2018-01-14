import store from 'store';
import ContentItem from '../ContentItem';

export default {
  name: 'LatestContentItems',
  props: ['type', 'display', 'ignore_id'],
  components: {
    ContentItem,
  },
  computed: {
    contentList() {
      return store.state.content.items;
    },
  },
};
