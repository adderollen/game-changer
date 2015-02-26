Template.home.helpers({

})

Template.home.events({

})

Template.gameList.helpers({
	getGames: function() {
		return Games.find();
	},

	convertDate: function(date) {
		return Helpers.dateConverter(date)
	}
})

Template.gameList.events({

})

Template.gameNew.helpers({

})

Template.gameNew.events({
	'submit form': function (evt, tempate) {
		evt.preventDefault();
		var gameName = evt.target.gameName.value;
		Games.insert({
			createdAt: new Date(),
			gameName: gameName
		})
		Router.go('gameList')
	}
})

Template.gameInfo.helpers({
	convertDate: function(date) {
		return Helpers.dateConverter(date)	}
})