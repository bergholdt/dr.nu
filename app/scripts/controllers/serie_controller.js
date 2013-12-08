DrNu.SerieController = Ember.ObjectController.extend({
  imageUrl: function() {
    var programSerieSlug = this.get('model.slug');
    Ember.$.ajax({
    	url: "http://www.dr.dk/nu/api/programseries/"+programSerieSlug+"/images/120x90.jpg",
    	type: "GET",
    	dataType: "jsonp"
    })
  }.property('model.slug')
});
