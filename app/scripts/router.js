DrNu.Router.map(function () {
  
  this.resource('series', function() {
    this.route('show');
  });
  this.resource('serie', { path: '/serie/:serie_id' });
  
});
