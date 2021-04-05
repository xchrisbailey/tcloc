import { css } from '@emotion/react'
import { FC } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal'

interface Props {
  lat: string
  lng: string
}

const MyMap: FC<Props> = ({ lat, lng }) => {
  return (
    <Map
      center={[lat, lng]}
      zoom={10}
      css={css`
        border-radius: 1em;
        overflow: hidden;
        min-height: 300px;
      `}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        css={css`
          height: 250px;
        `}
      />
      <Marker position={[lat, lng]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </Map>
  )
}

export default MyMap
