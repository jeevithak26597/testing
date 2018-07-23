import {greet} from './greet';

describe('greet', () => {
    it('should include the name from greet function',()=>{
        expect(greet('jeevitha')).toContain('jeevitha');
    })
});