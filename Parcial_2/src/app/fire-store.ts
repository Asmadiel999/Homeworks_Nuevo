import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FireStore <T extends {id?: string}>{
}
