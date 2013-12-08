DrNu.SeriesRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('serie');
  }
});

