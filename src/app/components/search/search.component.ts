import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() manageFormChangeEv: EventEmitter<any> = new EventEmitter();
  form: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    // create the form
    this.form = this.formBuilder.group({
      city: new FormControl('')
    });

    // on form change we emit the change to the world
    this.form.valueChanges.subscribe(
      val => val.city && this.manageFormChangeEv.emit(val.city)
    );
  }
}
