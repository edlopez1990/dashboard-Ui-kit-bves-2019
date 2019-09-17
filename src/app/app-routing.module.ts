import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ErrorComponent } from "./error/error.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UikitComponent } from "./uikit/uikit.component";
const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "uikit",
    component: UikitComponent
  },
  {
    path: "",
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

// @NgModule({
//   imports: [
//     RouterModule.forRoot(
//       routes,
//       { enableTracing: true } // <-- debugging purposes only
//     ) // other imports here
//   ]
// })
export class AppRoutingModule {}
