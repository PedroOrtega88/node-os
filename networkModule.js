// networkModule.js
const os = require('os');

const getNetworkInfo = () => {
  const networkInterfaces = os.networkInterfaces();
  const result = {};

  for (const key in networkInterfaces) {
    result[key] = networkInterfaces[key].map((iface) => ({
      Familia: iface.family,
      Dirección: iface.address,
      Interno: iface.internal
    }));
  }

  return result;
};

module.exports = {
  getNetworkInfo
};
