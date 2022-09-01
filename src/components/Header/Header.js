import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Header = () => {
    return(
    <Card border="light" className="text-center">
      <Card.Body>
        <Card.Title>Welcome to our Character Creator</Card.Title>
        <Card.Text>
          With this creator you can create youreself a character that you can play later.
        </Card.Text>
        <Button variant="primary">Create your Character</Button>
      </Card.Body>
    </Card>
    )
}
export default Header;