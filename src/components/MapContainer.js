import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.markercluster';
import townsData from '../townsData';
import './MapContainer.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png').default,
  iconUrl: require('leaflet/dist/images/marker-icon.png').default,
  shadowUrl: require('leaflet/dist/images/marker-shadow.png').default,
});

const MapContainer = () => {
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (mapContainerRef.current && !mapContainerRef.current._leaflet_id) {
      const map = L.map(mapContainerRef.current).setView([43.9159, 17.6791], 8);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Podaci mape &copy; OpenStreetMap saradnici',
      }).addTo(map);

      const icon = L.icon({
        iconUrl: process.env.PUBLIC_URL + '/pin.png',
        iconSize: [24, 24],
        iconAnchor: [12, 12],
      });

      const markers = L.markerClusterGroup();

      townsData.forEach((town) => {
        const { position, name, description } = town;

        const marker = L.marker(position, { icon })
          .bindPopup(`
            <h3>${name}</h3>
            <p>Opis: ${description}</p>
          `);

        markers.addLayer(marker);
      });

      map.addLayer(markers);
    }
  }, []);

  return (
    <div className="container">
      <div className="map-container" ref={mapContainerRef} id="map"></div>
    </div>
  );
};

export default MapContainer;
