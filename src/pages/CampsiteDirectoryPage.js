import { Container, Row, Col } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import CampsiteDetail from '../features/campsites/CampsiteDetail'
import { selectRandomCampsite } from '../features/campsites/campsitesSlice'

const CampsiteDirectoryPage = () => {
    const selectedCampsite = selectRandomCampsite()

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CampsitesList />
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    )
}

export default CampsiteDirectoryPage;