import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class MyErrorHandler extends ErrorHandler {
  constructor(private http: HttpClient) {
    super();
  }

  production = false;

  override handleError(error: any) {
    if (this.production) {
      this.http.post('/api/log', error).subscribe(() => {});
    } else {
      console.log('handleError');
      super.handleError(error);
    }
  }
}
