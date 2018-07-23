// describe() //suite
// it() //spec
import {compute} from './compute';
describe('compute',()=>{
    it('it should return 0 if the number is negative',()=>{
        const result = compute(-1);
        expect(result).toBe(0);

    })
    it('it should return num+1 if the number is positive',()=>{
        const result = compute(1);
        expect(result).toBe(2);

    })
});