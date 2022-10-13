import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { HomComponent } from "../views/home/hom.component";
import { LoginComponent } from "src/app/views/login/login.component";

const routes: Routes = [
  {path: "", component: HomComponent },
  {path: "Login", component: LoginComponent }
]

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
