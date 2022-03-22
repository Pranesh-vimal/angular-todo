import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { HttpClientModule } from '@angular/common/http';
import { TitleCasePipe } from './pipe/title-case.pipe';

// import { AngularFireModule } from '@angular/fire/compat';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
// import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, TodosComponent, HeaderComponent, TodoComponent, TitleCasePipe],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    // AngularFirestoreModule,
    // AngularFireStorageModule,
    // AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
