import { Game } from "../Game/Game";

export class Review {
    public id: number;
    public author: string;
    public game: Game; // Assuming you have imported the Game class
    public comment: string;
    public like: number;
    public rating: number;
  
    constructor() {
      this.id = -1;
      this.author = '';
      this.game = new Game();
      this.comment = '';
      this.like = 0;
      this.rating = 0;
    }
  
    // Getters
    getId(): number {
      return this.id;
    }
  
    getAuthor(): string {
      return this.author;
    }
  
    getGame(): Game {
      return this.game;
    }
  
    getComment(): string {
      return this.comment;
    }
  
    getLike(): number {
      return this.like;
    }
  
    getRating(): number {
      return this.rating;
    }
  
    // Setters
    setId(id: number) {
      this.id = id;
    }
  
    setAuthor(author: string) {
      this.author = author;
    }
  
    setGame(game: Game) {
      this.game = game;
    }
  
    setComment(comment: string) {
      this.comment = comment;
    }
  
    setLike(like: number) {
      this.like = like;
    }
  
    setRating(rating: number) {
      this.rating = rating;
    }
  }
  