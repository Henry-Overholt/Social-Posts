import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { SocialPostComponent } from "./social-post/social-post.component";
import { PostComponent } from "./social-post/post/post.component";
import { PostFormComponent } from "./social-post/post-form/post-form.component";
import { NgForm, FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SocialPostComponent,
    PostComponent,
    PostFormComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
