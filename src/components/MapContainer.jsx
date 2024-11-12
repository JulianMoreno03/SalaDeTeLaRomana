import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function MapContainerComponent() {
  const position = [13.7083973, -89.2061803];

  return (
    <MapContainer center={position} zoom={18} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, facilis!
        </Popup>
      </Marker>
    </MapContainer>
  );
}
