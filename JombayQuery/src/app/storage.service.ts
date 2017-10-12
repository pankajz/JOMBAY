import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  tokenStore(data){
    if(data){
      sessionStorage.setItem("authToken",data.token_type+" "+data.access_token);
    }else{
      data = sessionStorage.getItem("authToken");
    }
    return data;
  }

}
