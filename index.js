const request = require('request-promise');
const _ = require('lodash');

class SlackNotify {
    constructor(client_id) {
      this.client_id = client_id
    }
    authentication(){
        location = "https://slack.com/oauth/v2/authorize?scope=incoming-webhook,commands&client_id="+this.client_id
    }
    
}
