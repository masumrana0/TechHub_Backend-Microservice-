import { createClient } from 'redis';
import { error } from 'winston';
import config from '../config';

const redisClient = createClient({
  url: config.redis_Url,
});

redisClient.on('error', error => {
  console.log(error);
});
redisClient.on('connect', error => {
  console.log('Redis connected');
});

const connect = async (): Promise<void> => {
  await redisClient.connect();
};

export const RedisClient = {
  connect,
};
