import { React, useEffect } from "react";
// import useFetchDictionary from '../services/useFetchDictionary'
import { Row, Col } from "react-bootstrap";

const Dictionary = ({ dictionary }) => {
    return dictionary.map((dictionaryEntry) => (
        <div style={{ marginBottom: "1rem" } }  key={dictionaryEntry.guid}>
          <DictionaryEntry dictionaryEntry={dictionaryEntry}/>
        </div>
      ));
};

const DictionaryEntry = ({ dictionaryEntry }) => {
  return (
    <div>
      <Row>
        <Col>{dictionaryEntry.english}</Col>
        <Col>{dictionaryEntry.hungarian}</Col>
        <Col>{dictionaryEntry.spanish}</Col>
        <Col>{dictionaryEntry.chinese}</Col>
        <Col>{dictionaryEntry.portugese}</Col>
      </Row>
    </div>
  );
};

export default Dictionary;
