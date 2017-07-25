import { Injectable } from '@angular/core';

@Injectable()
export class Member  {

    listname: string[] = [];
    constructor( ) {
        
    }
    insertMb(name: string) {
        this.listname.push(name);

    }
    deleteMb (position: number) {
        this.listname.splice(position, 1);
    }
}