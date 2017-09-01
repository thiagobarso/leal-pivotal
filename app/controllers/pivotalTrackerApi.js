module.exports.index = function(application, req, res){

	var tracker = require('pivotaltracker');
	var client = new tracker.Client('0afaa8c48d7e022a13245ddc8608e6fd');

	//1940689

	client.projects.all(function(error, projects) {
		//console.log(projects);
	});

	client.project(1940689).stories.all(function(error, stories) {
		//console.log(stories);
  	});

  	client.project(1940689).story(136497315).get(function(error, story) {
		res.render("pivotalTrackerApi", {story : story});
    	/* Doin' the thang.. (data returned as a single story object) */
	});

}