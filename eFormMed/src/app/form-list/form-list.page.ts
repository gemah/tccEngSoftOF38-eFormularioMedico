import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Constants } from '../model/constants';
import { Patient } from '../model/pacient';

@Component({
  selector: 'app-form-list',
  templateUrl: './form-list.page.html',
  styleUrls: ['./form-list.page.scss'],
})
export class FormListPage implements OnInit {

  public formList = Constants.inputformList;
  
  private patientData: Patient;

  constructor(private router: Router) { }

  ngOnInit() {
    this.patientData = this.router.getCurrentNavigation().extras.state.patient;
    if(this.patientData === undefined || this.patientData === null){
      console.log('ERROR: Patient Data is not present!');
    }
    else{
      console.log('Patient Data recorded with success.');
    }
  }

  goTo(path: string){
    const navExtra: NavigationExtras = { state: { patient: this.patientData }}
    this.router.navigate([path], navExtra);
  }

}
