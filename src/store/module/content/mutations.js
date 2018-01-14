export default {
  updateContent(state, value) {
    state.items = value;
  },
  addError(state, value) {
    state.error.push(value);
  },
};
