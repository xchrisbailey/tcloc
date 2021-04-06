import { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
}

const grid: FC<Props> = ({ children }) => (
  <section className="grid grid-flow-row grid-cols-1 gap-4 mx-2 md:grid-cols-2 lg:grid-cols-4 grid-rows-auto md:mx-0">
    {children}
  </section>
)

export default grid
