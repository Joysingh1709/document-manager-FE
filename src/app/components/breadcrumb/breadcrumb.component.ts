import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  currentDirectory: string = "Data";

  dirFlowArr: string[] = ["Home", "Library", "Data"];

  constructor() { }

  ngOnInit(): void {
  }

}
