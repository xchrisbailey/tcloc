import React, { FC } from 'react'

interface Props {
  notes: string[]
}

const NotesList: FC<Props> = ({ notes }) => {
  return (
    <ul>
      {notes.map((note) => (
        <li key={note}>{note}</li>
      ))}
    </ul>
  )
}

export default NotesList
