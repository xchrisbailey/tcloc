import React, { FC } from 'react'

import NotesList from './NotesList'

interface Props {
  name: string
  type: string
  info: any[]
}

const ContentBlock: FC<Props> = ({ name, type, info }) => {
  if (type === 'cost') {
    return (
      <>
        <h3>{name}</h3>
        <ul>
          {info.map((cost) => (
            <li key={cost._key}>
              average {cost.type} cost ${cost.cost}:{' '}
              <a href={cost.source}>source</a>
            </li>
          ))}
        </ul>
      </>
    )
  } else if (type === 'weather') {
    return (
      <>
        <h3>{name}</h3>
        <ul>
          {info.map((w) => (
            <li key={w._key}>
              The {w.type} starts in {w.startMonth} and has an average
              temperature of {w.averageTemperature}°F
            </li>
          ))}
        </ul>
      </>
    )
  } else if (type === 'withNotesLinks') {
    return (
      <>
        <h3>{name}</h3>
        <ul>
          {info.map((h) => (
            <li key={h._key}>
              <a href={h.url} target="_blank" rel="noopener noreferrer">
                {h.name}
              </a>
              {h.notes ? <NotesList notes={h.notes} /> : null}
            </li>
          ))}
        </ul>
      </>
    )
  } else if (type === 'basicLink') {
    return (
      <>
        <h3>{name}</h3>
        {info.map((rp) => (
          <ul key={rp._key}>
            <li>
              <a href={rp.url}>{rp.name}</a>
            </li>
          </ul>
        ))}
      </>
    )
  } else if (type === 'basicNote') {
    return (
      <>
        <h3>{name}</h3>
        <NotesList notes={info} />
      </>
    )
  }
}

export default ContentBlock
