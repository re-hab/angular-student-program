import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProgramService {
  constructor(
    private http: HttpClient,
  ) {
  }


  getPrograms() {
    return this.http.get("assets/progs.json");
  }
}
