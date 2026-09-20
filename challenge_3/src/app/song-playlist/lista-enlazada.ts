export interface Song{
    id: number;
    title: string;
}

export class SongNode{
    song: Song;
    next: SongNode | null = null; 

    constructor(song: Song){
        this.song = song;
    }
}

export class PlayList{
    head: SongNode | null = null;
    tail: SongNode | null = null; 
    currentSong: SongNode | null = null; 

    append(song: Song): void{
        const newNode = new SongNode(song);

        if (!this.head){
            this.head = newNode;
            this.currentSong = newNode;  
        }else{
            if (this.tail){
                this.tail.next = newNode;
            }
             
        }

        this.tail = newNode; 
    }


    nextSong(): Song | null{
        if (this.currentSong && this.currentSong.next){
            this.currentSong = this.currentSong.next;
            return this.currentSong.song; 
        }

        return null; 
    }
}

