
export class Player {
    // name: string;
    // constructor(playerName: string) {
    //     this.name = playerName;
    // }
    constructor(private name: string) {

    }


    get playerName(): string {
        return this.name;
    }
}