import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommunityExtension } from '../Interfaces/community-extension';
import { mainPort } from '../../app.component';
import { Profile } from '../Interfaces/profile';
import { Schedule } from '../admin/schedule';
import { Resume } from '../Interfaces/resume';
import { Evaluation } from '../Interfaces/evaluation';
import { Observable } from 'rxjs';
import { JwtToken } from '../jwt-token';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FacultyPostService {

  constructor(private http: HttpClient, private auth: AuthService) { }

    //Fetches cookie tokem
    getHeader(){
      return  new HttpHeaders().set("Authorization", "Bearer " + this.auth.getToken());
    }
  
    //All fetch commands for faculty
    addEduc(educForm: FormGroup){
      return this.http.post<JwtToken>(mainPort + '/GC-FaMS-API/API/addEduc', educForm.getRawValue() ,{headers:this.getHeader()});
    }
}
