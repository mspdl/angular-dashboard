import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly data = [
    ['January', 33],
    ['February', 68],
    ['March', 49],
    ['April', 15],
    ['May', 80],
    ['June', 27],
  ];

  getData(): Observable<any> {
    return new Observable((observable) => {
      observable.next(this.data);
      observable.complete();
    });
  }
}
