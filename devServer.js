var path = require( 'path' );
var express = require( 'express' );
var webpack = require( 'webpack' );
var config = require( './webpack.config.dev' );
var proxy = require('express-http-proxy');

var app = express();
var compiler = webpack( config );

app.use( require( 'webpack-dev-middleware' )( compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
} ));

app.use( require( 'webpack-hot-middleware' )( compiler ) );

app.get( '/', function( req, resp ) {
  resp.sendFile( path.join( __dirname, 'index.html' ) );
});

app.all( '*', proxy( 'localhost:8000', {
  forwardPath: function( req, res ) {
    return require( 'url' ).parse( req.url ).path;
  },
  forwardPathAsync: function( req, res ) {
    return new Promise(function( resolve, reject ) {
      resolve( require( 'url' ).parse( req.url ).path )
    });
  }
}));

app.listen( 3000, '0.0.0.0', function( err ) {
  if ( err ) {
    console.log( err );
    return;
  }
  console.log( 'Listening at http://localhost:3000' );
});
