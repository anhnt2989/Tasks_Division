// import {Component, OnInit} from '@angular/core';
// import {FormControl, FormGroup} from '@angular/forms';
// import {UserService} from '../../service/user.service';
// import {Router, Routes} from '@angular/router';
// import {Validators} from '@angular/forms';
// import {User} from '../../model/user';
//
// @Component({
//   selector: 'app-user-login',
//   templateUrl: './user-login.component.html',
//   styleUrls: ['./user-login.component.css']
// })
// export class UserLoginComponent implements OnInit {
//
//   user: User;
//   loginStatus: boolean;
//   loginAttempt: boolean;
//   loginUserForm = new FormGroup({
//     username: new FormControl('', [Validators.required, Validators.minLength(4)]),
//     name: new FormControl('', Validators.minLength(4)),
//     password: new FormControl('', [Validators.required, Validators.minLength(4)]),
//   });
//   userList: User[];
//
//   onSubmit(): void {
//     this.loginAttempt = true;
//     this.user = {
//       userName: this.loginUserForm.value.username,
//       password: this.loginUserForm.value.password,
//       status: false,
//       userId: this.loginUserForm.value.id,
//       userImg: ''
//     };
//     if (this.userService.login(this.user)) {
//       this.router.navigateByUrl('chat');
//       this.loginStatus = true;
//     } else {
//       this.loginStatus = false;
//     }
//
//   }
//
//   constructor(private userService: UserService, private router: Router) {
//   }
//
//   ngOnInit() {
//   }
// }
