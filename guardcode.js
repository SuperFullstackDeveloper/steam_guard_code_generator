const SteamTotp = require('steam-totp');

// Replace this with your actual shared secret
const sharedSecret = 'Fajeoc/Ks+kx2VzgB2o6SdvjiZw=';

const steamGuardCode = SteamTotp.generateAuthCode(sharedSecret);

console.log('Your Steam Guard Code is:', steamGuardCode);
