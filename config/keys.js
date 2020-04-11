// keys.js - figure out what set of credentials to return

if(process.env.NODE_ENV === 'production') {
  //We are in production ENV
  module.export = require('./prod');

}else{
  //We are in dev ENV
  module.export = require('./dev');
}
