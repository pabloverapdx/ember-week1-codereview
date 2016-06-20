import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow(){
      this.set('addNewAnswer', true);
    },
    saveAnswer(){
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question'),
      };
      this.set('addNewAnswer', false);
      this.set('content', "");
      this.set('author', "");
      this.sendAction('saveAnswer', params);
    }
  }
});
