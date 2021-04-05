import { css } from '@emotion/react'
import { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
  cols?: number[]
  gap?: string
}

const grid: FC<Props> = ({ children, cols = [1, 2, 4], gap = '1em' }) => (
  <div
    css={css`
      align-content: center;
      justify-content: center;
      display: grid;
      grid-gap: ${gap};
      grid-template-columns: repeat(${cols[0]}, 1fr);
      width: 100%;
      @media (min-width: 768px) {
        grid-template-columns: repeat(${cols[1]}, 1fr);
      }
      @media (min-width: 1280px) {
        grid-template-columns: repeat(${cols[2]}, 1fr);
      }
    `}
  >
    {children}
  </div>
)

export default grid
