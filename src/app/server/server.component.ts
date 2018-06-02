import { Component } from '@angular/core'; //import decorator

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})   //decorator
export class ServerComponent {
    serverId=10;
    serverStatus='offline';

    constructor(){
        this.serverStatus= Math.random() > 0.5 ? 'offline' : 'online';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus=== 'online' ? 'green' : 'red';
    }

}