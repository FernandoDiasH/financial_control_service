import { randomUUID } from 'crypto';
import { describe, expect, it } from 'vitest';
import { CreditConfig } from './CreditConfig';

describe('Credit Config', () => {
    it('deveria poder criar um instacia de CreditConfig', () => {
        expect(
            () =>
                new CreditConfig({
                    user_id: randomUUID(),
                    description: 'Configuracao do cartao',
                    limit_credit: 2000,
                    day_due: 18,
                    day_credit_closing: 11,
                })
        ).toBeTruthy();
    });
});
