import { VoteComponent } from "./vote.component";

describe('VoteComponent', () => {
    let component: VoteComponent;
    
    beforeEach(()=>{
        component = new VoteComponent();    
    });
    afterEach(()=>{
        component = new VoteComponent();        
    })
        it('should increment if upvoted',() => {
            component.upVote();
            expect(component.totalVotes).toBe(3);
        });
        it('should decrement if downvoted',() => {
            component.downVote();
            expect(component.totalVotes).toBe(1);
        });
    });