import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FactorialComponent } from './factorial/factorial.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { DefaultPipe } from './default.pipe';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { HoverFocusDirective } from './hoverfocus.directive';
import { ModeldrivenLoginComponent } from './modeldriven-login/modeldriven-login.component';
import { RouterModule } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { TemperatureComponent } from './components/temperature/temperature.component';
import { TpwComponent } from './components/tpw/tpw.component';
import { ChartComponent } from './components/chart/chart.component';
import { DayTileComponent } from './components/day-tile/day-tile.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { WeatherService } from './weather.service';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { ReactiveFormsModule} from '@angular/forms';
// import { VoteComponent } from './setup-and-teardown/vote.component';
import {InputTextModule} from 'primeng/inputtext';
import  { TreeModule } from 'primeng/tree';
import {PasswordModule} from 'primeng/password';
import { HttpClientModule } from '@angular/common/http';
import { NodeService } from './node.service';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    FactorialComponent,
    CalculatorComponent,
    DefaultPipe,
    LoginComponent,
    HoverFocusDirective,
    ModeldrivenLoginComponent,
    SummaryComponent,
    TemperatureComponent,
    TpwComponent,
    ChartComponent,
    DayTileComponent
    // VoteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpModule,
    FormsModule,
    Ng2GoogleChartsModule,
    TreeModule,
    InputTextModule,
    ReactiveFormsModule,
    HttpClientModule,
    PasswordModule,
    ButtonModule,
    CalendarModule,
    BrowserAnimationsModule,
    TabMenuModule
  ],
  providers: [AuthService,WeatherService,NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
