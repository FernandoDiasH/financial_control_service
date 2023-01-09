import { Debit } from '../../src/app/entities/Debit';

type Override = Partial<Debit>;

export function makeDebit(override: Override = {}, id?: string) {
    return new Debit(
        {
            user_id: 'usuario-teste',
            category_id: 'categoria teste',
            debit_type: 'saida',
            description: 'compra teste',
            dt_purchase: '2022-22-10',
            value: 1223,
            ...override,
        },
        'teste' ?? id
    );
}
