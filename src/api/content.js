import Vue from 'vue';
import axios from 'axios';
// import configManagerInstance from 'config/configManagerInstance';
// import { URLNames } from 'data/enum/configNames';

const endPoints = {
  overview: '/api/',
};

export default function loadContentOverviewFromJson(data) {
  console.log('content.js loadContentOverviewFromJson', data);
  return axios({
    method: 'get',
    url: endPoints.overview,
    data: { ...data },
  });
}
