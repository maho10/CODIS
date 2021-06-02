import { Component, OnInit } from '@angular/core';
import {DnaService} from '../../../services/dna.service';
import {MenuController, Platform} from '@ionic/angular';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.page.html',
  styleUrls: ['./sample.page.scss'],
})
export class SamplePage implements OnInit {
  sampleForm: FormGroup;
  sampleString = '';
  samplePercentage ='';
  matchMade = false;

  validationMessages = {
    dnaTP0X: [
      {type: 'required', message: 'Es obligatorio ingresar la cadena de ADN'},
      {type: 'pattern', message: 'La cadena ingresada contiene caracteres inválidos'},
      {type: 'minLength', message: 'La cadena debe contener 26 bases'},
      {type: 'maxLength', message: 'La cadena debe contener 26 bases'}
    ],
    dnaFGA: [
      {type: 'required', message: 'Es obligatorio ingresar la cadena de ADN'},
      {type: 'pattern', message: 'La cadena ingresada contiene caracteres inválidos'},
      {type: 'minLength', message: 'La cadena debe contener 26 bases'},
      {type: 'maxLength', message: 'La cadena debe contener 26 bases'}
    ],
    dnaTH01: [
      {type: 'required', message: 'Es obligatorio ingresar la cadena de ADN'},
      {type: 'pattern', message: 'La cadena ingresada contiene caracteres inválidos'},
      {type: 'minLength', message: 'La cadena debe contener 26 bases'},
      {type: 'maxLength', message: 'La cadena debe contener 26 bases'}
    ],
    dnaVWA: [
      {type: 'required', message: 'Es obligatorio ingresar la cadena de ADN'},
      {type: 'pattern', message: 'La cadena ingresada contiene caracteres inválidos'},
      {type: 'minLength', message: 'La cadena debe contener 26 bases'},
      {type: 'maxLength', message: 'La cadena debe contener 26 bases'}
    ],
    dnaD13S317: [
      {type: 'required', message: 'Es obligatorio ingresar la cadena de ADN'},
      {type: 'pattern', message: 'La cadena ingresada contiene caracteres inválidos'},
      {type: 'minLength', message: 'La cadena debe contener 26 bases'},
      {type: 'maxLength', message: 'La cadena debe contener 26 bases'}
    ],
    dnaD21S11: [
      {type: 'required', message: 'Es obligatorio ingresar la cadena de ADN'},
      {type: 'pattern', message: 'La cadena ingresada contiene caracteres inválidos'},
      {type: 'minLength', message: 'La cadena debe contener 26 bases'},
      {type: 'maxLength', message: 'La cadena debe contener 26 bases'}
    ],
    dnaAMEL: [
      {type: 'required', message: 'Es obligatorio ingresar la cadena de ADN'},
      {type: 'pattern', message: 'La cadena ingresada contiene caracteres inválidos'},
      {type: 'minLength', message: 'La cadena debe contener 26 bases'},
      {type: 'maxLength', message: 'La cadena debe contener 26 bases'}
    ],
  };
  constructor(
    private dnaService: DnaService,
    private formBuilder: FormBuilder,
    private platform: Platform,
    private router: Router,
    private menuController: MenuController,
    private alertService: AlertsService
  ) { }

  ngOnInit() {
    this.sampleForm = this.formBuilder.group({
      dnaTP0X:['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg0]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaFGA:['',Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg0]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaTH01:['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg0]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaVWA:['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg0]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaD13S317:['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg0]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaD21S11: ['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg0]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaAMEL:['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )]
    });
  }

  getSample(){
    this.sampleString = this.sampleForm.controls.dnaTP0X.value.concat(
      // eslint-disable-next-line max-len
      this.sampleForm.controls.dnaFGA.value + this.sampleForm.controls.dnaTH01.value + this.sampleForm.controls.dnaVWA.value + this.sampleForm.controls.dnaD13S317.value + this.sampleForm.controls.dnaD21S11.value +this.sampleForm.controls.dnaAMEL.value
    );
    this.dnaService.getDna(this.sampleString).subscribe(res =>{
      this.matchMade = true;
      for (let a = 0; a<3; a++){
          this.samplePercentage += 'Coincidencia ' + (a+1).toString() + '\n'+
          'Nombre: ' + res[a].name + '\n'+
          'DPI: ' + res[a].dpi + '\n' +
          'Porcentaje de coincidencia:\n' + res[a].percentage.toString() + '\n\n';
      }
    });
  }

}
