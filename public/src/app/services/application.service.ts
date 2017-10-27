import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//import {} from '../mocks/applicationMocks.js'

@Injectable()
export class ApplicationService {

  constructor(
    private http: Http
  ) {
  }

  getAllApplication(): Observable<Response> {
    return this.http.get('../mocks/applicationMocks.js').map((res: Response) => res.json());
  }

}
