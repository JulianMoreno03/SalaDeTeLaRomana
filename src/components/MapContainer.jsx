import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Crear un ícono personalizado utilizando tu imagen local
const customIcon = new L.Icon({
  iconUrl: '/src/icons/map.svg',  // Ajusta la ruta a la de tu proyecto
  iconSize: [40, 50],  // Ajusta el tamaño según necesites
  iconAnchor: [20, 30],  // Ajusta el punto de anclaje (centro inferior del ícono)
  popupAnchor: [0, -30],  // Posición del popup respecto al ícono
});

export default function MapContainerComponent() {
  const position = [13.7083973, -89.2061803];

  return (
    <MapContainer center={position} zoom={18} scrollWheelZoom={false} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, facilis!
        </Popup>
      </Marker>
    </MapContainer>
  );
}
