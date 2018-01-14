import 'polyfill';
import 'asset/style/screen.scss';
import 'modernizr';
import 'settings';

import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import filter from 'filter';
import directive from 'directive';
import component from 'component';
import getRouter from 'router';
import getStore from 'store';
import startUp from 'control/startUp';
import getLocaleConfig from 'config/localeConfig';
import VueI18nManager from 'vue-i18n-manager';
import { sync } from 'vuex-router-sync';
import setupInjects from 'util/setupInjects';
import localeLoader from 'util/localeLoader';
import VueAnalytics from 'vue-analytics';
import App from 'App';

// register filters globally
Object.keys(filter).forEach(key => Vue.filter(key, filter[key]));

// register directives globally
Object.keys(directive).forEach(key => Vue.directive(key, directive[key]));

// register components globally
Object.keys(component).forEach(key => Vue.component(key, component[key]));

setupInjects();

if (window.webpackPublicPath) {
  // eslint-disable-next-line
  __webpack_public_path__ = window.webpackPublicPath;
}

const router = getRouter();
const store = getStore();
const localeConfig = getLocaleConfig();

if (localeConfig.localeEnabled) {
  Vue.use(VueI18nManager, {
    store,
    router,
    config: localeConfig.config,
    proxy: localeLoader,
  });

  Vue.initI18nManager();
}

// Axios
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.use(VueAxios, axios);

Vue.use(VueAnalytics, {
  id: 'UA-103070375-1',
  router,
});

// sync router data to store
sync(store, router);

router.beforeEach((to, from, next) => {
  if (to.params.title) {
    document.title = to.params.title;
  } else {
    document.title = 'The making of media';
  }
  next();
});

// Init new vue app
const app = new Vue({
  router,
  store,
  render: createElement => createElement(App),
});

// Mount the app after startUp
startUp(store).then(() => app.$mount('#app'));
