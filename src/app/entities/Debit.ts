import { randomUUID } from 'node:crypto';

interface DebitProps {
    user_id: string;
    description: string;
    value: number;
    category_id: string;
    dt_purchase: string;
    debit_type: string;
}

export class Debit {
    private _id: string;
    private props: DebitProps;

    constructor(props: DebitProps, id?: string) {
        this._id = id ?? randomUUID();
        this.props = props;
    }

    get id() {
        return this._id;
    }

    get user_id() {
        return this.props.user_id;
    }
    get description() {
        return this.props.description;
    }
    get value() {
        return this.props.value;
    }
    get category_id() {
        return this.props.category_id;
    }
    get dt_purchase() {
        return this.props.dt_purchase;
    }
    get debit_type() {
        return this.props.debit_type;
    }
}
