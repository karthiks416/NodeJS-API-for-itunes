/**
 * This is the startup script for accessing itunes apis.
 *
 * @version 1.0
 * @author karthik s
 */
"use strict";

var express = require("express");
var itunesController=require('./controller/itunesController');
var config=require('./config/config');
var app = exports.app=express();
app.set('port', config.port);


app.get('/api/artistId',itunesController.getArtistId );

app.get('/api/albumList', itunesController.getAlbumList);


app.get('/api/trackList', itunesController.getTrackList);

app.listen(app.get('port'), function() {
    console.log("server started, listening on port" + app.get('port'));
});