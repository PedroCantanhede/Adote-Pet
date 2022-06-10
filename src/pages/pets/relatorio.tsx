import { NextPage } from "next";
import Title from "../../ui/components/Title/Title";
import {
    Paper,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody
} from '@mui/material';
import { useRelatorio } from "../../data/hooks/pages/pets/useRelatorio";

const Relatorio: NextPage = () => {
    const { listReport } = useRelatorio();

    return (
        <>
            <Title 
                title={'Relatório de Adoção'}
                subtitle={'Veja a lista de pets adotados'}
            />
            <TableContainer
                component={Paper}
                sx={{maxWidth: 830, mx: 'auto', padding: {xs: 3, md: 5}}}
            >   
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell align={'right'}>Valor Mensal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listReport.map((report) => (
                            <TableRow key={report.id}>
                                <TableCell>{report.pet.name}</TableCell>
                                <TableCell>{report.email}</TableCell>
                                <TableCell align={'right'}>{report.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Relatorio;