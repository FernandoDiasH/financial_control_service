import { parseISO } from 'date-fns';
import { Debit } from '../../src/app/entities/Debit';

type Override = Partial<Debit>;

export function makeDebit(override: Override = {}, id?: string) {
    return new Debit(
        {
            user_id: 'usuario-teste',
            category_id: 'categoria teste',
            description: 'compra teste',
            dt_purchase: parseISO('20-10-2020'),
            value: 1223,
            ...override,
        },
        'teste' ?? id
    );
}
