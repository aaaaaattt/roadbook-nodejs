const express = require("express");
const dotenv = require("dotenv");
const redis = require("redis");

dotenv.config(); // env환경변수 파일 가져오기

//* Redis 연결
const client = redis.createClient({ legacyMode: true }); // legacy 모드 반드시 설정 !!

client.rPush("myKey", 0);
client.rPush("myKey", 1);
client.rPush("myKey", 2);
