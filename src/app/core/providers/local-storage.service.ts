import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  localStorage;
  constructor() {
    this.localStorage = window.localStorage;
  }

  set(key, value) {
    this.localStorage.setItem(key, value);
  }

  get(param) {
    return this.localStorage.getItem(param);
  }
}
