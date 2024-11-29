/* eslint-disable react/prop-types */
export default function Editor({ userInput, onChange, onToogleEditor, hidden }) {
    return (
      <>
        <div className="header">
          Editor
          <button onClick={onToogleEditor}>
            {hidden.preview ? <span>&#x23F7;</span> : <span>&#x23F6;</span>}
          </button>
        </div>
        <textarea
          id="editor"
          value={userInput}
          onInput={(e) => onChange(e)}
        ></textarea>
      </>
    );
  }