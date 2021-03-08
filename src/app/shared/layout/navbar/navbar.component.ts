import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  showMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    $('#side-nav').css('width', '250px');
  }

  closeNav(){
    $('#side-nav').css('width', '0px');
  }


}
