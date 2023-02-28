import { randomUUID } from 'node:crypto';

export interface CategoryProps {
    user_id: string;
    description: string;
    type:TypeCategory
}

export type TypeCategory = 'Entrada' | 'Saida'

export class Category {
    private _id: string;
    private props: CategoryProps;

    constructor(props: CategoryProps, id?: string) {
        this._id = id ?? randomUUID();

        if (typeof props.user_id == 'number') {
            throw new Error();
        }

        this.props = props;
    }

    get id() {
        return this._id;
    }

    get _user_id() {
        return this.props.user_id;
    }

    get _descripiton() {
        return this.props.description;
    }

    get _type(){
        return this.props.type
    }
}


