import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Informes y Análisis',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
          { label: 'Reportes', icon: 'pi pi-fw pi-home', routerLink: ['/www'] }
        ]
      },
      {
        label: 'Personal',
        items: [
          { label: 'Administradores', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
          { label: 'Clientes', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
          { label: 'Usuarios', icon: 'pi pi-fw pi-bookmark', routerLink: ['/uikit/floatlabel'] },
          { label: 'Recepcionistas', icon: 'pi pi-fw pi-exclamation-circle', routerLink: ['/uikit/invalidstate'] },
          { label: 'Nómina', icon: 'pi pi-fw pi-box', routerLink: ['/uikit/button'] },

        ]
      },
      {
        label: 'Operaciones',
        items: [
          { label: 'Inconvenientes', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
          { label: 'Servicios', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
          { label: 'Vehículos', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
        ]
      },
      {
        label: 'Inventario',
        items: [
          { label: 'Productos', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
          { label: 'Compras', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },
          { label: 'Proveedores', icon: 'pi pi-fw pi-check-square', routerLink: ['/uikit/input'] },

        ]
      },
      {
        label: 'Información',
        items: [
          { label: 'Acerca de', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
        ]
      }
    ];
  }
}
