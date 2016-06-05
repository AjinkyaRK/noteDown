Template.Updates.onCreated(function(){
	var self= this;
	this.autorun( function() {
		self.subscribe('rss');
		self.subscribe('user');
	});
});

Template.Updates.helpers({
	feed:function(){
		var feed= Rss.find({ user: Meteor.user().profile.name},
			{sort: {createdAt: -1}});
		return feed;
	},
	feedCount:function(){
		return Rss.find({user: Meteor.user().profile.name}).count();
	}
});

Template.Updates.events({
	/*'click #check': function(event){
		var id= this._id;
		var action= this.action;
		var itemId= this.id;
		console.log(itemId);
		if(action=== "Post"){
			Router.go('/group_notes/'+itemId);
		}
		else if(action=== "Group"){
			Router.go('/group/'+itemId);
		}
		
	}*/
});