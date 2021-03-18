import { Pulser } from './pulser.mjs';

const pulser = new Pulser();

pulser.on('pulse', () => {
    console.log(`${new Date().toISOString()} pulse recieved`)
});

pulser.start();
