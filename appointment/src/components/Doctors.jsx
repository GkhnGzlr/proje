import Card from 'react-bootstrap/Card';
const Doctors = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         Doctors
        </Card.Text>        
      </Card.Body>
    </Card>
  );
}

export default Doctors;