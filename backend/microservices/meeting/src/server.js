const os = require('os');
const { Eureka } = require('eureka-js-client');
const app = require('./app');

const PORT = parseInt(process.env.PORT, 10) || 8083;
const HOST = 'localhost';

const client = new Eureka({
  instance: {
    app: 'MEETING',
    instanceId: `${os.hostname()}:meeting:${PORT}`,
    hostName: HOST,
    ipAddr: '127.0.0.1',
    vipAddress: 'meeting',
    port: { $: PORT, '@enabled': true },
    dataCenterInfo: {
      '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
      name: 'MyOwn',
    },
  },
  eureka: {
    host: 'localhost',
    port: 8761,
    servicePath: '/eureka/apps/',
  },
});

app.listen(PORT, () => {
  console.log(`meeting microservice running on http://localhost:${PORT}`);
  console.log(`Swagger UI: http://localhost:${PORT}/swagger-ui`);
  client.start((err) => {
    console.log(err ? `Eureka registration failed: ${err}` : 'Registered with Eureka as MEETING');
  });
});

process.on('SIGINT', () => {
  client.stop(() => process.exit(0));
});