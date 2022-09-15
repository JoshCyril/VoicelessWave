import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';

const routes: Routes = [
  {path:"welcome", component:WelcomeComponent},
  {path:"chat", component:ChatComponent},
  {path:"", redirectTo:'welcome', pathMatch: 'full'},
  {path: '**',pathMatch: 'full',component: WrongRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
