import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {useAppDispatch, useAppSelector} from "../../hook";
import {setOpenInvoice, setOpenBankData} from "../../store/modalSlice";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {DataModalProps, IModalProps} from "./Modals";

type FormInputs = {
    company: string,
    name: string,
    additional:string,
    street:string,
    postalCode: string,
    country: string,
};

const InvoiceAddress: React.FC<IModalProps> = (props) => {
    const {resetAll, dataModal, setDataModal} = props
    const openInvoice = useAppSelector(state => state.modal.openInvoice)
    const dispatch = useAppDispatch();
    const {register, handleSubmit, reset, formState: {errors, isValid},} = useForm<FormInputs>({mode:"onBlur"});

    useEffect(() => {
        if(resetAll) {
            reset();
        }
    }, [resetAll])

    const handleClose = () => {
        dispatch(setOpenInvoice(false));
    };

    const handleNextModal = (data: FormInputs) => {
        setDataModal({
            ...dataModal,
            ...data
        })
        dispatch(setOpenInvoice(false));
        dispatch(setOpenBankData(true));
    }

    return (
        <div>
            <Dialog open={openInvoice} onClose={handleClose} >
                <DialogTitle> Invoice Address</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(handleNextModal)} className="modal-form" >
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <label> Company *
                                <input {...register("company", {required: "Please enter your Company."})}/>
                            </label>
                            <div className="error-message">{errors.company && <span>{errors.company.message || "Error!" }</span>}</div>
                            <label> Name *
                                <input {...register("name", {required: "Please enter Name."})}/>
                            </label>
                            <div className="error-message">{errors.name && <span>{errors.name.message || "Error!" }</span>}</div>
                            <label> Additional
                                <input {...register("additional")}/>
                            </label>
                            <label> Street
                                <input {...register("street")}/>
                            </label>
                            <label> Postal Code
                                <input {...register("postalCode")}/>
                            </label>
                            <label> Country
                                <input {...register("country")}/>
                            </label>
                            <div className="modal-action_wrap">
                                <Button onClick={handleClose} variant="contained" style={{marginRight:"30px"}}>Cancel</Button>
                                <Button type="submit" variant="contained" disabled={!isValid}>Next</Button>
                            </div>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
export default InvoiceAddress