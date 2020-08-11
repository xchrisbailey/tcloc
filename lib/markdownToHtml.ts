import html from 'remark-html'
import headings from 'remark-autolink-headings'
import slug from 'remark-slug'
import unified from 'unified'
import markdown from 'remark-parse'

export default async function markdownToHtml(
  markdownText: string
): Promise<string> {
  const res = unified()
    .use(markdown)
    .use(slug)
    .use(headings)
    .use(html)
    .processSync(markdownText)
  return res.toString()
}
