import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this question?')) {
        this.sendAction('delete', question);
        }
      },
    update(question, params) {
      this.sendAction('update', question, params);
      },
    }
  });
