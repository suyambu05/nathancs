    // src/app/app.module.ts
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppRoutingModule } from './app-routing.module';
    import { AppComponent } from './app.component';
    import { MyFeatureModule } from './my-feature/my-feature.module'; // Import your new module

    @NgModule({
      declarations: [
        AppComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        MyFeatureModule // Add it to the imports array
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }