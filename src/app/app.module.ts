import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { reducers, metaReducers } from './reducers';
import { environment } from '../environments/environment';
import { AppEffects } from './app.effects';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { ContentComponent } from './content/content.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { filialReducer, FILIAL_REDUCER_NODE } from './store/filial/filial.reducer';
import { RenderFilialComponent } from './renderFilial/renderFilial.component';
import { HeaderComponent } from './header/header.component';
import { mainCompanyReducer, MAIN_COMPANY_REDUCER_NODE } from './store/mainCompany/main-company.reduser';
import { RenderMainCompanyComponent } from './renderMainCompany/renderMainCompany.component';


const appRoutes: Routes = [
  { path: '', component: AuthFormComponent },
  { path: 'content', component: ContentComponent },
  { path: 'add-company', component: CreateFormComponent }
];

@NgModule({
  declarations: [	
    AppComponent,
    AuthFormComponent,
    ContentComponent,
    CreateFormComponent,
    EditFormComponent,
    CompanyListComponent,
    RenderFilialComponent,
    HeaderComponent,
      RenderMainCompanyComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreModule.forFeature(FILIAL_REDUCER_NODE, filialReducer),
    StoreModule.forFeature(MAIN_COMPANY_REDUCER_NODE, mainCompanyReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
