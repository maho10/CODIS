import { Injectable } from '@angular/core';
import {Dna} from '../models/dna';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GLOBAL} from './global';

@Injectable({
  providedIn: 'root'
})
export class DnaService {

  url: string;
  thyHeaders;

  constructor(private http: HttpClient) {
    this.url = GLOBAL.URL ;
    this.thyHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  }

  getDna(sample: string): Observable<any> {
    return this.http.get(`${this.url}dna/${sample}`, {headers: this.thyHeaders});
  }

  addDna(dnaa: Dna): Observable<any> {
    const params = JSON.stringify(dnaa);
    return this.http.post(this.url+'dna', params, {headers: this.thyHeaders});
  }
}
