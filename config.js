//#ENJOY
/**

░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░░▒▓██████▓▒░ ░▒▓███████▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░      ░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓████████▓▒░░▒▓██████▓▒░░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
░▒▓█▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓█▓▒░░▒▓█▓▒░      ░▒▓█▓▒░▒▓█▓▒░ 
 ░▒▓█████████████▓▒░░▒▓█▓▒░░▒▓█▓▒░▒▓███████▓▒░░▒▓█▓▒░ 
                                                      

**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "wasixml@gmail.com";
global.location = "Lahore,Pakistan.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "923192173398@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github = process.env.GITHUB || "https://github.com/Itxxwasi/WASI-MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaDK8ZUDjiOhwFS1cP2j";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "2349019406102";
global.sudo = process.env.SUDO || "2349019406102,2347070239004";
global.owner = process.env.OWNER_NUMBER || "2349019406102";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://pair-qr-wasi-md.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5zcjZhbzh4TFc1WTZFb2JtR0Y0RWhWcStGOFdTSTBMM2JTTmpiVXZWYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicDltZGhGTXYxZThCNDJKMXdCaTZTR1VSWnVjR3JkNTIxUWF2dFg2QlNITT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSlBUbStwcWtoTW5hajZiNkJoRVpCWC96bFZoc1JXR3lCaTNkcWQ2NG1FPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyNjV3Y2dubnd2djRPZkRrUkpaeWJzQ2o4VTJ5Z3l6b2tTNWJJQ3ZZQ2pBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1PZERDcjR3SnlSdTEzKzhxZFF2WThJMkQyUENEVEkwdGlZY1B3Q1I1Mk09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im0zTHl6UG1EeFdWMjlxb3BiTHNYUGI5SG9nbTZ3S2I0YlZvaDNMbnU5bVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEduLzF2eHRxK1JGR1M2SGhwL1FuRlJlT1VRelNsMGJPdTkrbzh0UXdHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTGs0UmFwT2NFOVRxb2tJQk41WllhdFhxUDltMjRhOGE3bGVZRTU3VEhIdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJEVDlrNEcveVVwcFkyb0ZaYnQxWENybWlndVR6dlp5TlJzOTVpZGNIN2xLNjUxNFlqMHBGa0FvL05WUmN1RkhsTE00akF0YXVuNzFxVXh2UG44cWhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcxLCJhZHZTZWNyZXRLZXkiOiJZUWttbzlvTHJVUmFSdzFsUjVOaFhoamVjcllEcGRlb3B2UjhLcHpzeWZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDcwNzAyMzkwMDRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiREJBOUE2RTBCODc0QzJFOTdGNEQzMkFDMzVCNjYxNDYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxODk4NjgxNX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzA3MDIzOTAwNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwRTY5MDBEODcxRERBMUM0ODkyRjZDMzNDNjRFRjQ4NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE4OTg2ODE1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOb2R5ZzFOT1E1bV9MdmpTWmxsVjBnIiwicGhvbmVJZCI6IjkzYmZiMWFmLTY0NDEtNGFiZS04MTk0LWEyMGU4YjcwOTg2ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuQ0xwRWwybkFTaDRyZEVWcnVRN1VrTk5jcms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidEZRc255QURLVDNlUlo0eHZGd051R0cya1VNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJTNjlBUjRaIiwibWUiOnsiaWQiOiIyMzQ3MDcwMjM5MDA0OjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSkFZIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMdkVwWmNIRUxEUTFyTUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqVWVVVTlRdHdIWlFhQTFodzRUZUJUVU1jVFJJSlF0Vk8xVlMyWlZRa2xZPSIsImFjY291bnRTaWduYXR1cmUiOiJjTHd2OVlGc09qOHdIYk9GRnJoNUVDSVRwUkdKZDFNYlIraW5lVTcvb2x3Tm56MGxMSW9VRTAwZGFWaVQ2ZE05YktoYUl6Y0tOeFkrY05kamQ4bFdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZGtWbnhuYUJNc1pMNTlPZWFxOE54R05RSDd1VEdPVXE3aDh0WkJ2aDRUcHAzeDA3MzBsdUpsMmgxN1hyb1VvVVRjcU1YRkhBaVRmUEpEbkhXc3o0alE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDcwMjM5MDA0OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWTFIbEZQVUxjQjJVR2dOWWNPRTNnVTFESEUwU0NVTFZUdFZVdG1WVUpKVyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcxODk4NjgxNCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBbngifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝐅𝐈𝐋𝐄-𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐄𝐃-𝐁𝐘-JAY-𝐌𝐃-𝐕2😍",
  author: process.env.PACK_AUTHER || "JAY",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "JAY-𝐌𝐃-𝐕2",
  ownername: process.env.OWNER_NAME || "JAY",
  errorChat: process.env.ERROR_CHAT || "923192173398",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
