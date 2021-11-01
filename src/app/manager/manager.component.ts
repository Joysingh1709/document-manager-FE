import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'folder2-svg',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/folder.svg'));

    iconRegistry.addSvgIcon(
      'insta',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/instagram-brands.svg'));

    iconRegistry.addSvgIcon(
      'git',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/github-brands.svg'));

  }

  ngOnInit(): void {
  }

}
