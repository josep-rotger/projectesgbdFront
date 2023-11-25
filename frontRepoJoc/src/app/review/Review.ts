

export class Review {
    public id: string;
    public author: string;
    public gameId: number; // Assuming you have imported the Game class
    public comment: string;
    public like: number;
    public rating: number;
  
    constructor() {
      this.id = '';
      this.author = '';
      this.gameId = -1;
      this.comment = '';
      this.like = 0;
      this.rating = 0;
    }
  
    // // Getters
    // getId(): number {
    //   return this.id;
    // }
  
    // getAuthor(): string {
    //   return this.author;
    // }
  
    // getGame(): number {
    //   return this.game_id;
    // }
  
    // getComment(): string {
    //   return this.comment;
    // }
  
    // getLike(): number {
    //   return this.like;
    // }
  
    // getRating(): number {
    //   return this.rating;
    // }
  
    // // Setters
    // setId(id: number) {
    //   this.id = id;
    // }
  
    // setAuthor(author: string) {
    //   this.author = author;
    // }
  
    // setGame(game_id: number) {
    //   this.game_id = game_id;
    // }
  
    // setComment(comment: string) {
    //   this.comment = comment;
    // }
  
    // setLike(like: number) {
    //   this.like = like;
    // }
  
    // setRating(rating: number) {
    //   this.rating = rating;
    // }
  }
  