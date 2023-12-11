

export class Review {
    public id: string;
    public author: string;
    public gameId: string; // Assuming you have imported the Game class
    public comment: string;
    public like: number;
    public rating: number;
  
    constructor() {
      this.id = '';
      this.author = '';
      this.gameId = '';
      this.comment = '';
      this.like = 0;
      this.rating = 0;
    }
  }
  