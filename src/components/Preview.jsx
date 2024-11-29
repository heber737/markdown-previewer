/* eslint-disable react/prop-types */
import { marked } from "marked";

export default function Preview({ display, onTooglePreview, hidden }) {
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
          dangerouslySetInnerHTML={{ __html: marked.parse(display) }}
        ></div>
      </>
    );
  }