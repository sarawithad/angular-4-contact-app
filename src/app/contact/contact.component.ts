import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(
    // private route: ActivatedRoute,
    // private location: Location
  ) { }

  ngOnInit() {

  }

   onSubmit(form: any): void {  
    console.log('you submitted value:', form);  
  }

}
