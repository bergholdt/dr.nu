DrNu.ApplicationRoute = Ember.Route.extend({
    // admittedly, this should be in IndexRoute and not in the
    // top level ApplicationRoute; we're in transition... :-)
    model: function () {
	  	var store = this.get('store');
	  	this.loadSeries(store);
	  	return [];
    },

    loadSeries: function(store) {
	  	Ember.$.ajax({
	  		url: 'http://www.dr.dk/nu/api/programseries',
	  		type: 'GET',
	  		dataType: 'jsonp',
	  		success: function(response) {
	  			response.forEach(function(item) {
	  				item.id = item.slug;
	  				store.push('serie', item);
	  			});
	  		}
	  	})
    }
});
