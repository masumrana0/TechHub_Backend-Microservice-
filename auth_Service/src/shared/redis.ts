import { SetOptions, createClient } from 'redis';
import config from '../config';

const redisClient = createClient({
  url: config.redis_url as string,
});
const redisPubClient = createClient({
  url: config.redis_url as string,
});
const redisSubClient = createClient({
  url: config.redis_url as string,
});

redisClient.on('error', error => console.log('RadisError', error));
redisClient.on('connect', () => console.log('Redis Connected'));

const connect = async (): Promise<void> => {
  await redisClient.connect();
  await redisPubClient.connect();
  await redisSubClient.connect();
};

const set = async (
  key: string,
  value: string,
  option?: SetOptions,
): Promise<void> => {
  await redisClient.set(key, value, option);
};
const get = async (key: string): Promise<string | null> => {
  return await redisClient.get(key);
};
const del = async (key: string): Promise<void> => {
  await redisClient.del(key);
};

const setAccessToen = async (userId: string, token: string): Promise<void> => {
  const key = `access_token:${userId}`;
  await redisClient.set(key, token, {
    EX: Number(config.redis_token_expirein),
  });
};

const getAccessToen = async (userId: string): Promise<string | null> => {
  const key = `access_token:${userId}`;
  return await redisClient.get(key);
};

const delAccessToen = async (userId: string): Promise<void> => {
  const key = `access_token:${userId}`;
  await redisClient.del(key);
};

const dissconnect = async (): Promise<void> => {
  await redisClient.quit();
  await redisPubClient.quit();
  await redisSubClient.quit();
};

export const RedisClient = {
  connect,
  set,
  setAccessToen,
  get,
  getAccessToen,
  del,
  delAccessToen,
  dissconnect,
  publish: redisPubClient.publish.bind(redisPubClient),
  subcribe: redisSubClient.subscribe.bind(redisSubClient),
};
