import About from '../../component/About/About.vue';
import SocialShare from '../../component/SocialShare/SocialShare.vue';
import LatestContentItems from '../../component/LatestContentItems/LatestContentItems.vue';

export default {
  name: 'Article',
  components: {
    About,
    SocialShare,
    LatestContentItems,
  },
  mounted() {
    if (window.FB) {
      FB.init({
        appId: '541478309576701',
        autoLogAppEvents: true,
        status: true,
        xfbml: true,
        version: 'v2.9',
      });
    }
    if (window.__sharethis__) {
      window.__sharethis__.initialize();
    }
  },
  computed: {
    contentList() {
      return this.$store.state.content.items;
    },
    article() {
      let currentSlug = this.$route.params.slug;
      let i;
      for (i in this.contentList) {
        if (this.contentList[i].slug === currentSlug) {
          return this.contentList[i];
        }
      }
      return 'not_found';
    },
    url() {
      return 'http://www.themakingofmedia.nl/podcast/' + this.article.slug;
    },
  },
};
