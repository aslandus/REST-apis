var request = require('request');
var fs = require("fs");
var Promise = require('bluebird');
var parse = require('parse-link-header');


////// FILL IN THE BLANKS

var token = "token " + "TOKEN_GOES_HERE";
var userId = "aslandus";

var urlRoot = "https://api.github.com";
// NCSU Enterprise endpoint:
// https://github.ncsu.edu/api/v3

getYourRepos(userId);

function getYourRepos(userName)
{

	var options = {
		url: urlRoot + '/users/' + userName + "/repos",
		method: 'GET',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		}
	};

	// Send a http request to url and specify a callback that will be called upon its return.
	request(options, function (error, response, body) 
	{
		var obj = JSON.parse(body);
		console.log( obj );
		for( var i = 0; i < obj.length; i++ )
		{
			var name = obj[i].name;
			console.log( name );
		}
	});

}

function listBranches(owner,repo)
{
	GET "/repos/:" + owner + "/" + repo + "/branches"
}

function createRepo(repo)
{
	var repo = {
		"name": name,
		"description": "This is a repository",
		"homepage": "https://github.com",
		"private": false,
		"has_issues": true,
		"has_projects": true,
		"has_wiki": true
	};

	var options = {
		url: urlRoot + '/users/repos',
		method: 'POST',
		headers: {
			"User-Agent": "EnableIssues",
			"content-type": "application/json",
			"Authorization": token
		},
		json: repo
	};

	// Send a http request to url and specify a callback that will be called upon
	request(options, function(error, response, obj)
	{
		console.log( response + JSON.stringify(obj) );
	}
}


