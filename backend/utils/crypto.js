const crypto = require('node:crypto');
require('dotenv').config()

const ENCRYPTION_KEY = Buffer.from(process.env.CRYPTO_KEY, 'base64');;
const IV_LENGTH = 16;

const algorithm = 'aes-256-ctr';
const key = Buffer.concat([Buffer.from(ENCRYPTION_KEY, 'hex'), Buffer.alloc(32)], 32);

const Encrypt = (decrypted) => {
    console.log('KEY: ', ENCRYPTION_KEY)
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(decrypted);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

const  Decrypt = (encrypted) => {
    let textParts = encrypted.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();  
}

module.exports = { Encrypt, Decrypt };