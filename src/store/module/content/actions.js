import loadContentOverviewFromJson from '../../../api/content';

export default {
  loadContentOverview: ({ commit, state }, pageNr) => {
    console.log('action.js loadContentOverview', pageNr, state, commit);

    loadContentOverviewFromJson(state, pageNr).then((response) => {
      if (response.status === 200) {
        commit('updateContent', response.data.data.content);
      } else {
        console.log('App.js: ERROR LOADING JSON A:', response);
        commit('addError', 'content_not_loaded');
      }
    }).catch((response) => {
      console.log('App.js: ERROR LOADING JSON B:', response);
      commit('addError', 'content_not_loaded');
    });
  },
};
