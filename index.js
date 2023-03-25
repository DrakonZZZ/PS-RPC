const RPC = require('discord-rpc');
require('dotenv').config();

const rpc = new RPC.Client({
  transport: 'ipc',
});

rpc.on('ready', () => {
  rpc.setActivity({
    state: 'workin in photoshop',
    startTimestamp: new Date(),
    largeImageKey: 'Your discord image key here',
    largeImageText: 'Your dicord image text here',
  });

  console.log('Rich Presence is working');
});

rpc.login({
  //   clientId: process.env.CLIENT_ID,
  clientId: 'your discord client application id goes here',
});
