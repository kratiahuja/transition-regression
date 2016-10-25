export function initialize(application) {
  if (true) {
    // only run the initializer when the app is running in browser


    let router = application.lookup('router:main');
    router.on('willTransition', (transition) => {
      console.log('In willTransition')

    });

    router.on('didTransition', () => {
      console.log('In didTransition');
      Ember.run.scheduleOnce('afterRender', () => {
        console.log('In afterRender of didTransition');
      });
    });
  }
};

export default {
  name: 'route-events',
  initialize: initialize
};
