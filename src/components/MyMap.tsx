import { FC } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal'

interface Props {
  lat: string
  lng: string
}

const MyMap: FC<Props> = ({ lat, lng }) => {
  return (
    <div className="h-1/3">
      <Map
        center={[lat, lng]}
        zoom={10}
        className="rounded"
        style={{ minHeight: '300px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          style={{ height: '250px' }}
        />
        <Marker position={[lat, lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </Map>
    </div>
  )
}

export default MyMap
