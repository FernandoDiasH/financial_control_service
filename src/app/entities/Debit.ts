import { randomUUID } from 'node:crypto';

interface DebitProps {
    user_id: string;
    description: string;
    value: number;
    category_id: number;
    dt_purchase: Date;
}

export class Debit {
    private _id: number;
    private props: DebitProps;

    constructor(props: DebitProps, id?: number) {
        this._id = id ;
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
}
