import { Component, OnInit } from '@angular/core';
import { faCog,faHome, faChartBar, faTv, faEdit, faTable, faMapMarked, faFile, faEllipsisH, faChevronUp, faChevronDown} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {
  faCog = faCog;
  faHome = faHome;
  faChartBar = faChartBar;
  faTv = faTv;
  faEdit =faEdit;
  faTable = faTable;
  faMapMarked = faMapMarked;
  faFile = faFile;
  faEllipsisH = faEllipsisH;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  dropdownUpComponent = true;
  dropdownDownComponent = false;


  dropdownUpChart = true;
  dropdownDownChart = false;

  dropdownUpUI = true;
  dropdownDownUI = false;

  dropdownUpForm = true;
  dropdownDownForm = false;

  dropdownUpTable = true;
  dropdownDownTable = false;

  dropdownUpMap = true;
  dropdownDownMap = false;

  dropdownUpPage = true;
  dropdownDownPage = false;

  dropdownUpMenu = true;
  dropdownDownMenu = false;

  dropdownUpMenu1 = true;
  dropdownDownMenu1 = false;


  onListClick(){
    this.dropdownUpComponent = !this.dropdownUpComponent;
    this.dropdownDownComponent = !this.dropdownDownComponent;
  }

  onListClick1(){
    this.dropdownUpChart = !this.dropdownUpChart;
    this.dropdownDownChart = !this.dropdownDownChart;
  }

  onListClick2(){
    this.dropdownUpUI = !this.dropdownUpUI;
    this.dropdownDownUI = !this.dropdownDownUI;
  }

  onListClick3(){
    this.dropdownUpForm = !this.dropdownUpForm;
    this.dropdownDownForm = !this.dropdownDownForm;
  }

  onListClick4(){
    this.dropdownUpTable = !this.dropdownUpTable;
    this.dropdownDownTable = !this.dropdownDownTable;
  }


  onListClick5(){
    this.dropdownUpMap = !this.dropdownUpMap;
    this.dropdownDownMap = !this.dropdownDownMap;
  }

  onListClick6(){
    this.dropdownUpPage = !this.dropdownUpPage;
    this.dropdownDownPage = !this.dropdownDownPage;
  }
 
  onListClick7(){
    this.dropdownUpMenu = !this.dropdownUpMenu;
    this.dropdownDownMenu = !this.dropdownDownMenu;
  }

  onListClick8(){
    this.dropdownUpMenu1 = !this.dropdownUpMenu1;
    this.dropdownDownMenu1 = !this.dropdownDownMenu1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}



