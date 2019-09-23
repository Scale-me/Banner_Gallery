import http from "k6/http";
import { check, group, sleep } from "k6";

export let options = {
  vus: 100,
  duration: "60s",
}

export default function () {
  for (var id = 1; id <= 100; id++) {
    var rand = Math.floor(Math.random()*10000000);
    http.get(`http://13.52.74.61:3001/api/listing/${rand}`)
  };
  sleep(3);
};

