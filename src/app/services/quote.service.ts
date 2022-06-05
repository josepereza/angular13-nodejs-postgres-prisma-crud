import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistroAuthor,Author,Quote } from '../interfaces/registro';
@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(
    private http:HttpClient
  ) { }

  getAuthorAll(){
    return this.http.get<RegistroAuthor>('http://localhost:3000/authores')
  }
}
