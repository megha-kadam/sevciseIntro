import { NgModule } from "@angular/core";
import { PassengerDashboardComponent } from "./passenger-dashboard/passenger-dashboard.component";
import { CommonModule } from "@angular/common";
import { PassengerCardsComponent } from "./passenger-cards/passenger-cards.component";
import { PassengerCountComponent } from "./passenger-count/passenger-count.component";
import { MaterialModule } from "../shared/modules/material.module";

@NgModule({
    declarations : [
       PassengerDashboardComponent,
       PassengerCardsComponent,
       PassengerCountComponent
    ],
    imports : [
        CommonModule,
        MaterialModule
    ],
    exports : [
        PassengerDashboardComponent
    ],
    providers : []
})
export class PassengerModule{

}