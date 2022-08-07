import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import LoanForm from '../components/LoanForm';
import DataTable from '../components/DataTable';
import client from '../service/client';

const Home =()=> {
    const dataInit = {
        amount : "",
        interest : "",
        term : ""
    };

    const [data, setData] = useState(dataInit);
    const [dataList, setDataList] = useState([]);

    const handleChange =(property, value)=> {
        setData({...data, [property] : value});
    }
    const handleSubmit =(e)=> {
        e.preventDefault();
        post(data);
    }

    const post =async()=> {
        await client.post('/', data)
        .then(response => {
            setDataList(response.data);
        });
    }

    return(
        <>
            <Container>
                <Row>
                    <Col >
                        <LoanForm 
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        />
                    </Col>
                </Row>
            </Container>
            <Container >
                <Row  >
                    <Col >
                        <DataTable  data={dataList}/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Home;