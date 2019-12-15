import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.scss']
})
export class VolumesComponent implements OnInit {
  volumeForm: FormGroup;
  constructor() {
    this.volumeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      stack: new FormControl('', Validators.required),
      mount_point: new FormControl('', Validators.required),
    });
   }

  ngOnInit() {
  }

}
