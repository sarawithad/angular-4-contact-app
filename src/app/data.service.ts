import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { DisplayComponent } from 'display/display.component';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  constructor(http:Http) {
    this.http = http;
  }
}


  // getData:Array() {
  //   return this.http.get('data.json')
  //              .map(res => res.json());
  // }
}


// import { Injectable }    from '@angular/core';
// import { Headers, Http } from '@angular/http';

// import 'rxjs/add/operator/toPromise';

// import { ContactComponent } from 'contact/contact.component';
// import { AddressComponent } from 'address/address.component';
// import { DisplayComponent } from 'display/display.component';

// @Injectable()
// export class InfoService {

//     headers = new Headers({'Content-Type': 'application/json'});
//     displayUrl = 'api/displayinfo';  // URL to web api

//   constructor(private http: Http) { }

//   getContactInfo(): Promise<ContactComponent[]> {
//     return this.http.get(this.displayUrl)
//                .toPromise()
//                .then(response => response.json().data as ContactComponent[])
//                .catch(this.handleError);
//   }

// //   getHero(id: number): Promise<Hero> {
// //     const url = `${this.heroesUrl}/${id}`;
// //     return this.http.get(url)
// //       .toPromise()
// //       .then(response => response.json().data as Hero)
// //       .catch(this.handleError);
// //   }


//   create(name: string): Promise<ContactComponent> {
//     return this.http
//       .post(this.displayUrl, JSON.stringify({name: name}), {headers: this.headers})
//       .toPromise()
//       .then(res => res.json().data as ContactComponent)
//       .catch(this.handleError);
//   }


//   private handleError(error: any): Promise<any> {
//     console.error('An error occurred', error); // for demo purposes only
//     return Promise.reject(error.message || error);
//   }