import axios from "axios";

var api_key = "at_KhENj9rOTq4VlLXs8CUedlvNuUXcb";

export function ipPadrao() {
  return axios ({
    method: "GET",
    url: "https://geo.ipify.org/api/v1?apiKey="+api_key,
    data: {apiKey: api_key},
  })
}

export function listaIp(ip) {
  let ipAddress = ip;
  return axios({
    method: "GET",
    url: `https://geo.ipify.org/api/v1?apiKey=${api_key}&ipAddress=${ipAddress}`,
    data: {apiKey: api_key},
    headers: {'Access-Control-Allow-Headers':'*'}
  })
}

export function listaDominio(dominioAddress) {
  let dominio = dominioAddress;
  return axios({
    method: "GET",
    url: `https://geo.ipify.org/api/v1?apiKey=${api_key}&domain=${dominio}`,
    data: {apiKey: api_key},
    headers: {'Access-Control-Allow-Headers':'*'}
  })
}