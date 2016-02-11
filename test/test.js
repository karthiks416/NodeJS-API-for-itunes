/**
 *  This demonstrates API calls for itunes.
 *
 * @version 1.0
 * @author karthiks
 */
'use strict';
var request = require('supertest');
var app = require('../app').app;
var expect = require('chai').expect;
describe('itunesControllerTest', function () {
    it('Should fetch artistId from itunes api based on artistName', function (done) {
        request(app)
            .get('/api/artistId?term=A.R.Rehman')
            .expect(200)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
                if (err) {
                    return done(err);
                }
			 expect(res.body).to.have.property('artistId',3249567);	
             done();
            });
    });
	
	 it('Should fetch getAlbumList from itunes api based on artistId', function (done) {
        request(app)
            .get('/api/albumList?id=3249567')
            .expect(200)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
                if (err) {
                    return done(err);
                }
			 expect(res.body).to.have.property('albumList');
			done();
            });
    });
	
	
	 it('Should fetch trackList from itunes api based on collectionId', function (done) {
        request(app)
            .get('/api/trackList?id=352317842')
            .expect(200)
			.expect('Content-Type', /json/)
			.end(function (err, res) {
                if (err) {
                    return done(err);
                }
			 expect(res.body).to.have.property('trackList');	
             done();
            });
    });
	
});