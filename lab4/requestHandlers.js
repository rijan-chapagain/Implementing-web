// var exec = require("child_process").exec;

function reqStart(response, postData){
    console.log("Request handler 'start' was called.");
   
    var body = '<html>'+
        '<head>'+
        '<meta http-equiv="Content-Type" content="text/html; '+
        'charset=UTF-8" />'+
        '</head>'+
        '<body>'+
        '<form action="/upload" method="post">'+
        '<textarea name="text" rows="20" cols="60"></textarea>'+
        '<input type="submit" value="Submit text" />'+
        '</form>'+
        '</body>'+
        '</html>';

    response.writeHead( 200, {"Content-Type": "text/plain"} );
    response.write(body);
    response.end();

}

function reqUpload(response, postData){
    console.log("Request handler 'upload' was called.");

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("successfully uploaded " + postData);
    response.end();
}

exports.reqStart = reqStart;
exports.reqUpload = reqUpload;