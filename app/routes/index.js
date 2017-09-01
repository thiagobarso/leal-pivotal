module.exports = function(application){
		application.get('/', function(req,res){
			application.app.controllers.pivotalTrackerApi.index(application, req, res);
		});
}