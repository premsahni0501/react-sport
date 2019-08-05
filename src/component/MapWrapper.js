import React from 'react';
import { map, tileLayer } from 'leaflet';
import { Button } from './Elements';

let mapRef = null;
export default class MapWrapper extends React.Component {
  state = {
    lat: 0,
    lng: 0,
    zoom: 15,
    dist: '',
    isMounted: false
  }
  componentWillMount() {
    this.setState({ isMounted: true });
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {

      if (!this.state.isMounted) return;

      this.setState({
        lat: pos.coords.latitude,
        lng: pos.coords.longitude
      }, () => {
        mapRef = map(this.rootNode, {
          center: [this.state.lat, this.state.lng],
          zoom: this.state.zoom,
          maxZoom: 18,
          minZoom: 12
        });
        mapRef.on('moveend', this.handleOnMouseDown);
        tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(mapRef);
      })
    })
  }
  handleOnMouseDown = () => {
    const targetLatLng = mapRef.getCenter();
    const dist = this.distance(this.state.lat, this.state.lng, targetLatLng.lat, targetLatLng.lng);
    this.setState({
      dist: dist
    })
    console.log(this.state.dist);
  }

  setDistance = () => {
    this.props.getDist(this.state.dist);
  }

  distance = (srcLat, srcLng, targetLat, targetLng) => {
    var R = 6371; // km (change this constant to get miles)
    var dLat = (targetLat - srcLat) * Math.PI / 180;
    var dLon = (targetLng - srcLng) * Math.PI / 180;
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(srcLat * Math.PI / 180) * Math.cos(targetLat * Math.PI / 180) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    if (d > 1) return Math.round(d) + "km";
    else if (d <= 1) return Math.round(d * 1000) + "m";
    return d;
  }
  render() {
    return (
      <React.Fragment>
        <div ref={mapNode => (this.rootNode = mapNode)}></div>
        {(this.state.dist != '' ? <Button className="btn btn-danger limitButton" onClick={this.setDistance}>Set Limit {this.state.dist}</Button> : '')}
      </React.Fragment>
    );
  }
  componentWillUnmount() {
    this.setState({ isMounted: false });
  }
}