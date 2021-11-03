const mqtt = require('mqtt')
const options = {
  // Clean session
  clean: true,
  connectTimeout: 4000,
  // Auth
  clientId: 'emqx_test',
  username: 'parking-brasov@ttn',
  password: 'NNSXS.R5LUMO3Y4HPAEIONKBL3PFMCL37VR7PVAWHBIFI.DHTUGNZRMYPI6ZDNAL6LR6V3RIRTKRVY423SJFTV7TIRVYCKNNVA',
}
const client  = mqtt.connect('mqtt://eu1.cloud.thethings.network:1883')
client.on('connect', function () {
  console.log('Connected')
  client.subscribe('#', function (err) {
    if (!err) {
      client.publish('test', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString())
  client.end()
})