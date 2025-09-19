import { NgModule } from "@angular/core";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatDialogModule } from "@angular/material/dialog"
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatButtonModule } from "@angular/material/button"

@NgModule({
    declarations : [],
    imports : [
        MatSnackBarModule,
        MatDialogModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule
    ],
    exports : [
        MatSnackBarModule,
        MatDialogModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule
    ],
    providers : []
})
export class MaterialModule{

}