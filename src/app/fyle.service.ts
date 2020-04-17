import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FyleService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<any> {
    return this.httpClient.get('https://corona.lmao.ninja/v2/all');
}
getDataAll(): Observable<any> {
  return this.httpClient.get('https://corona.lmao.ninja/v2/countries');
}
getDataAllBy(name): Observable<any> {
  return this.httpClient.get('https://corona.lmao.ninja/v2/countries/'+name);
}
getHist(name): Observable<any> {
  return this.httpClient.get('https://corona.lmao.ninja/v2/historical/'+name);
}
}
