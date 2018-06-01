import { Component } from '@angular/core'; //import decorator

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})   //decorator
export class ServerComponent {
    serverId=10;
    serverStatus='offline';

    getServerStatus(){
        return this.serverStatus;
    }

}