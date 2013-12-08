DrNu.SerieRoute = Ember.Route.extend({
  model: function(model) {
    return this.get('store').find('serie', model.serie_id);
  }
});

