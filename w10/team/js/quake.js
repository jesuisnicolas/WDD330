import { getJSON } from './utilities.js';
// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-03-02';
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    letUrl = baseUrl + '&latitude=' + position.coords.latitude + '&longitude=' + position.coords.longitude +'&maxradiuskm=' + radius;
    getJSON(url)
        .then((result) => {
            console.log("These are the quakes:" + result);
        })
    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}