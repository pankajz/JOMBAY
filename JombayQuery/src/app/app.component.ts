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
  
  constructor(public webservicesService:WebservicesService, public storageService:StorageService) { 
  
  }
  
}


