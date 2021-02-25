import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InicioSesionService {

  
  constructor(private http: HttpClient) { }

  postRequest(route: string, data?:any) {

    let config:any = {
      responseType: "json"
    }

    return this.http.post(route, data, config);

}
}