const request = require('request-promise');
const _ = require('lodash');

class SlackNotify {
    constructor(access_token) {
     // this.client_id = client_id;
      this.access_token = access_token
      //this.authUrl = "https://slack.com/oauth/v2/authorize?client_id="+this.client_id;
    }
    
     async sendMessage(channel_id,message) {
      var options = {
        method: 'POST',
        uri: 'https://slack.com/api/chat.postMessage',
        headers: {
            'content-type': 'application/json',
            'Authorization': "Bearer "+this.access_token
       },
        body:{
          "channel": channel_id,
          "text": message
      } ,
        json: true // Automatically stringifies the body to JSON
       
    };
    return await request(options);
 
     
    }
   
    
}
module.exports = (access_token) => {
  return new SlackNotify(access_token)
}
