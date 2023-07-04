import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = "iber"
  public nameUpper: string = "IBER"
  public fullName: string = "IbEr CHAmbI"

  public customDate: Date = new Date();

}
