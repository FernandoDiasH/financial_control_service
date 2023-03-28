import { parseISO } from 'date-fns';
import { Credit } from '../../src/app/entities/Credit';

type Override = Partial<Credit>;

export function makeCredit(override: Override = {}, id?: string) {
    return new Credit(
        {
            user_id: 'usuario-teste',
            description: 'categoria teste',
            category_id: 'teste',
            credit_config_id: 'teste',
            dt_due: parseISO('2022-10-10'),
            installment_value: 150,
            ...override,
        },
        id ?? 'teste'
    );
}
