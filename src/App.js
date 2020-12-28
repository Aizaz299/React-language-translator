import "./styles.css";
import React, { useState } from "react";
import Field from "./components/field";
import Lnaguages from "./components/languages";
import Translate from "./components/translate";
import translate from "./components/translate";

export default function App() {
  const [language, setLanguage] = useState("ru");
  const [text, setText] = useState("");

  return (
    <div>
      <h1 className="title">Translater</h1>
      <Field label="Enter English" onChange={setText} value={text} />
      <Lnaguages language={language} onLanguageChange={setLanguage} />
      <br /> <hr /> <br />
      <Translate text={text} language={language} />
    </div>
  );
}
