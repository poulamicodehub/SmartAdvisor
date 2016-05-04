'use strict';

// When not cloning the `node-wit` repo, replace the `require` like so:
// const Wit = require('node-wit').Wit;
const Wit = require('../').Wit;

const token = (() => {
  if (process.argv.length !== 3) {
    console.log('usage: node examples/restaurantBOT.js JA7LEGSCIONPAGZI4CCB2TL4W4LO57NG');
    process.exit(1);
  }
  return process.argv[2];
})();

const actions = {
  say: (sessionId, context, message, cb) => {
    console.log(message);
    cb();
  },
  merge: (sessionId, context, entities, message, cb) => {
    cb(context);
  },
  error: (sessionId, context, err) => {
    console.log(err.message);
  },
  
  'fetch-file-users': (sessionId, context, cb) => {
    // Here should go the api call, e.g.:
    // context.forecast = apiCall(context.loc)
	context.fileUsers = 'Max, Amber';
	cb(context);
  },
  'fetch-dependency-files': (sessionId, context, cb) => {
    // Here should go the api call, e.g.:
    // context.forecast = apiCall(context.loc)
	context.dependentFiles = 'File1.java, File13.java';
    cb(context);
  },
  'fetch-new-qualityissues': (sessionId, context, cb) => {
    // Here should go the api call, e.g.:
    // context.forecast = apiCall(context.loc)
	context.new_quality_issues = '1';
    cb(context);
  }, 
  'startBOT': (sessionId, context, cb) => {
    // Here should go the api call, e.g.:
    // context.forecast = apiCall(context.loc)
	context.greeting_message = 'Good morning';
    cb(context);
  }, 
};

const client = new Wit(token, actions);
client.interactive();
