import { Table } from "react-bootstrap";

const DataTable =(props)=> {
    const {data} = props;

    const list = data.map((i, index)=>(
        <tr key={index}>
            <td>{i.month}</td>
            <td>{i.paymenth}</td>
            <td>{i.interest}</td>
            <td>{i.amortization}</td>
            <td>{i.capital}</td>
        </tr>
    ))

    return(
        <Table>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Paymenth</th>
                    <th>Interest</th>
                    <th>Amortization</th>
                    <th>Capital</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
        </Table>
    );
}

export default DataTable;