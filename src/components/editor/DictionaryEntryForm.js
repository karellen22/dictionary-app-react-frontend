import { React, useEffect, useState } from "react";
import { Form, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  EditDictionaryEntry,
  GetDictionaryEntry,
} from "../../services/dictionary";

const DictionaryEntryForm = () => {
  let { id } = useParams();
  const [dictionaryEntry, setDictionaryEntry] = useState("");
  const [isNewEntry, setIsNewEntry] = useState(false);
  console.log(id);

  useEffect(() => {
    if (id !== "newEntry") {
      GetDictionaryEntry(id, setDictionaryEntry);
    } else {
      setIsNewEntry(true);
      setDictionaryEntry({
        guid: "",
        english: "",
        portugese: "",
        chinese: "",
        hungarian: "",
        spanish: "",
      });
    }
  }, []);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        EditDictionaryEntry(dictionaryEntry, setDictionaryEntry);
      }}
    >
      <Row>
        <Form.Label>ID</Form.Label>
        <Form.Control disabled value={id} />

        {dictionaryEntry && (
          <>
            <Form.Label>English</Form.Label>
            <Form.Control
              defaultValue={dictionaryEntry.english}
              onChange={(event) => {
                let copyOfDictEntry = { ...dictionaryEntry };
                copyOfDictEntry.english = event.target.value;
                setDictionaryEntry(copyOfDictEntry);
              }}
            />
            <Form.Label>Hungarian</Form.Label>
            <Form.Control
              defaultValue={dictionaryEntry.hungarian}
              onChange={(event) => {
                let copyOfDictEntry = { ...dictionaryEntry };
                copyOfDictEntry.hungarian = event.target.value;
                setDictionaryEntry(copyOfDictEntry);
              }}
            />
            <Form.Label>Spanish</Form.Label>
            <Form.Control
              defaultValue={dictionaryEntry.spanish}
              onChange={(event) => {
                let copyOfDictEntry = { ...dictionaryEntry };
                copyOfDictEntry.spanish = event.target.value;
                setDictionaryEntry(copyOfDictEntry);
              }}
            />
            <Form.Label>Chinese</Form.Label>
            <Form.Control
              defaultValue={dictionaryEntry.chinese}
              onChange={(event) => {
                let copyOfDictEntry = { ...dictionaryEntry };
                copyOfDictEntry.chinese = event.target.value;
                setDictionaryEntry(copyOfDictEntry);
              }}
            />
            <Form.Label>Portugese</Form.Label>
            <Form.Control
              defaultValue={dictionaryEntry.portugese}
              onChange={(event) => {
                let copyOfDictEntry = { ...dictionaryEntry };
                copyOfDictEntry.portugese = event.target.value;
                setDictionaryEntry(copyOfDictEntry);
              }}
            />
            <Button type="submit">Submit Edit</Button>
          </>
        )}
      </Row>
    </Form>
  );
};

export default DictionaryEntryForm;
