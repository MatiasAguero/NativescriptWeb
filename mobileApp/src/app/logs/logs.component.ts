import { Component, OnInit } from '@angular/core';
import { Log } from '../model/log';
import { LogService } from '../services/log.service';
import { RouterExtensions } from "nativescript-angular/router";
import { action, ActionOptions } from 'tns-core-modules/ui/dialogs';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})

export class LogsComponent implements OnInit {
  logs: Log[];
  opciones: ActionOptions = {	  
		title: "Estado del final",
		message: "Como te fue en el final?",
		cancelButtonText: "Cancelar",
		actions: ["Pendiente", "Ausente", "Desaprobado", "Aprobado"],
		cancelable: true
	};
  
  	  
  constructor(private logService: LogService, private routerExtensions: RouterExtensions) { }

  ngOnInit() {
    this.getLogs();
  }

  getLogs() : void {
    this.logService.getUserLogs()
      .subscribe(
        logs => {this.logs = logs;});
  }
  
  getDetalles(log: Log, index: number): void {
    alert("voy a "+log.id);
  	this.routerExtensions.navigate(['/detalle-log/'+log.id], {
            transition: {
                name: "fade"
            }
    });
  }

  delete(log : Log, index : number) : void {
    this.logService.deleteLog(log.id).subscribe(message=> {this.logs.splice(index,1); });
  }

  modify(log : Log, index : number) : void{
    console.log("modifing"+index);
    
	action(this.opciones).then((result) => {
	    console.log(result);
		log.estado=result;		
    	this.logService.modifyLog(log).subscribe(modifiedLog=> {
        	this.logs[index] = modifiedLog;
    	});
    });    

  }

}
