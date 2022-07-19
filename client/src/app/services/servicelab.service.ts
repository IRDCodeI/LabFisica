import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Service } from '../models/service/service';

@Injectable({
  providedIn: 'root'
})
export class ServicelabService {

  service: Service;
  services: Service[] = [];

  readonly URL_API = 'http://localhost:3000/api/lab/service';

  constructor(private http: HttpClient) {
    this.service = new Service();
  }

  getServices() {
    return this.http.get(this.URL_API);
  }
}
