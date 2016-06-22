import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(params) {
      if(confirm('Are you sure you want to delete this?')) {
        this.sendAction('delete', params);
      }
    },
    update(question, params){
      this.sendAction('update', question, params);
    }
  }
});
