import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';

// import {DataTableModule, SharedModule} from 'primeng/primeng';

import {ApplicationService} from "../../services/application.service";
import {Application} from "../../entities/application/application.model";

@Component({
  selector: 'app-application-datatable',
  templateUrl: './application-datatable.component.html',
  styleUrls: ['./application-datatable.component.css']
})
export class ApplicationDatatableComponent implements OnInit {

  public applications: Array<Application>;
  public first: number = 0;

  constructor(
    private applicationService: ApplicationService
  ) {
  }

  ngOnInit() {
    this.applicationService.getAllApplication().subscribe(
      (res: Response) => this.onSuccess_getAllApplication(res),
      (res: Response) => this.onError_getAllApplication(res),
      () => {}
    );
  }

  private onSuccess_getAllApplication(result: Response) {
    const data: any = result;
    this.applications = data;

    console.log(this.applications);

    alert('All applications get successfully');
  }
  private onError_getAllApplication(response: Response) {
    alert('Error getting all applications')
  }

  reset() {
    this.first = 0;
  }

}
