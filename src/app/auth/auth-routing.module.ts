import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from "./log-in/log-in.component";
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
    {
        path: "",
        children: [
            {
                path: "signin",
                component: SignInComponent
            },
            {
                path: "login",
                component: LogInComponent
            },
            {
                path: "**",
                redirectTo: "signin"
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AuthRoutingModule {}



