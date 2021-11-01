import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'folder2-svg',
      sanitizer.bypassSecurityTrustResourceUrl('assets/svg/folder.svg'));

      iconRegistry.addSvgIcon(
        'facebook',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/facebook-brands.svg'));

      iconRegistry.addSvgIcon(
        'linkedin',
        sanitizer.bypassSecurityTrustResourceUrl('assets/svg/linkedin-brands.svg'));
  }
  

  ngOnInit(): void {
  }

}
