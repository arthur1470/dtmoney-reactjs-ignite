import { useEffect, useState } from 'react'
import { api } from '../../services/api';
import { Container } from './styles'

export function TransactionsTable() {
    const [transactions, setTransactions] = useState([]);

    useEffect(()=> {
        api.get('transactions')            
            .then(response => setTransactions(response.data));        
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$2.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de SmartContract</td>
                        <td className="deposit">R$5.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.100</td>
                        <td>Casa</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}