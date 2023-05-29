import { randomUUID } from 'crypto';
interface CreditProps {
    user_id: string;
    category_id: number;
    description: string;
    installment_value: number;
    dt_due: Date;
    credit_status?: Date | null;
    credit_config_id: number;
}

export class Credit {
    private _id: number;
    private props: CreditProps;

    constructor(props: CreditProps, id?: number) {
        this._id = id;
        this.props = {
            ...props,
            credit_status: null ?? props.credit_status,
        };
    }

    get id() {
        return this._id;
    }

    get user_id() {
        return this.props.user_id;
    }

    get category_id() {
        return this.props.category_id;
    }

    get description() {
        return this.props.description;
    }

    get installment_value() {
        return this.props.installment_value;
    }

    get dt_due() {
        return this.props.dt_due;
    }

    get credit_status() {
        return this.props.credit_status;
    }

    get credit_config_id() {
        return this.props.credit_config_id;
    }

    pay() {
        this.props.credit_status = new Date();
    }
}
