import { blogPosts } from '@/lib/blog-posts';

export async function GET() {
  const baseUrl = 'https://ob1ai.co';

  const items = blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .map(
      (post) => `
      <item>
        <title><![CDATA[${post.title}]]></title>
        <link>${baseUrl}/workshop/${post.slug}</link>
        <description><![CDATA[${post.description}]]></description>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <category>${post.category}</category>
        <guid>${baseUrl}/workshop/${post.slug}</guid>
      </item>`,
    )
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/1999/xhtml">
  <channel>
    <title>The Drafting Table | OB.1 AI Solutions</title>
    <link>${baseUrl}/workshop</link>
    <description>Frameworks, field notes, and honest thinking for leaders building something real with AI.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/workshop/rss.xml" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
