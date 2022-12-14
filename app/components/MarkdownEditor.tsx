import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";
import remarkGemoji from "remark-gemoji";
import { useRef, useState } from "react";
import useCodeEditor from "~/hooks/useCodeEditor";

interface MarkdownEditorProps
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  children: React.ReactNode;
}
const PreTag = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLPreElement>,
    HTMLPreElement
  >
) => {
  return <pre {...props}></pre>;
};
export default function MarkdownEditor(props: MarkdownEditorProps) {
  const [content, setContent] = useState(() => props.value?.toString());
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const ref = useCodeEditor({ value: content, onChange: setContent });

  return (
    <div className="flex flex-col lg:flex-row w-full gap-4">
      <div
        ref={ref}
        className="w-full h-[450px] overflow-auto border rounded-md "
      />
      <div className="w-full overflow-auto break-words border rounded-md h-[450px] px-4">
        <article className="prose dark:prose-invert w-full">
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...codeProps }: any) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    showLineNumbers
                    style={oneDark} // try passing different color schemes, drak, dracula etc.
                    language={match[1]}
                    PreTag="div"
                    {...codeProps}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code>{children}</code>
                );
              },
            }}
            remarkPlugins={[remarkGemoji, gfm]}
            rehypePlugins={[rehypeRaw]}
          >
            {content || ""}
          </ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
