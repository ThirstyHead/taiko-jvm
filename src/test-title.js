const fetch = require('node-fetch');
const WebSocket = require('ws');

let url = 'http://localhost:9222/json';
let wsUrl = undefined;
let ws = undefined;

fetch(url)
  .then(res => res.json())
  .then(json => {
    // console.log(json);
    let config = json[0];
    wsUrl = config.webSocketDebuggerUrl;
    // console.log(wsUrl);
    ws = new WebSocket(wsUrl); 
      ws.on('open', () => {
        ws.send(JSON.stringify({
          id: 1,
          method: 'Runtime.evaluate', 
          params: { expression: 'document.title' }
        }));
      }).on('message', json => {
        data = JSON.parse(json);
        console.log(data.result.result.value);
      });

    });





// const ws = new WebSocket('ws://localhost:9222/json');

/*
*/



