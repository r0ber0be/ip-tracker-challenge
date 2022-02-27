import { ipPadrao, listaDominio, listaIp } from '../../../api/geolocation';
import arrow from '../../images/arrow.svg';
import markerIcon from '../../images/icon-location.svg';
import bg from '../../images/pattern-bg.png';
import { LocalInfo } from '../LocalInfo/LocalInfo';
import './Navegador.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';

function Cabecalho() {
  return (
    <div>
      <img src={bg} className="background" alt="Fundo azul"/>
    </div>
  )
} 


const newMarker = new Icon({
  iconUrl: markerIcon,
  iconSize: [25, 30]
});

const defaultPosition = [51.505, -0.09]
const Map = ({ location }) => {
  const [map, setMap] = useState(null);
  function handleSetView() {
    if(map && location) {
      map.flyTo(location, 12, {
        duration: 4
      })
    }
  }
  useEffect(() => handleSetView, [location]);

  return (
    <MapContainer 
      center={defaultPosition} 
      zoom={15} 
      
      scrollWheelZoom={false}
      whenCreated={map => setMap(map)}
      >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={location} icon={newMarker}>
        <Popup>
         aaaa
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export function Navegador() {
  const [ipAddress, setIpAddress] = useState('');
  const [geoState,setGeoState] = useState([]);
  
  useEffect(() => {
    ipPadrao().then((res) => {
      setGeoState(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [])

  function handleSubmit() {
    if(!ipAddress) return;
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipAddress)) {
      listaIp(ipAddress).then((res) => {
        setGeoState(res.data);
        console.log('aaa',geoState.ip);
      }).catch((err) => {
        console.log(err);
      })
    } else {
      listaDominio(ipAddress).then((res) => {
        setGeoState(res.data);
      }).catch((err) => {
        console.log(err);
      })
    }
  }
  /*
  let newPosition = [geoState.location?.lat, geoState.location?.lng];
  console.log('new position',newPosition)*/
  
  return (
    <div>
      <Cabecalho/>
      <div className="campo-input">
        <input type="text" className="campo-pesquisa" 
          onChange={({target}) => setIpAddress(target.value)} 
          value={ipAddress}
          placeholder=" Search for any IP address or domain"/>
        <button type="submit" 
          onClick={handleSubmit} 
          className="botao-submeter">
          <img src={arrow} alt="Seta submeter" />
        </button>
      </div>
      
      <LocalInfo info={geoState}/>
      <div className="leaflet-container">
        <Map location={geoState.location ? [geoState.location.lat, geoState.location.lng] : defaultPosition}/>
      </div>
    </div>
  )
}