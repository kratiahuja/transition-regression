import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    console.log('In init of component');
  },

  didInsertElement: function() {
    this._super(...arguments);
    console.log('In didInsertElement');

    Ember.run.schedule('afterRender', function(){
      console.log('Calling afterRender from didInsertElement');
    });
  },

  didRender: function() {
    this._super(...arguments);
    console.log('in didRender');

    Ember.run.schedule('afterRender', function(){
      console.log('Calling afterRender from didRender');
    });
  }
});
