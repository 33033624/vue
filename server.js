/**
 * Created by super on 16/12/12.
 */
var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){

    console.log('111')
    res.send('shshsh');
    res.end();



}).listen(function(){
    console.log('9000')
},9090)