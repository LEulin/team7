import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentTableComponent } from './components/dashboard/childcomponents/student-table/student-table.component';
import { RecordTableComponent } from './components/dashboard/childcomponents/record-table/record-table.component';
import { FormComponent } from './components/dashboard/childcomponents/form/form.component';
import { AnualAnalyticsComponent } from './components/dashboard/childcomponents/anual-analytics/anual-analytics.component';
import { MonthlyAnalyticsComponent } from './components/dashboard/childcomponents/monthly-analytics/monthly-analytics.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SuggestionsComponent } from './components/dashboard/childcomponents/form/suggestions/suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    StudentTableComponent,
    RecordTableComponent,
    FormComponent,
    AnualAnalyticsComponent,
    MonthlyAnalyticsComponent,
    NotfoundComponent,
    SuggestionsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    ,FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }