import { useContext } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { BoatContext } from '../contexts/BoatContext';

const SelectedBoat = () => {
	const { boat } = useContext(BoatContext);

	const [boatState, setBoat] = boat;

	const renderCard = () => (
		<Container xl={1} className="fixed-bottom">
			<Card>
				<Row>
					<Col>
						<Card.Title>{boatState.Name}</Card.Title>
					</Col>
				</Row>

				<Card.Body>
					<Row>
						<Col>
							<p>latitude: {boatState.Latitude}</p>
							<p>longitude: {boatState.Longitude}</p>
						</Col>
						<Col xl={1} xs={3}>
							<Button>Ring</Button>
						</Col>
					</Row>

					<Row className="text-center">
						<Col xl={12}>
							<Button>Start Tur</Button>
						</Col>
					</Row>
				</Card.Body>
			</Card>
		</Container>
	);

	return boat[0] !== '' ? renderCard() : <></>;
};

export default SelectedBoat;