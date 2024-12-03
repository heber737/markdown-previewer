/* eslint-disable react/prop-types */
import { marked } from "marked";
import DOMPurify from "dompurify";

export default function Preview({ userInput, onTooglePreview, hidden }) {
  const parsedInput = marked.parse(userInput);
  const sanitizedInput = DOMPurify.sanitize(parsedInput);
  return (
    <>
      <div className="header">
        Previewer
        <button onClick={onTooglePreview}>
          {hidden.editor ? <span>&#x23F7;</span> : <span>&#x23F6;</span>}
        </button>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: sanitizedInput }}
      ></div>
    </>
  );
}
