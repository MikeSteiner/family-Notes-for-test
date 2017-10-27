import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import {ApplicationService} from "../../services/application.service";

@Component({
  selector: 'app-application-datatable',
  templateUrl: './application-datatable.component.html',
  styleUrls: ['./application-datatable.component.css']
})
export class ApplicationDatatableComponent implements OnInit {

  public applications: any;

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
    this.applications = result;
    console.log(this.applications);

    alert('All applications get successfully');
  }
  private onError_getAllApplication(response: Response) {
    alert('Error getting all applications')
  }

}
