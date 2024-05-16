import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide1 = true;
  hide2 = true;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private formBuilder: FormBuilder,
    public authService: AuthService
  ) {}

  // Go back to the previous page
  goBack(): void {
    this.location.back();
  }

  // Define the first form group
  firstFormGroup = this.formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  // Define the second form group
  secondFormGroup = this.formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  // Define the third form group
  thirdFormGroup = this.formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  isLinear = false;

  ngOnInit() {
    // Initialization logic goes here
  }
}