import { Component, OnInit } from '@angular/core';
import { WebservicesService } from './../webservices.service';
import { StorageService } from './../storage.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
 authResp:any;
  usrResp:any;
  queResp:any;
  queArr:any;
  nextKey:any;
  prevKey:any;
  current:any;
  curId:any;
  curQue:any;
  curAns:any;
  count:any;
  que:any;
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); 
    return Promise.reject(error.message || error);
  }
  constructor(public webservicesService:WebservicesService, public storageService:StorageService) { 
    this.count = 0;
    this.queArr = [];
    this.nextKey = false;
    this.prevKey = false;
    this.getAuthToken();

  }

  ngOnInit() {
    //this.getCaseStudy();
  }
//Get auth token
  getAuthToken(){
    this.webservicesService.getAuthTokenService()
    .then(data=>{
      this.authResp = data;
      this.storageService.tokenStore(this.authResp);
      this.getCaseStudy();
      this.getCurrentUser();
    })
    .catch(this.handleError)
  }

  //Get Current User
  getCurrentUser(){
    let tokenStore = this.storageService.tokenStore('');
    
    let token=tokenStore;
    //console.log(token);
    this.webservicesService.getCurrentUserService(token)
    .then(data=>{
      this.usrResp = data;
    })
    .catch(this.handleError)
  }

   //Get Case Study
  getCaseStudy(){
    let tokenStore = this.storageService.tokenStore('');
    
    let token=tokenStore;
    this.webservicesService.getQuestionsService(token)
    .then(data=>{
      this.queResp = data;
      this.que = this.queResp.user_company_case_study.company_case_study.questions;
      for(var i=0; i<this.que.length; i++){
        let splQue = this.que[i].body.split('">').pop().split('?').shift()+"?";
        this.queArr.push({'id':i,'question':splQue,'answer':""});
      }
      this.currentQus(0)
      console.log(this.queArr);
    })
    .catch(this.handleError)
  }

  currentQus(ind){
    if(ind<this.que.length-1){
      this.nextKey = true;
    }else{
      this.nextKey = false;
    }
    if(ind==0){
      this.prevKey = false;
    }else{
      this.prevKey = true;
    }
    this.current = this.queArr[ind];
    this.curId = this.current.id+1;
    this.curQue = this.current.question;
  }
  prevQue(){
    this.count--;
    //console.log(this.count);
    this.currentQus(this.count);
  }

  nextQue(){
    //console.log(this.count);
    this.count++;
    this.currentQus(this.count);
  }

}
