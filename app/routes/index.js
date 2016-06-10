import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('question');
  },
  actions: {
    destroyQuestion(anything) {
      anything.destroyRecord();
      this.transitionTo('index');
    }
  }
});
