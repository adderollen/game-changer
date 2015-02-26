Router.route('/', function () {
  this.render('home');
})

Router.route('/games', function() {
  this.render('gameList');
}, {
  name: 'gameList'
})

Router.route('/games/new', function() {
  this.render('gameNew')
}, {
  name: 'gameNew'
})

Router.route('/games/:id', function() {
    this.render('gameInfo', {
    data: function() {
      templateData = { game : Games.findOne(this.params.id)}
      console.log(templateData)
      return templateData;
    }
  })
}, {
  name: 'gameInfo'
})

