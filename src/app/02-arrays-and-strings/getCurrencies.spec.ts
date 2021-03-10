import {getCurrencies} from './getCurrencies';
describe('s00189168 Anna Gwizdz',()=>{
    const currency = getCurrencies();
    it('it should contain the currency EUR',()=>{   
        expect(currency).toContain("EUR");
    });
    it('it should contain the currency USD',()=>{
        expect(currency).toContain("USD");
    });
    it('it should contain the currency GDP',()=>{
        expect(currency).toContain("GDP");
    });
    it('it should not contain the currency MXN',()=>{
        expect(currency).not.toContain("MXN");
    });
});
