import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ({ campsite }) => {
    if (!campsite || !campsite.image) {
        // Handle the case where 'campsite' or 'campsite.image' is undefined
        return null;
    }
    const { image, name, description } = campsite;
    return (
        <Col md='12' className='m-4'>
            <Card>
                <CardImg top src={image} alt={name}/>
                <CardBody>
                    <CardText> 
                        {description}
                    </CardText>
                </CardBody>                
            </Card>
        </Col>
    );
};

export default CampsiteDetail; 