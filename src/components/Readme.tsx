import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const Readme = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("../../README-EN.md")
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="post">
      <ReactMarkdown children={content} />
    </div>
  );

};