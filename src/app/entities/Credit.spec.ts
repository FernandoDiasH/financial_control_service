import { Credit } from './Credit';

describe('Credit', () => {
    it('deveria pode criar uma instacia de Credit', () => {
        const credit = new Credit({
            user_id: 'usuario-teste',
            category_id: 'categoria-teste',
            description: 'compra tv',
            dt_due: new Date(2022, 10, 20),
            installment_value: 1111,
            credit_config_id: 'config_test',
        });

        expect(credit).toBeInstanceOf(Credit);
    });
});
