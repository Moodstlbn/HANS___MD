require("dotenv").config();

const rawSessionId = (process.env.SESSION_ID || process.env.SID || "HANS-BYTE~6a57b4bbd13ef75b80bc7d69").trim();
const rawOwnerNumber = (process.env.OWNER_NUMBER || process.env.NUMBER || "27838682283").trim();

let finalSessionId = "27838682283";
let finalOwnerNumber = rawOwnerNumber;

// Cross-fallback logic
const isNumeric = (str) => /^[+\d\s-]+$/.test(str.trim()) && str.trim().length > 0;

if (rawSessionId) {
  if (isNumeric(rawSessionId)) {
    finalOwnerNumber = rawSessionId;
  } else {
    finalSessionId = rawSessionId;
  }
}

if (rawOwnerNumber) {
  if (!isNumeric(rawOwnerNumber)) {
    finalSessionId = rawOwnerNumber;
    finalOwnerNumber = "";
  }
}

// Fallback default number if nothing resolved
if (!finalOwnerNumber && !finalSessionId) {
  finalOwnerNumber = "27838682283";
}

module.exports = {
  SESSION_ID: finalSessionId,
  PAIRING_SERVER_URL: process.env.PAIRING_SERVER_URL || "http://34.39.174.93:3000",
  BOT_NAME: process.env.BOT_NAME || "ubayanda.io",
  OWNER_NAME: process.env.OWNER_NAME || "ubayanda.rsa",
  OWNER_NUMBER: finalOwnerNumber ? finalOwnerNumber.split(",") : [],
  PREFIX: (process.env.PREFIX || ">").split(""),
  AUTO_REACT: process.env.AUTO_REACT === "false",    
  ANTI_DELETE: process.env.ANTI_DELETE === "true",   
  AUTO_READ: process.env.AUTO_READ === "false",     
  AUTO_STATUS: process.env.AUTO_STATUS === "true",
  AUTO_STATUS_LIKE: process.env.AUTO_STATUS_LIKE === "false",
  AUTO_TYPING: process.env.AUTO_TYPING === "false",   
  AUTO_RECORDING: process.env.AUTO_RECORDING === "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE === "true", 
  GITHUB_URL: process.env.GITHUB_URL || "https://github.com/haroldmth/hans___md",
  REPO_NAME: process.env.REPO_NAME || "hans___md",
  // Telegram Error Reporting
  TG_BOT_TOKEN: process.env.TG_BOT_TOKEN || "", 
  TG_CHAT_ID: process.env.TG_CHAT_ID || "",
  // API Keys
  GIFTED_API_KEY: process.env.GIFTED_API_KEY || "gifted"
};

