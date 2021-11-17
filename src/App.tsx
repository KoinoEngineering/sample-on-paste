import React, { useState } from "react";
import "./App.css";

function App() {
  const [tags, setTags] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  return (
    <div className="App">
      <div className="flex">
        {tags.length ? (
          tags.map((t, i) => (
            <div key={i} className="flex-item">
              {t}
            </div>
          ))
        ) : (
          <div>no tag</div>
        )}
      </div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            console.log("on change");
            setValue(e.target.value);
          }}
          onPaste={(e) => {
            console.log("on paste");
            // 自分がフォーカスされてる時だけ
            if(e.target === document.activeElement){
              e.preventDefault();
              setTags(tags.concat(e.clipboardData.getData("Text")));
            }
          }}
        />
      </div>
    </div>
  );
}

export default App;
