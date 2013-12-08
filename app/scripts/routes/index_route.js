DrNu.IndexRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('series');
  }
});