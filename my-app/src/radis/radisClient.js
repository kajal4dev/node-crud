import { createClient } from 'redis';

const client = createClient({
    username: 'default',
    password: 'BMksuPrImQp4tQktfi1bFx3Cb5YniuF8',
    socket: {
        host: 'pebble-citrus-jadeish-32365.db.redis.io',
        port: 17848
    }
});

// client.on('error', err => console.log('Redis Client Error', err));

// await client.connect();

// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result) ;
client.on("error",(error)=>{
    console.log("Raid client error:",error);
});
client.on("connect",()=>{
    console.log("connecting");
});
client.on("ready",()=>{
    console.log("Radis is ready");
});
client.connect();

export default client;


