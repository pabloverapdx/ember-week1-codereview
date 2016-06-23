import Ember from 'ember';

export default Ember.Component.extend({
  favoriteAnswer: Ember.inject.service(),
  actions: {
    delete(params) {
      if(confirm('Are you sure you want to delete this?')) {
        this.sendAction('delete', params);
      }
    },
    update(question, params){
      this.sendAction('update', question, params);
    },
    saveAnswer(answer, params){
      this.sendAction('saveAnswer', params);
    },
    addFavorite(question){
      this.get('favoriteAnswer').add(question);
    }
  }
});
