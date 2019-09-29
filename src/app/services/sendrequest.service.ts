import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';


@Injectable()
export class ConfigService {
private http: HttpClient

  constructor(private httpClient: HttpClient){}

    // Http Options
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      }
      url="192.168.1.30:8080/bill";

    getBill() {
      console.log("test")
      console.log(
      this.httpClient.get(this.url)
    )
    }
}
