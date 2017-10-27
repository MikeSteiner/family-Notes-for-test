import {Component, OnInit} from '@angular/core';
import {Response} from '@angular/http';

import {ApplicationService} from "../../services/application.service";
import {Application} from "../../entities/application/application.model";
import {LazyLoadEvent} from "primeng/components/common/lazyloadevent";

@Component({
  selector: 'app-application-datatable',
  templateUrl: './application-datatable.component.html',
  styleUrls: ['./application-datatable.component.css']
})
export class ApplicationDatatableComponent implements OnInit {
  public datasource: Array<Application>;
  public applications: Array<Application>;

  public totalItems: number = 5;
  public itemsPerPage: number = 2;
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
    this.datasource = data;

    this.totalItems = this.datasource.length;
    this.applications = this.datasource.slice(0, this.itemsPerPage);

    console.log(this.applications);
    alert('All applications get successfully');
  }
  private onError_getAllApplication(response: Response) {
    alert('Error getting all applications')
  }

  reset() {
    this.first = 0;
  }

  onPageSelect(ev) {
    alert('First: ' + ev.first);
  }

  loadData(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network
    setTimeout(() => {
      if(this.datasource) {
        this.applications = this.datasource.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

}
