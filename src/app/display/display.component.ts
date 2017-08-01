import { Component, OnInit, View, Inject } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { DataService } from './data-service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [ DataService ]
})

export class DisplayComponent {
  constructor(private service: DisplayComponent) {
    this.service = service;
  }
}

// import {DataService} from './data.service';

// @Component({
//   (...)
//   template: `
//     <ul>
//       <li *ngFor="d of dataToDisplay">{{d.name}}</li>
//     <ul>
//   `,
//   providers: [DataService]
// })
// export class DisplayComponent{
//   constructor(private service:DataService) {
//     this.service.getData().subscribe(data => {
//       this.dataToDisplay = data;
//     });
//   }
// }



// import {Component, Input, OnInit} from '@angular/core';

// @Component({
//   selector: 'child-component',
//   template: `Name:{{  }}`
// })

// export class ChildComponent implements OnInit {

//   @Input() name: string;

//   constructor() { }

//   ngOnInit() { }
// }





