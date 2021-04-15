const Client = require('./main')
const { token, channelID: channel } = require('./config.json')

const client = new Client({ token, channel })
client.start()