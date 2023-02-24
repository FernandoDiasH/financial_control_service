import { CreditConfig } from '../../src/app/entities/CreditConfig';

type Override = Partial<CreditConfig>;

export function makeCreditConfig(override: Override = {}, id?: string) {
    return new CreditConfig(
        {
            user_id: 'usuario-teste',
            day_due: 18,
            day_credit_closing: 11,
            description: 'configuracao de cartao de credito',
            limit_credit: 1600,
            ...override,
        },
        'teste' ?? id
    );
}
