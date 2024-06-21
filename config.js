const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94765476552")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Snyder:Snyder@cluster0.vqyuk9h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.port= process.env.PORT || 5000
global.email = 'textnow1pak@gmail.com'
global.github = 'https://github.com/naveeddogar/KING-MD'
global.location = 'sri lanka/colombo'
global.gurl = 'https://whatsapp.com/channel/0029Va66s2IJENxvTJjUtM1w' // add your username
global.sudo = process.env.SUDO || '94765476552'
global.devs = '94765476552';
global.website = 'https://king-md-session.onrender.com/' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/5541dfe4dc8c2f51e3f02.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'MRFG-INFINITE' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'Seth Snyder' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib09kOG9wc1VOQ1JIY1FWNmo3UGRZMUhIRkJGcm5JSGRtUjh5eUNCbHUzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFzYWhKTlNuOHJWNlB6S0h2a3VabnlFTFFjTGRUQ05MUXVlS2VxUWVWbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQW1xMytsNHFTTHhjWG93dGR5WTJPYUJrMmJNTVZQbUVkNVc2V1dTV25zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMVlVqUnVsaGxPZW5LejJ2WE54YVBOeVhvYXRJNDFzdDFLMUpoSEFrS1RFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlPeEMzaHdXVCtDdUJlV3pnRU8zSFM1WGQ1ZlBKbXZhZ0VGNVVzR0tJWG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImR1RkVSL1VBZDFRVEM4a1VrR0xyZEhNUUJkL2xBc3hoNzdubmU0Y1hYams9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9ISXhuSm1oYTJmblJFNlVHRFFHVkUrZ21GaHJKSkgwNkE2dG9TeUlVND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTRNVEl4cis3bVFyOGRmQklsUHYzYkhUYSswTnpoQXZYSGlUU2tXZjVtST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhwVHNhVmJSSlJGMmtJNFhPcEdIdDhycUs0QURwMEkxdlRFM1A4aElRMy8xUXdEdXNJTVFzaFF0Vjdad0VkR05xa0FsNytRbUhxUG5OM3FWbDZUZ0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzgsImFkdlNlY3JldEtleSI6IlhnK0NReWc1bDRUZWFSbUxqOUNEdFpuWDFxbElNa2xyL0d5MGdYSEV3WmM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlRuUm85TXFIU0Q2X1pFTUVBWjVGb3ciLCJwaG9uZUlkIjoiZjI1OTJlZmQtNjY4NS00ZmU3LWI3ZjItZThmNTYwNTlhNWVmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZTanUzbnVlVTdxMkY2dzA4UEJ2WHBPdEMwVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTUnJNb3JJOFpOMzA0Q3paMFFtTUsweHIzRlU9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiU0M5M0Q2UloiLCJtZSI6eyJpZCI6Ijk0NzY1NDc2NTUyOjQ4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdm63wnZGF8J2QufCdkLogLSAg8J2bqvCdm67wnZC58J2bqvCdm67wnZuq8J2Rh/Cdm68ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lHN29Zc0dFTnFTMkxNR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkRrdlFKbU4rTlZHUE1HU2w2clB6VXl3anBKZTk5NE9TaFYwamRwUERJVG89IiwiYWNjb3VudFNpZ25hdHVyZSI6IlJHNmFHSXUxMDNjTGFFNzIyRjdHUGVaZjFJNjRjdFFxKzE5Y3RMWHJjLy9SdTRENUpQaERhM041ZXo2UFd0aDBmRzYrUTFTWjN3NHlVQlYzWnhrbkN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2aWVQMjBpelQ5UzBGdUdhZVV2eFNUczYzTXpPR05RMERKSWRRVlJPbmZjcWIxL2pUcW5JUDdPOGthOFZGbWhtS1pYcU02MDFRdWg4V3dQSUQ0S0NBUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzY1NDc2NTUyOjQ4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlE1TDBDWmpmalZSanpCa3BlcXo4MU1zSTZTWHZmZURrb1ZkSTNhVHd5RTYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTkwMTE2ODcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBT3FHIn0=' : process.env.SESSION_ID,
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'Liya Wataon' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'MRFG' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ',' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.3.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'KING-MD',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
