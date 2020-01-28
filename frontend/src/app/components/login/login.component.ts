import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { Admin } from './admin';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,  Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  admininfo: Admin
  username: string
  password: string

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.admininfo = new Admin();
    this.new(new Admin())
  }

  new(val) {
    this.myForm = this.fb.group({
      username: [val.studentName, Validators.required],
      password: [val.studentName, Validators.required]
    })
  }


  validate(value, validation) {
    var valid: number = 0;
    if (this.myForm.get(value).touched) {
      validation.forEach(error => {
        if (this.myForm.get(value).hasError(error)) {
          valid++;
        }
      });
    }
    return valid > 0;
  }

  login() {
    this.admininfo = {
      username: this.username,
      password: this.password
    }
    let timerInterval
    swal.fire({
      position: 'center',
      title: 'Loading...',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      onBeforeOpen: () => {
        swal.showLoading()
        timerInterval = setInterval(() => {
          const content = swal.getContent()
          if (content) {
            const b = content.querySelector('b')
          }
        }, 100)
      },
      onClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === swal.DismissReason.timer) {
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'You successfully login!',
          showConfirmButton: false,
          timer: 1500
        })
        this.router.navigate(['/dashboard'])
      }
      console.log(this.username, btoa(this.password))
    })
  }
}
