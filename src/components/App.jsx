import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";
function createEntry(pop) {
  return (
    <Emoji
      key={pop.id}
      emoji={pop.emoji}
      name={pop.name}
      meaning={pop.meaning}
    />
  );
}
function App(pop) {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="dictionary">{emojipedia.map(createEntry)}</div>
    </div>
  );
}

export default App;
