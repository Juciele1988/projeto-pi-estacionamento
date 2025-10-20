import { Routes } from '@angular/router';
import { DashboardComponent } from './features/admin/pages/dashboard/dashboard.component';
import { UsuarioComponent } from './features/admin/pages/usuario/usuario.component';
import { FinanceiroComponent } from './features/admin/pages/financeiro/financeiro.component';
import { AutomovelComponent } from './features/admin/pages/automovel/automovel.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout/admin-layout.component';
import { CadastroComponent } from './features/admin/pages/cadastro/cadastro.component';
import { UsuarioLayoutComponent } from './layouts/admin-layout/usuario-layout/usuario-layout.component';
import { HomeComponent } from './features/usuario/pages/home/home';
import { PerfilComponent } from './features/usuario/pages/perfil/perfil';
import { LoginComponent } from './features/usuario/pages/login/login';
import { ReservaComponent } from './features/usuario/pages/reserva/reserva';
import { TemporizadorComponent } from './features/usuario/pages/temporizador/temporizador';
import { Temporizador2Component } from './features/usuario/pages/temporizador2/temporizador2';
import { VeiculosComponent } from './features/usuario/pages/veiculos/veiculos';
import { CadastroComponente } from './features/usuario/pages/cadastro/cadastro';

export const routes: Routes = [
    {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: 'cadastro', component: CadastroComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'usuario', component: UsuarioComponent },
      { path: 'financeiro', component: FinanceiroComponent },
      { path: 'automovel', component: AutomovelComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  
   {
    path: 'usuario',
    component: UsuarioLayoutComponent,
    children: [
      { path: 'cadastro', component: CadastroComponente },
      { path: 'home', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'reserva', component: ReservaComponent },
      { path: 'temporizador', component: TemporizadorComponent},
      { path: 'temporizador2', component: Temporizador2Component},
      { path: 'veiculos', component: VeiculosComponent},
      { path: '', redirectTo: 'Home', pathMatch: 'full' }
    ]
  },

  // { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: '/admin/dashboard' }

];
