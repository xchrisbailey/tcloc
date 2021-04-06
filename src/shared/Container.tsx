import { css, SerializedStyles } from '@emotion/react'
import { ReactNode, FC } from 'react'

interface Props {
  children: ReactNode
  css?: SerializedStyles
  cw?: string[]
}

const container: FC<Props> = ({
  children,
  cw = ['100%', '690px', '1200px']
}) => (
  <section
    css={css`
      padding: 0.2em;
      width: ${cw[0]};
      margin: 0 auto;
      @media (min-width: 768px) {
        max-width: ${cw[1]};
        padding: 0;
      }
      @media (min-width: 1280px) {
        max-width: ${cw[2]};
        padding: 0;
      }
    `}
  >
    {children}
  </section>
)

export default container
