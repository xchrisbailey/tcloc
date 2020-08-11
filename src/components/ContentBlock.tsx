/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { FC } from 'react'

import NotesList from './NotesList'

interface Props {
  name: string
  type: string
  info: any[]
}

const ContentBlock: FC<Props> = ({ name, type, info }) => {
  if (type === 'cost') {
    return (
      <div>
        <h3
          css={css`
            background-color: var(--color-green);
            padding: 0.2em 0.3em;
            border-radius: 0.1em;
          `}
        >
          {name}
        </h3>
        <ul>
          {info.map((cost) => (
            <li key={cost._key}>
              average {cost.type} cost ${cost.cost}:{' '}
              <a href={cost.source}>source</a>
            </li>
          ))}
        </ul>
      </div>
    )
  } else if (type === 'weather') {
    return (
      <div>
        <h3
          css={css`
            background-color: var(--color-blue);
            padding: 0.2em 0.3em;
            border-radius: 0.1em;
          `}
        >
          {name}
        </h3>
        <ul>
          {info.map((w) => (
            <li key={w._key}>
              The {w.type} starts in {w.startMonth} and has an average
              temperature of {w.averageTemperature}°F
            </li>
          ))}
        </ul>
      </div>
    )
  } else if (type === 'withNotesLinks') {
    return (
      <div>
        <h3
          css={css`
            background-color: var(--color-purple);
            padding: 0.2em 0.3em;
            border-radius: 0.1em;
          `}
        >
          {name}
        </h3>
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
      </div>
    )
  } else if (type === 'basicLink') {
    return (
      <div>
        <h3
          css={css`
            background-color: var(--color-yellow);
            padding: 0.2em 0.3em;
            border-radius: 0.1em;
          `}
        >
          {name}
        </h3>
        {info.map((rp) => (
          <ul key={rp._key}>
            <li>
              <a href={rp.url}>{rp.name}</a>
            </li>
          </ul>
        ))}
      </div>
    )
  } else if (type === 'basicNote') {
    return (
      <div>
        <h3
          css={css`
            background-color: var(--color-orange);
            padding: 0.2em 0.3em;
            border-radius: 0.1em;
          `}
        >
          {name}
        </h3>
        <NotesList notes={info} />
      </div>
    )
  }
}

export default ContentBlock
