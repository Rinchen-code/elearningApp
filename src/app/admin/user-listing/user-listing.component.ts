import { Component, OnInit } from '@angular/core';
import {AdminService} from "../service/admin.service";

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
  userlist;
  approved;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.adminService.getUsers().subscribe( responseData => { debugger;
      this.userlist = responseData;
    })
  }

  acceptUser(user) { debugger;
    user.loginPermission = true;
    this.adminService.updateUser(user).subscribe( res => {
     alert('User approved Successfully.')
    });
  }

  declineUser(user) {
    user.loginPermission = false;
    this.adminService.updateUser(user).subscribe();
    alert('user declined Successfully.')
  }

}
