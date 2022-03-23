import { React, useEffect, useState } from "react";
import { GetDictionary } from "../../services/dictionary";
import DictionaryEntry from "./DictionaryEntry";

const Dictionary = () => {
  const [dictionary, setDictionary] = useState("");
  useEffect(() => {
    GetDictionary(setDictionary);
  }, []);
  return (
    dictionary &&
    dictionary.map((dictionaryEntry) => (
      <div style={{ marginBottom: "1rem" }} key={dictionaryEntry.guid}>
        <DictionaryEntry dictionaryEntry={dictionaryEntry} />
      </div>
    ))
  );
};

export default Dictionary;
