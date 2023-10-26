import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BugListComponent } from './bug-list/bug-list.component';
import { BugDetailsComponent } from './bug-details/bug-details.component';
import { BugAdviceComponent } from './bug-advice/bug-advice.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserInputComponent } from './user-input/user-input.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BugListComponent,
    BugDetailsComponent,
    BugAdviceComponent,
    HeaderComponent,
    FooterComponent,
    UserInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
