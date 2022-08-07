import { Form, Button } from "react-bootstrap";

const LoanForm =(props)=> {
    const {handleChange, handleSubmit} = props;

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group className='mb-3 text-center'>
                <Form.Label>Monto del prestamo</Form.Label>
                <Form.Control className='justify-content-center' type="number" onChange={e => handleChange("amount", e.target.value)} />
            </Form.Group>
            <Form.Group className='mb-3 text-center'>
                <Form.Label>Interes anual</Form.Label>
                <Form.Select onChange={e => handleChange("interest", e.target.value)}>
                    <option>Select the interest</option>
                    <option value='1'>1%</option>
                    <option value='2'>2%</option>
                    <option value='3'>3%</option>
                    <option value='4'>4%</option>
                    <option value='5'>5%</option>
                    <option value='6'>6%</option>
                    <option value='7'>7%</option>
                    <option value='8'>8%</option>
                    <option value='9'>9%</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className='mb-3 text-center'>
                <Form.Label>Plazo del prestamo</Form.Label>
                <Form.Select onChange={e => handleChange("term", e.target.value)} >
                    <option>Select the term</option>
                    <option value="5">5 años</option>
                    <option value="10">10 años</option>
                    <option value="15">15 años</option>
                    <option value="20">20 años</option>
                    <option value="25">25 años</option>
                    <option value="30">30 años</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="text-center">
                <Button   variant="primary" type="submit">Enviar</Button>
            </Form.Group>
        </Form> 
    );
}

export default LoanForm;