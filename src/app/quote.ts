export class Quote {
    text:string;
    author:string;
    poster:string;
    timePassed:Date;
    upVote:number;
    downVote:number;
    showDescription:boolean;

    constructor( text:any,  author:any, poster:any, timePassed:any, upVote:any, downVote:any){
         this.text=text;
         this.author=author;
         this.poster=poster;
         this.timePassed=timePassed;
         this.upVote=upVote;
         this.downVote=downVote;
 
         this.showDescription=false;
    }
    setUpVote(addition:number){
        this.upVote+=1;
    }
    setDownVote(addition:number){
        this.downVote+=1;
    }
}
