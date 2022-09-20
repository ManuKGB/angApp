import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InformationsService {
  private infoUrl='https://testsymfapp.herokuapp.com/api/informations';

  constructor(private http : HttpClient) { }
  getInformations(){
    return this.http.get(this.infoUrl);
  }
}
