import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { SingleComponent } from './single/single.component';
import { BulkComponent } from './bulk/bulk.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SingleFormComponent } from './forms/singleform/singleform.component';
import { BulkFormComponent } from './forms/bulkform/bulkform.component';
import { SendRequestService } from './services/sendrequest.service';
import { InvoiceService } from './services/invoice.service';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SingleComponent,
    BulkComponent,
    AboutComponent,
    HomeComponent,
    SingleFormComponent,
    BulkFormComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [
    SendRequestService,
    SingleFormComponent,
    InvoiceService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
