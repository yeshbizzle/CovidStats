import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FyleService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('https://corona.lmao.ninja/all');
}
getDataAll(): Observable<any> {
  return this.httpClient.get('https://corona.lmao.ninja/countries');
}
getDataAllBy(name): Observable<any> {
  return this.httpClient.get('https://corona.lmao.ninja/countries/'+name);
}
}
