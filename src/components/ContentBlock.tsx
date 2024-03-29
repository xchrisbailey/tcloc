import { FC } from 'react'

import NotesList from './NotesList'

interface Props {
  title?: string
  name: string
  type: string
  info: any[]
}

const ContentBlock: FC<Props> = ({ title, name, type, info }) => {
  if (type === 'cost') {
    return (
      <article>
        <h3 className="px-2 py-2 text-xl font-bold uppercase bg-green-400 rounded shadow">
          {name}
        </h3>
        <ul className="px-2 list-disc list-inside">
          {info.map((cost) => (
            <li key={cost._key}>
              average {cost.type} cost ${cost.cost}:{' '}
              <a href={cost.source}>source</a>
            </li>
          ))}
        </ul>
      </article>
    )
  } else if (type === 'weather') {
    return (
      <article>
        <h3 className="px-2 py-2 text-xl font-bold uppercase bg-blue-400 rounded shadow">
          {name}
        </h3>
        <ul className="px-2 list-disc list-inside">
          {info.map((w) => (
            <li key={w._key}>
              The {w.type} starts in {w.startMonth} and has an average
              temperature of {w.averageTemperature}°F
            </li>
          ))}
        </ul>
      </article>
    )
  } else if (type === 'withNotesLinks') {
    return (
      <article>
        <h3 className="px-2 py-2 text-xl font-bold uppercase bg-purple-400 rounded shadow">
          {title ? title : name}
        </h3>
        {info.map((h) => (
          <section key={h._key} className="px-2">
            <h4 className="text-lg">
              <a
                href={h.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-600 hover:underline hover:text-indigo-800"
              >
                {h.name}
              </a>
            </h4>
            {h.notes ? <NotesList notes={h.notes} /> : null}
          </section>
        ))}
      </article>
    )
  } else if (type === 'basicLink') {
    return (
      <article>
        <h3 className="px-2 py-2 text-xl font-bold uppercase bg-yellow-400 rounded shadow">
          {name}
        </h3>
        {info.map((rp) => (
          <ul className="px-2 list-disc list-inside" key={rp._key}>
            <li>
              <a href={rp.url}>{rp.name}</a>
            </li>
          </ul>
        ))}
      </article>
    )
  } else if (type === 'basicNote') {
    return (
      <article>
        <h3 className="px-2 py-2 text-xl font-bold uppercase bg-indigo-400 rounded shadow">
          {name}
        </h3>
        {info ? <NotesList notes={info} /> : null}
      </article>
    )
  }
}

export default ContentBlock
