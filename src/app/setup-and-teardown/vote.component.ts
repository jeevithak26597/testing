export class VoteComponent{
    totalVotes = 2;
    upVote(){
        this.totalVotes++;
    }
    downVote(){
        this.totalVotes--;
    }
}