import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🤓": "Nerd Face",
  "😕": "Confused",
  "🥴": "Woozy",
  "🥺": "Pleading",
  "😉": "Winking",
  "🤩": "Star-Struck",
  "🤔": "Thinking",
  "😏": "Smirking",
  "🤤": "Drooling",
  "🥳": "Partying"
};

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputHandler(event) {
    let inputValue = event.target.value;

    let meaning = emojiDictionary[inputValue];

    if (meaning === undefined) {
      meaning = "This emoji doesn't exist in database :(";
    }

    setMeaning(meaning);
  }
  const emojiCollection = Object.keys(emojiDictionary);

  function emojiClick(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        type="text"
        placeholder="Enter an emoji :)"
        id="input-field"
        onChange={inputHandler}
      ></input>

      <p class="meaning">{meaning}</p>

      <p>Emojis in database</p>

      {emojiCollection.map(function (emoji) {
        return (
          <span
            style={{ cursor: "pointer", padding: "0.1em", fontSize: "1.5em" }}
            onClick={() => emojiClick(emoji)}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
