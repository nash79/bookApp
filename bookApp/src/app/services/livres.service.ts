import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivresService {
	private urlServer:string = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getLivres(){
  	return this.http.get(this.urlServer + '/books')
  }

  getAuteurs(){
  	return this.http.get(this.urlServer + '/authors')
  }
}
