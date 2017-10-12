import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WebservicesService {
  private authData:any;
  private serverUrl : any;
  constructor(public http:Http) { 
    this.serverUrl = 'https://simulationapi.ur-nl.com';
  }

//Call Authentication Token services
  getAuthTokenService(){
    let headers={
      "content-type": "application/x-www-form-urlencoded"
    };
    let data= {
      "grant_type": "password",
      "scope": "user",
      "client_id": "4874eafd0f7a240625e59b2b123a142a669923d5b0d31ae8743f6780a95187f5",
      "client_secret": "908f6aee4d4cb27782ba55ae0c814bf43419f3220d696206212a29fe3a05cd88",
      "auth_token": "azd4jXWWLagyb9KzgfDJ",
      'Access-Control-Allow-Headers': 'Content-Type'
    }
    
    return new Promise(resolve => {
      this.http.post(this.serverUrl+'/oauth/token.json',data,headers)
      .map(res => res.json())
      .subscribe(data => {
        this.authData = data;
        console.log(data);
        resolve(this.authData);
      });
    });
  }

  //Get user service
  getCurrentUserService(token){
    const headerDict = {
      'Content-Type': 'application/json',
      "Authorization": token
    }

    const headerObj = {                                                                                                                                                                                 
      headers: new Headers(headerDict)
    };
    return new Promise(resolve => {
      this.http.get(this.serverUrl+'/users/current.json',headerObj)
      .map(res => res.json())
      .subscribe(data => {
        this.authData = data;
        console.log(data);
        resolve(this.authData);
      });
    });
  }
  
  //Get question service
  getQuestionsService(token){
    const headerDict = {
      'Content-Type': 'application/json',
      "Authorization": token
    }

    const headerObj = {                                                                                                                                                                                 
      headers: new Headers(headerDict)
    };
    
    return new Promise(resolve => {
      this.http.get(this.serverUrl+'/case_study/companies/58cba141ba169e0eab2657c9/company_case_studies/595c859eba169ec47e4f20d4/user_company_case_studies/595ce021ba169edb9c733e90?include[company_case_study][include]=questions',headerObj)
      .map(res => res.json())
      .subscribe(data => {
        this.authData = data;
        console.log(data);
        resolve(this.authData);
      });
    });
  }


}
