import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  fullQuestion: Ember.computed('question.content', 'question.author', function() {
   return this.get('question.content') + ' asked by ' + this.get('question.author');
  }),

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
