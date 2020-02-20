import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources';
import { HomeComponent } from './home';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LanguagesComponent } from './languages/languages.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { ResourceFormComponent } from './resources/resource-form/resource-form.component';
import { FrameworkFormComponent } from './frameworks/framework-form/framework-form.component';
import { LanguageFormComponent } from './languages/language-form/language-form.component';
import { DefinitionsComponent } from './definitions/definitions.component';
import { DefinitionFormComponent } from './definitions/definitions-form/definition-form.component';
import { StacksComponent } from './projects/stack.component';
import { ProjectFormComponent } from './projects/project-form/project-form.component';
import { ProjectComponent } from './projects/project.component';
import { StackFormComponent } from './projects/stack-form/stack-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    HomeComponent,
    LanguagesComponent,
    FrameworksComponent,
    DefinitionsComponent,
    DefinitionFormComponent,
    ResourceFormComponent,
    FrameworkFormComponent,
    LanguageFormComponent,
    ProjectComponent,
    StacksComponent,
    ProjectFormComponent,
    StackFormComponent,
  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
