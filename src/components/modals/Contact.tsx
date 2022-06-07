import {useAppDispatch, useAppSelector} from "../../hook";
import {setOpenBankData, setOpenContact, setOpenInvoice} from "../../store/modalSlice";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";

import {useForm} from "react-hook-form";

import {IModalProps} from "./Modals";
import {addOrder} from "../../store/orderSlice";

interface IContactsProps extends IModalProps {
    setResetAll: (flag: boolean) => void
}

type FormInputs = {
    fax: string;
    email: string;
    birthday: string,
    homepage: string,
};

const Contacts: React.FC<IContactsProps> = (props) => {
    const {resetAll, dataModal, setDataModal, setResetAll} = props
    const openContact = useAppSelector(state => state.modal.openContact)
    const dispatch = useAppDispatch();

    const {register, handleSubmit, reset, formState: {errors, isValid},} = useForm<FormInputs>({mode: "onBlur"});

    const handleClose = () => {
        dispatch(setOpenContact(false));
    };
    const handleSave = async (data: FormInputs) => {
        await setDataModal({
            ...dataModal,
            ...data
        })
        await dispatch(addOrder({
            ...dataModal,
            ...data,
            id: String(Date.now()),
        }))
        reset();
        handleClose();
        setResetAll(true);
    }

    const handlePreviousModal = () => {
        dispatch(setOpenContact(false));
        dispatch(setOpenBankData(true));
    }

    return (
        <div>
            <Dialog open={openContact} onClose={handleClose}>
                <DialogTitle>Contacts</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(handleSave)} className="modal-form">
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <label> Fax
                                <input {...register("fax")}/>
                            </label>
                            <label> E-mail
                                <input {...register("email", {
                                    pattern: {
                                        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                        message: "Please enter correct Email"
                                    }
                                })}/>
                            </label>
                            <div className="error-message">{errors.email &&
                                <span>{errors.email.message || "Error!"}</span>}</div>
                            <label> Birthday
                                <input type='date' {...register("birthday")}/>
                            </label>
                            <label> Homepage
                                <input {...register("homepage")}/>
                            </label>

                            <div className="modal-action_wrap">
                                <Button onClick={handlePreviousModal} variant="contained"
                                        style={{marginRight: "30px"}}>Previous</Button>
                                <Button onClick={handleClose} variant="contained"
                                        style={{marginRight: "30px"}}>Cancel</Button>
                                <Button type="submit" variant="contained" disabled={!isValid}>Save</Button>
                            </div>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    )
}
export default Contacts