/* eslint-disable react/prop-types */
export default function Editor({
  sanitizedInput,
  onChange,
  onToogleEditor,
  hidden,
}) {
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
        value={sanitizedInput}
        onInput={(e) => onChange(e)}
      ></textarea>
    </>
  );
}
