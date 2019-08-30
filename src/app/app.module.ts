import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import {
  CreateEventComponent,
  EventThumbnailComponent,
  EventsListComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventService
} from './events/index';
import { EventsAppComponent } from './events-app.component';
// import {EventListResolver} from './events/events-list/event-list-resolver.service';
import { NavComponent } from './nav/nav.component';
import { ToastrService } from './common/toastr.service';
import {appRoutes} from './routes';
import { Error404Component } from './errors/error404/error404.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    // EventListResolver,
    { 
      provide: 'canDeactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }


export function checkDirtyState(component: CreateEventComponent){
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}