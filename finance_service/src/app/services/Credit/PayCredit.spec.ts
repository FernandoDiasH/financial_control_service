// describe('Pay credit', () => {
//     it('Deveria alerar o status do credito', async () => {
//         const creditRepository = new InMemoryCreditRepository();
//         const categoryRepository = new InMemoryCategoryRepository();
//         const creditConfigRepository = new InMemoryCreditConfigRepository();

//         creditConfigRepository.create(makeCreditConfig());
//         categoryRepository.create(makeCategory());
//         creditRepository.save(
//             makeCredit({ dt_due: parseISO('2022-10-06') }, 'teste1')
//         );
//         creditRepository.save(
//             makeCredit({ dt_due: parseISO('2022-11-10') }, 'teste2')
//         );
//         creditRepository.save(
//             makeCredit({ dt_due: parseISO('2022-12-12') }, 'teste3')
//         );
//         creditRepository.save(
//             makeCredit({ dt_due: parseISO('2023-01-12') }, 'teste4')
//         );
//         creditRepository.save(
//             makeCredit({ dt_due: parseISO('2023-01-12') }, 'teste5')
//         );

//         const payCredit = new PayCredit(creditRepository);
//         await payCredit.execute('teste1');

//         expect(creditRepository.credits[0].credit_status).toContain(Date);
//     });
// });
