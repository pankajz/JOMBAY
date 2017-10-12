import { Component } from '@angular/core';
import { WebservicesService } from './webservices.service';
import { StorageService } from './storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Jombays';
  // authResp:any;
  // usrResp:any;
  // queResp:any;
  // queArr:any;
  // nextKey:any;
  // prevKey:any[]=[];
  
  // private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); 
  //   return Promise.reject(error.message || error);
  // }
  constructor(public webservicesService:WebservicesService, public storageService:StorageService) { 
    // this.queArr = [];
    // this.getAuthToken();
    //this.getCaseStudy('');
  }
  //Get auth token
  // getAuthToken(){
  //   this.webservicesService.getAuthTokenService()
  //   .then(data=>{
  //     this.authResp = data;
  //     this.storageService.tokenStore(this.authResp);
  //     this.getCaseStudy();
  //     this.getCurrentUser();
  //   })
  //   .catch(this.handleError)
  // }

  // //Get Current User
  // getCurrentUser(){
  //   let tokenStore = this.storageService.tokenStore('');
    
  //   let token=tokenStore;
  //   //console.log(token);
  //   this.webservicesService.getCurrentUserService(token)
  //   .then(data=>{
  //     this.usrResp = data;
  //   })
  //   .catch(this.handleError)
  // }

  //  //Get Case Study
  // getCaseStudy(){
  //   let tokenStore = this.storageService.tokenStore('');
    
  //   let token=tokenStore;
  //   this.webservicesService.getQuestionsService(token)
  //   .then(data=>{
  //     this.queResp = data;
  //     let que = this.queResp.user_company_case_study.company_case_study.questions;
  //     for(var i=0; i<que.length; i++){
  //       this.queArr.push({'id':i,'question':que[i].body,'answer':""});
  //     }
  //     console.log(this.queArr);
  //   })
  //   .catch(this.handleError)
  // }
}


