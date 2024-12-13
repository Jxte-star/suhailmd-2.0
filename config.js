const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22899535363";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_40_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExLFxuICAgICAgICAyMTUsXG4gICAgICAgIDM5LFxuICAgICAgICAyMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxODIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI2LFxuICAgICAgICA0NixcbiAgICAgICAgMTQ1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODUsXG4gICAgICAgIDc0LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNixcbiAgICAgICAgMTU2LFxuICAgICAgICA0MixcbiAgICAgICAgMjM2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDM2LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDc4LFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICA2NixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDczLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwLFxuICAgICAgICAxMzksXG4gICAgICAgIDk4LFxuICAgICAgICAzMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEsXG4gICAgICAgIDI4LFxuICAgICAgICA2NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyOCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDQ5LFxuICAgICAgICA0OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTU5LFxuICAgICAgICA1MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDUxLFxuICAgICAgICA0MixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAxODEsXG4gICAgICAgIDgyLFxuICAgICAgICA0MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxNixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMixcbiAgICAgICAgMTE5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDI3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDk3LFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICA0MixcbiAgICAgICAgMzUsXG4gICAgICAgIDY5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTExLFxuICAgICAgICA0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDczLFxuICAgICAgICA4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSXBRQXlpNmFLaUtIMXVmK0ttTVRrT2pZaFdPeER0a0xhY3NhVlhidGN6RT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMjg5OTUzNTM2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQkFFRkFDNDRBQUYzMkE3RDYzRjg2M0RDNkVGNzVCNjFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0MTE1MjQ5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjI4OTk1MzUzNjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ5RDc5MTVBNjY0NzNBRkUwQTVEMTVFMUE0QUFFRENDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDExNTI0OVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCI4eDVoVkRhZFNZLUtoalFyMFNJSVNRXCIsXG4gIFwicGhvbmVJZFwiOiBcImVjNDFlNzQxLWU4NmItNDQ1ZS05MGE4LTI3OTJkMjAyMTk4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3NSxcbiAgICAgIDI0NixcbiAgICAgIDUsXG4gICAgICAxOTcsXG4gICAgICAyNDcsXG4gICAgICA5MixcbiAgICAgIDEzNyxcbiAgICAgIDUzLFxuICAgICAgMyxcbiAgICAgIDEyNSxcbiAgICAgIDE5NSxcbiAgICAgIDI0NCxcbiAgICAgIDEzMyxcbiAgICAgIDc4LFxuICAgICAgMTUzLFxuICAgICAgMTE2LFxuICAgICAgMTg1LFxuICAgICAgMjQ5LFxuICAgICAgNDksXG4gICAgICAxMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjgsXG4gICAgICAyNTEsXG4gICAgICA3OSxcbiAgICAgIDEyMyxcbiAgICAgIDEyOSxcbiAgICAgIDIyNyxcbiAgICAgIDI0NyxcbiAgICAgIDcyLFxuICAgICAgNjgsXG4gICAgICAyMjcsXG4gICAgICA0OCxcbiAgICAgIDEwMCxcbiAgICAgIDE1MSxcbiAgICAgIDIxNixcbiAgICAgIDI1MCxcbiAgICAgIDIzNSxcbiAgICAgIDE2MCxcbiAgICAgIDEzOSxcbiAgICAgIDIzMixcbiAgICAgIDIwNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxRlNZWEQ0OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI4OTk1MzUzNjM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjkxNjY4MDkwOTc4NDg5OjE0QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlRhZWhhPDNcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPbVdydGdDRUtuLzhib0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk54dmdoditpQktGUzlwZkJVZEFXNno4b2FFMm1BRmZrRVZsUFVSenl5amc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWFB5ZDN4eHNvRHhDQ0FCNXlBUGFRaVlhY0R3d3V1QlVxODBSamx2WEd5dFJBRVBOWllYcVdZOXFmdU8yVzI1RzJnRUtXVHdwYkplMFhrNGRkT1E3Q2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTGpCWHpXaTFPUDRzQ0FUbWwxRVR2b2M2T0YxdFYweDlGUUZLTlBQOFF3dlUyLzJsTjdYSUd1QU9QVDNGOHMvbnlrTTlhVmNGNWhOMUNiMi9jd2NralE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI4OTk1MzUzNjM6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNTZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDExNTI0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNZbVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ1ltLmpzb24iOiAie1wia2V5RGF0YVwiOlwiTlhjUDhUVkZyN3docTA4NU5ieFBVQk1KRkdmQjRORys4aG1oREZ0RTNhdz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MjIxNzY4NzMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDExNTI0OTc4M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "jxteme",
  packname: process.env.PACK_NAME || "goodvibe",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.envprivate| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
