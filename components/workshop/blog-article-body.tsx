'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface BlogArticleBodyProps {
  content: string;
}

export function BlogArticleBody({ content }: BlogArticleBodyProps) {
  // Split FAQ section from main content
  const faqSplit = content.indexOf('## FAQ');
  const mainContent = faqSplit !== -1 ? content.slice(0, faqSplit) : content;
  const faqContent = faqSplit !== -1 ? content.slice(faqSplit) : null;

  // Parse FAQ into Q&A pairs
  const faqPairs: { question: string; answer: string }[] = [];
  if (faqContent) {
    const faqLines = faqContent.split('\n').slice(1); // skip "## FAQ" heading
    let currentQ = '';
    let currentA = '';
    for (const line of faqLines) {
      if (line.startsWith('**') && line.endsWith('**')) {
        if (currentQ) {
          faqPairs.push({ question: currentQ, answer: currentA.trim() });
        }
        currentQ = line.replace(/\*\*/g, '');
        currentA = '';
      } else {
        currentA += line + '\n';
      }
    }
    if (currentQ) {
      faqPairs.push({ question: currentQ, answer: currentA.trim() });
    }
  }

  return (
    <div>
      {/* Main article content */}
      <article className="prose-ob1">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold text-stone-900 mt-10 mb-4 pl-4 border-l-[3px] border-orange-500">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-bold text-stone-900 mt-8 mb-3">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-stone-700 leading-relaxed mb-5 text-base">
                {children}
              </p>
            ),
            strong: ({ children }) => (
              <strong className="font-bold text-stone-900">{children}</strong>
            ),
            em: ({ children }) => (
              <em className="italic text-stone-600">{children}</em>
            ),
            blockquote: ({ children }) => (
              <blockquote className="bg-[#F5F0E8] border-l-[3px] border-orange-500 px-6 py-4 my-6 rounded-r-sm">
                {children}
              </blockquote>
            ),
            code: ({ children, className }) => {
              const isInline = !className;
              if (isInline) {
                return (
                  <code className="bg-stone-200 text-orange-700 px-1.5 py-0.5 rounded text-sm font-mono">
                    {children}
                  </code>
                );
              }
              return (
                <code className="block bg-[#0D1B2A] text-stone-300 p-4 rounded-sm overflow-x-auto text-sm font-mono my-4">
                  {children}
                </code>
              );
            },
            pre: ({ children }) => (
              <pre className="bg-[#0D1B2A] text-stone-300 p-5 rounded-sm overflow-x-auto my-6">
                {children}
              </pre>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                className="text-orange-600 hover:text-orange-700 underline underline-offset-2 transition-colors"
              >
                {children}
              </a>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-outside ml-6 mb-5 space-y-2 text-stone-700">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-outside ml-6 mb-5 space-y-2 text-stone-700">
                {children}
              </ol>
            ),
            hr: () => (
              <hr className="my-8 border-stone-300" />
            ),
          }}
        >
          {mainContent}
        </ReactMarkdown>
      </article>

      {/* FAQ Section */}
      {faqPairs.length > 0 && (
        <div className="mt-12 pt-8 border-t border-stone-300">
          <h2 className="text-2xl font-bold text-stone-900 mb-6 pl-4 border-l-[3px] border-orange-500">
            Frequently Asked Questions
          </h2>
          <div className="space-y-5">
            {faqPairs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-sm p-5">
                <h3 className="font-bold text-stone-900 mb-2">{faq.question}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
