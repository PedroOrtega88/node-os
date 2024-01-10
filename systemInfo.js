// systemInfo.js
const osModule = require('./src/osModule');
const networkModule = require('./src/networkModule');

const systemInfo = () => {
  console.log('Información del sistema:\n');

  // Sistema operativo
  console.log('Información del sistema operativo:');
  const osInfo = osModule.getSystemInfo();
  printObjectInfo(osInfo);

  // Información de red
  console.log('\nInformación de red:');
  const networkInfo = networkModule.getNetworkInfo();
  printObjectInfo(networkInfo);
};

const printObjectInfo = (obj) => {
  for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${JSON.stringify(value, null, 2)}`);
  }
};

// Ejecuta la función principal
systemInfo();
