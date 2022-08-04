import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, NavController } from '@ionic/angular';
import { Roles } from 'src/app/models/Enum/Role';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  loggedInUserName:string;
  loggedInUserRole:number;

  @ViewChild('nav') nav: NavController;
  
  constructor(private loginService: AccountService,private menuCtrl:MenuController,private route:Router) { }

  ngOnInit() {
    this.loggedInUserName = this.loginService.GetLoggedInUserName();
    this.loggedInUserRole = this.loginService.GetLoggedInUserRoleId();
    this.loginService.GetLoginEventEmitter().subscribe(item=> {
      this.loggedInUserName = item.firstname+" "+item.lastname;
      this.loggedInUserRole = item.userRoleId;
    });
    if(this.loginService.GetUserObject().userRoleId == Roles.Customer)
    {
      
    }
  }

  onClick(page:any)
  {
    this.nav.navigateForward(page);
    this.menuCtrl.close();
  }

}
