import store from 'store';
import About from '../../component/About/About.vue';
import ContentItem from '../../component/ContentItem';
import SocialShare from '../../component/SocialShare/SocialShare.vue';

export default {
  name: 'Home',
  components: {
    ContentItem,
    About,
    SocialShare,
  },
  computed: {
    contentList() {
      return this.$store.state.content.items;
    },
  },
};
