import { Component, OnInit } from '@angular/core';
import {DnaService} from '../../../services/dna.service';
import {Dna} from '../../../models/dna';
import {MenuController, Platform} from '@ionic/angular';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertsService } from 'src/app/services/alerts.service';

@Component({
  selector: 'app-dna',
  templateUrl: './dna.page.html',
  styleUrls: ['./dna.page.scss'],
})
export class DnaPage implements OnInit {
  dna: Dna;
  dnaForm: FormGroup;
  dnaString = '';

  validationMessages = {
    name: [
      {type: 'required', message: 'Es obligatorio ingresar el nombre'},
      {type:'pattern', message: 'El nombre que ingresó contiene caracteres invélidos'}
    ],
    dpi:[
      {type: 'required', message: 'Es obligatorio ingresar el número de identificación'},
      {type: 'pattern', message: 'El número de identificación ingresado no es válido'},
      {type: 'minLength', message: 'El número de identificación debe tener 13 caracteres'},
      {type: 'maxLength', message: 'El número de identificación debe tener 13 caracteres'}
    ],
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
    this.dnaForm = this.formBuilder.group({
      name:['', Validators.compose(
        [Validators.required, Validators.pattern('^[A-Za-zñÑáéíóúÁÉÍÓÚ_ ]+$')]
      )],
      dpi:[null,Validators.compose(
        [Validators.required, Validators.pattern('^[0-9]+$'), Validators.minLength(13), Validators.maxLength(13)]
      )],
      dnaTP0X:['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaFGA:['',Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaTH01:['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaVWA:['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaD13S317:['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg]+$'), Validators.minLength(26), Validators.maxLength(26)]
        )],
      dnaD21S11: ['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )],
      dnaAMEL:['', Validators.compose(
        [Validators.required, Validators.pattern('^[AGTCactg]+$'), Validators.minLength(26), Validators.maxLength(26)]
      )]
    });
  }

  addDna(){
    this.dnaString = this.dnaForm.controls.dnaTP0X.value.concat(
      // eslint-disable-next-line max-len
      this.dnaForm.controls.dnaFGA.value + this.dnaForm.controls.dnaTH01.value + this.dnaForm.controls.dnaVWA.value + this.dnaForm.controls.dnaD13S317.value + this.dnaForm.controls.dnaD21S11.value +this.dnaForm.controls.dnaAMEL.value
    );
    console.log(
      this.dnaString
    );
    this.dna = new Dna(this.dnaForm.controls.name.value, this.dnaForm.controls.dpi.value.toString(), this.dnaString);
    console.log(this.dna);
    this.dnaService.addDna(this.dna).subscribe(
      dnaa =>{
        this.alertService.showAlert('Perfil agregado', 'El perfil de ADN fue agregado correctamente',
          'Cambios guardados', ['Entendido']);
      },
      error => {
        this.alertService.showAlert('Algo salió mal', 'No se han podido guardar los cambios',
          'No se ha podido agregar el perfil', ['Entendido']);
      },
      () => {
        this.router.navigate(['/home']);
      }
    );
  }

}
