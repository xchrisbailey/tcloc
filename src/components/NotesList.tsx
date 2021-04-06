import React, { FC } from 'react'

interface Props {
  notes: string[]
}

const NotesList: FC<Props> = ({ notes }) => {
  if (notes) {
    return (
      <ul className="px-2 list-disc list-inside">
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    )
  } else {
    null
  }
}

export default NotesList
