import React from "react";
function Emoji(pop) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {pop.emoji}
        </span>
        <span>{pop.name}</span>
      </dt>
      <dd>{pop.meaning}</dd>
    </div>
  );
}
export default Emoji;
