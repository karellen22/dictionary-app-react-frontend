import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const DictionaryEntry = ({ dictionaryEntry }) => {
  return (
    <div>
      <Row>
        <Col>{dictionaryEntry.english}</Col>
        <Col>{dictionaryEntry.hungarian}</Col>
        <Col>{dictionaryEntry.spanish}</Col>
        <Col>{dictionaryEntry.chinese}</Col>
        <Col>{dictionaryEntry.portugese}</Col>
        <Col>
          <Button as={Link} to={"/entry/" + dictionaryEntry.guid}>
            Edit
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default DictionaryEntry;
