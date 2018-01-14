import MainHeader from '../component/MainHeader';
import MainFooter from '../component/MainFooter';

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter,
  },
  created() {
    this.loadContent();
  },
  methods: {
    loadContent() {
      // console.log('app.js loadContent', 'loadContentOverview');
      this.$store.dispatch('loadContentOverview');
    },
  },
  computed: {
    contentList() {
      return this.$store.state.content;
    },
  },
};
