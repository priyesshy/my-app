import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl:'./servers.component.html' ,
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  
   allowNewServer = false;
   onUserClick = 'server not created';
   serverName = '';
  constructor() {

    setTimeout( () => {
      this.allowNewServer = true }, 2000);
    
   }

  ngOnInit() {
  }

  onClick(){
    this.onUserClick='server created';
  }

  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }



}
