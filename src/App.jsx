/* eslint-disable react/prop-types */
import "./App.css";
import { marked } from "marked";
import { useState } from "react";

console.log(marked);

marked.use({
  breaks: true,
});

export default function App() {
  const [userInput, setUserInput] = useState(initialText);
  const [hidden, setHidden] = useState({
    editor: false,
    preview: false,
  });

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function toogleEditor() {
    setHidden({
      editor: false,
      preview: !hidden.preview,
    });
    if (hidden.preview == false) {
      document.getElementById("editor-flex").style.height = "120vh";
    } else {
      document.getElementById("editor-flex").style.height = "230px";
    }
  }

  function tooglePreview() {
    setHidden({
      editor: !hidden.editor,
      preview: false,
    });
  }

  return (
    <div id="main">
      <div id="editor-flex" className={hidden.editor && "hidden"}>
        <Editor
          userInput={userInput}
          handleChange={handleChange}
          toogle={toogleEditor}
          hidden={hidden}
        />
      </div>
      <div id="preview-flex" className={hidden.preview && "hidden"}>
        <Preview display={userInput} toogle={tooglePreview} hidden={hidden} />
      </div>
    </div>
  );
}

function Editor({ userInput, handleChange, toogle, hidden }) {
  return (
    <>
      <div className="header">
        Editor
        <button onClick={toogle}>
          {hidden.preview ? <span>&#x23F7;</span> : <span>&#x23F6;</span>}
        </button>
      </div>
      <textarea
        id="editor"
        value={userInput}
        onInput={(e) => handleChange(e)}
      ></textarea>
    </>
  );
}

function Preview({ display, toogle, hidden }) {
  return (
    <>
      <div className="header">
        Previewer
        <button onClick={toogle}>
          {hidden.editor ? <span>&#x23F7;</span> : <span>&#x23F6;</span>}
        </button>
      </div>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(display) }}>
      </div>
    </>
  );
}

const initialText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://miro.medium.com/v2/resize:fit:720/format:webp/1*i3hzpSEiEEMTuWIYviYweQ.png)

`;
