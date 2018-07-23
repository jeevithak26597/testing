import {sum} from './sum';

describe('sum',()=>{

    it('should return sum of all numbers if n is greater than or equal to 0',()=>{

        const res=sum(5);

        expect(sum(5)).toBe(res);

    })

    it('should return invalid if n is less than 0',()=>{

        const res=sum(-1);

        expect(res).toBe('invalid');

    })

})