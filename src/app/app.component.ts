import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { MdIconRegistry } from "@angular/material";

@Component({
  selector: 'f-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private _iconRegistry: MdIconRegistry, private _domSanitizer: DomSanitizer) {
      this._iconRegistry.addSvgIconInNamespace('assets', 'main_logo',
      this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg'));
    }
}
