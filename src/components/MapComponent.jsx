import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Crear un ícono personalizado utilizando tu imagen local
const customIcon = new L.Icon({
  iconUrl: 'map.svg',  // Ajusta la ruta a la de tu proyecto
  iconSize: [40, 50],  // Ajusta el tamaño según necesites
  iconAnchor: [20, 30],  // Ajusta el punto de anclaje (centro inferior del ícono)
  popupAnchor: [0, -30],  // Posición del popup respecto al ícono
});

export default function MapContainerComponent() {
  const position = [13.7083973, -89.2061803];

  return (
    <MapContainer center={position} zoom={17} scrollWheelZoom={false} className="md:w-[50%] md:h-[80%] w-[90%] h-[55%]  rounded-2xl shadow-2xl shadow-orange-900 ">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
        Calle Gabriela Mistral #203,atras del Colegio Guadalupano,San Salvador, San Salvador, El Salvador
        </Popup>
      </Marker>
    </MapContainer>
  );
}
