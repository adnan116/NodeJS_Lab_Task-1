var http = require('http');
var fs = require('fs');

var requestHandler = function(request, response){

	if(request.url == "/home"){
		var data = fs.readFileSync('home.html');
		response.write(data.toString());
		response.end();
	}else if(request.url == '/login'){
		var data = fs.readFileSync('login.html');
		response.write(data.toString());
		response.end();

	}else if(request.url == '/reg'){
		var data = fs.readFileSync('reg.html');
		response.write(data.toString());
		response.end();

	}else if(request.url == '/'){
		var data = fs.readFileSync('root.html');
		response.write(data.toString());
		response.end();

	}else{
		response.write('Opps! Invalid request!');
		response.end();
	}
};

var server = http.createServer(requestHandler);
server.listen(3000);
console.log('server started at port 3000');