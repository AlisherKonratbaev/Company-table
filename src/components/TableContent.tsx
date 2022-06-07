import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

import {useAppDispatch, useAppSelector} from "../hook";
import {removeOrder} from "../store/orderSlice";

const TableContent: React.FC = () => {
    const dispatch = useAppDispatch();
    const orders = useAppSelector(state => state.order.list);

    const handleDelete = (id:string) => {
        dispatch(removeOrder(id))
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}}>
                <TableHead sx={{backgroundColor:"#2196f3"}}>
                    <TableRow >
                        <TableCell></TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Additional</TableCell>
                        <TableCell>Street</TableCell>
                        <TableCell>Postal Code</TableCell>
                        <TableCell>Country</TableCell>
                        <TableCell>IBan</TableCell>
                        <TableCell>BIC</TableCell>
                        <TableCell>Bank name</TableCell>
                        <TableCell>Fax</TableCell>
                        <TableCell>E-mail</TableCell>
                        <TableCell>Birthday</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map(order => (
                        <TableRow key={order.id}>
                            <TableCell>
                                <IconButton onClick={() => handleDelete(order.id)} >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell>{order.company}</TableCell>
                            <TableCell>{order.name}</TableCell>
                            <TableCell>{order.additional}</TableCell>
                            <TableCell>{order.street}</TableCell>
                            <TableCell>{order.postalCode}</TableCell>
                            <TableCell>{order.country}</TableCell>
                            <TableCell>{order.IBan}</TableCell>
                            <TableCell>{order.BIC}</TableCell>
                            <TableCell>{order.bankName}</TableCell>
                            <TableCell>{order.fax}</TableCell>
                            <TableCell>{order.email}</TableCell>
                            <TableCell>{order.birthday}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default TableContent;