import { css, Global } from '@emotion/core'
import emotionReset from 'emotion-reset'

export const globalStyles = (
  <Global
    styles={css`
      ${emotionReset}
      :root {
        --color-pink: #ffadad;
        --color-yellow: #fdffb6;
        --color-green: #caffbf;
        --color-blue: #9bf6ff;
        --color-darkBlue: #00bbcc;
        --color-purple: #bdb2ff;
        --color-orange: #ffd6a5;
        --color-white: #fffffc;
        --color-black: #121212;
        --color-darkGrey: #333333;
        --color-lightGrey: #eee;
      }
      html {
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
      }

      body {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        margin: 0;
        padding: 0;
        background-color: var(--color-white);
        color: var(--color-black);
      }

      a {
        color: var(--color-darkBlue);
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }

      h1,
      h2,
      h3,
      h4 {
        font-family: 'Roboto Slab', serif;
        font-weight: bold;
      }

      h1 {
        font-size: 2em;
        line-height: 1.5em;
        margin-bottom: 0.5em;
        color: var(--color-darkBlue);
      }

      h2 {
        font-size: 1.5em;
        line-height: 1.5em;
        margin-top: 1em;
        margin-bottom: 1em;
        border-bottom: 5px solid var(--color-lightGrey);
      }

      h3 {
        font-size: 1.25em;
        line-height: 1.25em;
        margin-top: 1em;
        margin-bottom: 0.75em;
      }

      h4 {
        font-size: 18px;
        line-height: 31px;
        font-weight: bold;
        margin-bottom: 7px;
      }

      p,
      ul,
      ol,
      blockquote,
      pre {
        margin-bottom: 31px;
        line-height: 31px;
      }

      ul {
        list-style: circle;
      }

      ul,
      ol {
        margin-left: 31px;
      }

      li {
        margin-bottom: 12px;
      }

      blockquote {
        padding-left: 19px;
        border-style: solid;
        border-color: rgba(0, 0, 0, 0.15);
        border-width: 0 0 0 7px;
      }

      ul ul,
      ul ol,
      ol ul,
      ol ol,
      blockquote.right p,
      blockquote.left p {
        margin-bottom: 0;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        border-width: 2px;
        border-color: var(--color-lightGrey);
        border-style: solid;
        td,
        th {
          border-width: 1px;
          border-color: var(--color-lightGrey);
          border-style: solid;
          padding: 0.25em;
        }
        thead {
          background-color: var(--color-lightGrey);
          color: var(--color-darkGrey);
          text-transform: uppercase;
          text-align: left;
          font-weight: bold;
        }
      }
    `}
  />
)
