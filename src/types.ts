

export interface IOrder {
    id: string,
    company: string,
    name: string,
    additional: string,
    street: string,
    postalCode: string,
    country: string,
    IBan: string,
    BIC: string,
    bankName: string,
    fax: string,
    email: string,
    birthday: string,
}

export type ModalStatus = {
    openBankData: boolean,
    openContact: boolean,
    openInvoice: boolean
}
