import { Component } from "@angular/core";
import { Imobile } from "../moduls/mobile.interface";
import { mobileProducts } from "../const/mobile";


@Component ({
    selector: 'app-mobile',
    templateUrl: './mobile.component.html',
    styleUrls: ['./mobile.component.scss']
})
export class mobileComponent {
mobileArray : Array<Imobile>=  mobileProducts
noimage: TemplateRef<NgIfContext<string>>|null;
No: any;
}