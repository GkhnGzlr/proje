import Accordion from "react-bootstrap/Accordion";
import data from "../helper/data";

const Question = () => {
  return (
    <div className="container" >
      {data.map((item) => (
        <Accordion className="mt-3" defaultActiveKey="0" key={item.id}>
          <Accordion.Item eventKey="1">
            <Accordion.Header>{item.question}</Accordion.Header>
            <Accordion.Body>{item.answer}</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1"></Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default Question;
