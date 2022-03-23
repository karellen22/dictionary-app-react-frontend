import { Row, Col } from "react-bootstrap";

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

export default DictionaryEntry;
