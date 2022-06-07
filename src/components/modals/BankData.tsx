import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import {useAppDispatch, useAppSelector} from "../../hook";
import {setOpenBankData, setOpenInvoice, setOpenContact} from "../../store/modalSlice";
import {useForm} from "react-hook-form";
import {useEffect} from "react";
import {IModalProps} from "./Modals";

type FormInputs = {
    IBan: string;
    BIC: string;
    bankName:string,
};

const BankData: React.FC<IModalProps> = (props) => {
    const {resetAll, dataModal, setDataModal} = props
    const openBankData = useAppSelector(state => state.modal.openBankData)
    const dispatch = useAppDispatch();
    const {register, handleSubmit, reset, formState: {errors, isValid},} = useForm<FormInputs>({mode:"all"});

    useEffect(() => {
        if(resetAll) {
            reset();
        }
    }, [resetAll])

    const handleClose = () => {
        dispatch(setOpenBankData(false));
    };
    const handleNextModal = (data:FormInputs) => {
        setDataModal({
            ...dataModal,
            ...data,
        })
        dispatch(setOpenBankData(false));
        dispatch(setOpenContact(true));
    }
    const handlePreviousModal = () => {
        dispatch(setOpenBankData(false));
        dispatch(setOpenInvoice(true));
    }

    return (
        <div>
            <Dialog open={openBankData} onClose={handleClose}>
                <DialogTitle>Bank Data</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(handleNextModal)} className="modal-form" >
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <label> IBan *
                                <input {...register("IBan", {required: "Please enter IBan."})}/>
                            </label>
                            <div className="error-message">{errors.IBan && <span>{errors.IBan.message || "Error!" }</span>}</div>
                            <label> BIC *
                                <input {...register("BIC", {required: "Please enter BIC."})}/>
                            </label>
                            <div className="error-message">{errors.BIC && <span>{errors.BIC.message || "Error!" }</span>}</div>
                            <label> Bank Name *
                                <input {...register("bankName", {required: "Please enter Bank Name."})}/>
                            </label>
                            <div className="error-message">{errors.bankName && <span>{errors.bankName.message || "Error!" }</span>}</div>
                            <div className="modal-action_wrap">
                                <Button onClick={handlePreviousModal} variant="contained" style={{marginRight:"30px"}}>Previous</Button>
                                <Button onClick={handleClose} variant="contained" style={{marginRight:"30px"}}>Cancel</Button>
                                <Button type="submit" variant="contained" disabled={!isValid}>Next</Button>
                            </div>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default BankData;