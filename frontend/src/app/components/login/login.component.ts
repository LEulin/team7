import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2'
import { Admin } from './admin';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  admininfo: Admin
  username: string
  password: string

  constructor(private router : Router) { }

  ngOnInit() {
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
