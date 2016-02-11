/**
 *  controller to handle API calls.
 *
 * @version 1.0
 * @author karthiks
 */

var request = require('request');
var config=require('../config/config');

module.exports={
/**
 * Retrieves all ArtistId objects.
 *
 * @param {Object} req the expressJS request object
 * @param {Object} res the expressJS response object
 * @response {Object} artistId
 */
getArtistId:function(req,res){
var artistName = req.query.term;

var artistId;
    request({
        url: config.itunesSearchURL,
        qs: {
            term: artistName
        }
    }, function(err, response, body) {
        if (!err && response.statusCode == 200) {
		
            if (JSON.parse(body).results[0]) {
                artistId = JSON.parse(body).results[0].artistId;
                res.status(200).json({
                    artistId: artistId
                });
            } else
                res.status(200).json({
                    Msg: "Invalid Artist Name"
                });
        } else {
            res.status(response.statusCode).json({
                errorMsg: err
            });
        }
    });


},
/**
 * Retrieves albumList .
 *
 * @param {Object} req the expressJS request object
 * @param {Object} res the expressJS response object
 * @response {Object} albumList
 */
getAlbumList:function(req,res){
  var artistId = req.query.id;
    request({
        url: config.itunesLookupURL,
        qs: {
            id: artistId,
            entity: "album"
        }
    }, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            res.status(200).json({
                albumList: JSON.parse(body).results
            });
        } else {
            res.status(response.statusCode).json({
                errorMsg: err
            });
        }
    });

},
/**
 * Retrieves trackList.
 *
 * @param {Object} req the expressJS request object
 * @param {Object} res the expressJS response object
 * @response {Object} trackList
 */
getTrackList:function(req,res){
  var collectionId = req.query.id;
    request({
        url: config.itunesLookupURL,
        qs: {
            id: collectionId,
            entity: "song"
        }
    }, function(err, response, body) {
        if (!err && response.statusCode == 200) {
            res.status(200).json({trackList: JSON.parse(body).results});
        } else {
		        res.status(response.statusCode).json({
                errorMsg: err
            });
        }
    });

}



}