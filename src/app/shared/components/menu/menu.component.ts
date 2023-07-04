import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  public menuitems: MenuItem[] = [];
  ngOnInit() {
    this.menuitems = [
        {
            label: 'Pipes de Angular',
            icon: 'pi pi-desktop',
            items: [
              {
                label: 'Textos y Fechas',
                icon: 'pi pi-align-left',
                routerLink: '/'
              },
              {
                label: 'Números',
                icon: 'pi pi-dollar',
                routerLink: 'numbers'
              },
              {
                label: 'No comunes',
                icon: 'pi pi-globe',
                routerLink: 'uncommon'
              },
            ]
        },
        {
            label: 'Pipes personalizados',
            icon: 'pi pi-cog',
            items: [
              {
                label: 'Custom pipes',
                icon: 'pi pi-cog',
                routerLink: 'custom'
              },
            ]
        }
    ];
  }
}