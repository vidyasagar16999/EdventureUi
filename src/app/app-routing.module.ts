import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './edventure/contact-us/contact-us.component';
import { FaqComponent } from './edventure/faq/faq.component';
import { AboutUsComponent } from './edventure/about-us/about-us.component';
import { HomepageComponent } from './edventure/homepage/homepage.component';
import { TripsServicesComponent } from './edventure/trips-services/trips-services.component';
import { GalleryComponent } from './edventure/gallery/gallery.component';
import { BlogResourceCenterComponent } from './edventure/blog-resource-center/blog-resource-center.component';

const routes: Routes = [
  { path:'', component: HomepageComponent},
  { path:'contact-us', component: ContactUsComponent},
  { path:'faq', component: FaqComponent},
  { path:'about-us', component: AboutUsComponent},
  { path:'trips-services', component: TripsServicesComponent},
  { path:'gallery', component: GalleryComponent},
  { path:'blog', component: BlogResourceCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
