import { randomUUID } from 'node:crypto';

export interface CategoryProps {
    user_id: string;
    description: string;
    type: TypeCategory
}

export type TypeCategory = 'Entrada' | 'Saida'

export class Category {
    private _id: number;
    private props: CategoryProps;

    constructor(props: CategoryProps, id?: number) {
        this._id = id ;

        if (typeof props.user_id == 'number') {
            throw new Error();
        }

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

    get type() {
        return this.props.type
    }
}


