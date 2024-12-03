/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import { marked } from "marked";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import "./App.css";

// MARKED CONFIG

marked.use({
  breaks: true,
});

// APP

export default function App() {
  const [userInput, setUserInput] = useState(initialText);
  const [hidden, setHidden] = useState({
    editor: false,
    preview: false,
  });
  const editorFlex = useRef(null);

  function handleChange(event) {
    setUserInput(event.target.value);
  }

  function handleToogleEditor() {
    setHidden({
      editor: false,
      preview: !hidden.preview,
    });
    if (hidden.preview == false) {
      editorFlex.current.style.height = "120vh";
    } else {
      editorFlex.current.style.height = "230px";
    }
  }

  function handleTooglePreview() {
    setHidden({
      editor: !hidden.editor,
      preview: false,
    });
  }

  return (
    <div id="main">
      <div
        ref={editorFlex}
        id="editor-flex"
        className={hidden.editor ? "hidden" : undefined}
      >
        <Editor
          userInput={userInput}
          onChange={handleChange}
          onToogleEditor={handleToogleEditor}
          hidden={hidden}
        />
      </div>
      <div id="preview-flex" className={hidden.preview ? "hidden" : undefined}>
        <Preview
          userInput={userInput}
          onTooglePreview={handleTooglePreview}
          hidden={hidden}
        />
      </div>
    </div>
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
