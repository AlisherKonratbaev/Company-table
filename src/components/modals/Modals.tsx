import Button from "@mui/material/Button";
import InvoiceAddress from "./InvoiceAddress";
import Contacts from "./Contact";
import BankData from "./BankData";
import {useAppDispatch} from "../../hook";
import {setOpenInvoice} from "../../store/modalSlice";
import {useState} from "react";
import {IOrder} from "../../types";

export interface DataModalProps extends IOrder{
    homepage: string,
}
export interface IModalProps {
    resetAll:boolean,
    dataModal:DataModalProps,
    setDataModal:(data:DataModalProps) => void
}

const initialState: DataModalProps = {
    id:"",
    company: "",
    name: "",
    additional: "",
    street: "",
    postalCode: "",
    country: "",
    IBan: "",
    BIC: "",
    bankName: "",
    fax: "",
    email: "",
    birthday: "",
    homepage: "",
}
const Modals: React.FC = () => {
    const dispatch = useAppDispatch();
    const [resetAll, setResetAll] = useState(false);
    const [dataModal, setDataModal] = useState<DataModalProps>(initialState)
    const handleOpen = () => {
        dispatch(setOpenInvoice(true))
        setResetAll(false);
    }
    return (
        <>
            <div>
                <Button variant="contained" onClick={handleOpen}>
                    Add
                </Button>
            </div>
            <InvoiceAddress resetAll={resetAll} dataModal={dataModal} setDataModal={setDataModal} />
            <BankData resetAll={resetAll} dataModal={dataModal} setDataModal={setDataModal}/>
            <Contacts resetAll={resetAll} dataModal={dataModal} setDataModal={setDataModal} setResetAll={setResetAll} />
        </>
    )
}

export default Modals;