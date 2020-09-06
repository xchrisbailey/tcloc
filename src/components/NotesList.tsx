import React, { FC } from 'react'

interface Props {
  notes: string[]
}

const NotesList: FC<Props> = ({ notes }) => {
  return (
    <ul>{notes ? notes.map((note) => <li key={note}>{note}</li>) : null}</ul>
  )
}

export default NotesList
