import Markdown from "markdown-to-jsx";

const MarkdownParser = ({ text }: { text: string }) => {
  return (
    <div className="reset">
      <Markdown
        options={{
          wrapper: "article",
        }}
      >
        {text}
      </Markdown>
    </div>
  );
};

export default MarkdownParser;
