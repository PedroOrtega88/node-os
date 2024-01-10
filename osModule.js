// osModule.js
const os = require('os');

const getSystemInfo = () => {
  return {
    Nombre: os.type(),
    Tipo: os.platform(),
    Version: os.version(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    MemoriaTotal: (os.totalmem() / (1024 * 1024)).toFixed(2),
    MemoriaLibre: (os.freemem() / (1024 * 1024)).toFixed(2)
  };
};

module.exports = {
  getSystemInfo
};
