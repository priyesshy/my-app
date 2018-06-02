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
   serverCreated = false;
   servers = ['server 1', 'server 2'];
  constructor() {

    setTimeout( () => {
      this.allowNewServer = true }, 2000);
    
   }

  ngOnInit() {
  }

  onClick(){
    this.serverCreated= true;
    this.servers.push(this.serverName);
    this.onUserClick='server created name is ' + this.serverName ;
  }

  onUpdateServerName(event:Event){
    
    this.serverName=(<HTMLInputElement>event.target).value;
  }



}
