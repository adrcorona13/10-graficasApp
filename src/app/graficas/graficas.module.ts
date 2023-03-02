import { NgModule } from "@angular/core";
import { GraficaBarraComponent } from './components/grafica-barra/grafica-barra.component';
import { BarrasComponent } from './pages/barras/barras.component';
import { BarrasDobleComponent } from "./pages/barras-doble/barras-doble.component";
import { DonaComponent } from './pages/dona/dona.component';
import { DonaHttpComponent } from './pages/dona-http/dona-http.component';
import { GraficasRoutingModule } from './graficas-routing.module';

@NgModule({
    declarations: [
        GraficaBarraComponent,
        BarrasComponent,
        BarrasDobleComponent,
        DonaComponent,
        DonaHttpComponent
    ],
    imports: [
        GraficasRoutingModule
    ]
})
export class GraficasModule { }