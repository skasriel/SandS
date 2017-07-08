var express = require('express');
var router = express.Router();

var Legal = require('../categories');
var Freelancers = require('../freelancers');

/*const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
*/




	/*rl.question("Enter option #: ", (selectedOption) => {
		//console.log("You chose: "+selectedOption);
		console.log("\n\n");
		display_next(options[selectedOption], currentPath);
	});*/

function getLevelFromPath(req) {
	var path = req.query.path;
	var currentLevel = Legal;
	if (path) {
		var pathArray = path.split(',');
		for (var i in pathArray) {
			var pathItem = pathArray[i];
			console.log('going to option #'+pathItem);
			currentLevel = currentLevel.Options[pathItem];
		}
	}
	return currentLevel;
}
function renderFreelancerPicker(req, res, currentLevel) {
	var html = '<html><body>';
	var msg = 'Here are some great freelancers for '+currentLevel.Name;
	html += msg;
	for (i=0; i<3; i++) {
		var id = Math.floor(Math.random() * Freelancers.length);
		var freelancer = Freelancers[id];
		html += '<br><a href="/chat?uid='+freelancer.uid+'">'+freelancer.first_name+' '+freelancer.last_name+'</a>';
	}
	html += '</body></html>';
	res.send(html);
	return;
}
router.get('/', function(req, res, next) {
	//res.render('index', { title: 'Hey', message: 'Hello there!'});

	console.log("Executing: GET / ");

	var currentLevel = getLevelFromPath(req);

	var name = currentLevel.Name;
	var options = currentLevel.Options;
	if (!options) {
		renderFreelancerPicker(req, res, currentLevel);
		return;
	}
	var html = '<html><body>';
	var msg = "Name: "+name;
	if (currentLevel.OptionsLabel) {
		msg += "\n<br><br>"+currentLevel.OptionsLabel;
	} else {
		msg += "\n<br><br>Options:<br>\n<ul>";
	}
	html += msg;

	var path = req.query.path;
	for (i in options) {
		var option = options[i];
		var url;
		if (!path) {
			url = "?path="+i;
		} else {
			url = "?path="+path+","+i;
		}
		var msg = '<li><a href="'+url+'">'+option.Name+"</a></li>\n";
		html += msg;
	}

	html += "</ul>";
	if (path) {
		var backPath = path.substring(0, path.lastIndexOf(','));
		html += '<br><br><a href="?path='+backPath+'">Back</a>';
	}
	html += "</body></html>";
	res.send(html);

});

router.get('/chat', function(req, res, next) {
	var html = '<html><body>';
	var uid = req.query.uid;
	var freelancer;
	for (var i in Freelancers) {
		if (Freelancers[i].uid == uid) {
			freelancer = Freelancers[i];
			break;
		}
	}
	html += 'Chat with '+freelancer.first_name+' '+freelancer.last_name;
	html += '<br><form name="chatForm"><textarea width=80 height=20 name="chat_text"></textarea>';
	html += '<br><input type="button" name="send" value="Send" align="right"></input>';
	html += '</form>';

	html += '<br> Ready to offer the job to '+freelancer.first_name+' ?';
	html += '<br><form name="offerForm">';
	html += '<br><input type="button" name="offer" value="Make Offer Now"></input>';
	html += '</form>';

	html += '<br> Not a good fit for you? ';
	html += '<br><form name="postJobForm">';
	html += '<br><input type="button" name="postJob" value="Post this as a job on Upwork"></input>';
	html += '</form>';
	html += '</body></html>';
	res.send(html);
	return;
});

module.exports = router;
