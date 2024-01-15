import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {

  message: string = '';

  constructor() { }

  add(message: string) {

    this.message = message;

    setTimeout(() => {
      this.clear();
    }, 4000); // limpa em 4s
  }

  clear() {
    this.message = '';
  }
}
