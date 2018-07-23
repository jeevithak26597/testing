import {Component} from "@angular/core";
import {Routes, Router, ActivatedRoute} from "@angular/router";

@Component({
    selector: "app-search",
    template: `<form class="form-inline">
    <div class="form-group">
      <input type="search"
             class="form-control"
             placeholder="Enter search string"
             #search>
    </div>
    <button type="button"
            class="btn btn-primary"
            (click)="onSearch(search.value)">
      Search
    </button>
  </form>
  
  <hr />
  
  <div class="text-center">
    <p class="lead"
       *ngIf="loading">Loading...</p>
  </div>
  
  <div class="list-group">
    <a [routerLink]="['/artist', track.artistId]"
       class="list-group-item list-group-item-action"
       *ngFor="let track of itunes.results">
      <img src="{{track.thumbnail}}">
      {{ track.name }} <span class="text-muted">by</span> {{ track.artist }}
    </a>
  </div>
   `
  })
 export class SearchComponent {
    private loading: boolean = false;
  
    constructor(
    
      private route: ActivatedRoute,
      private router: Router
    ) {
      this.route.params.subscribe(params => {
        console.log(params);
        if (params["term"]) {
          this.doSearch(params["term"]);
        }
      });
    }
  
    doSearch(term: string) {
      this.loading = true;
      
    }
  
    onSearch(term: string) {
      this.router.navigate(["search", { term: term }]);
    }
  }
  

  @Component({
    selector: "app-home",
    template: `
  <div class="jumbotron">
    <h1 class="display-3">iTunes Search App</h1>
  </div>
   `
  })
  export class HomeComponent {}
  
  @Component({
    selector: "app-header",
    template: `
  <nav class="navbar navbar-light bg-faded">
    <a class="navbar-brand" [routerLink]="['home']">iTunes Search App</a>
    <ul class="nav navbar-nav">
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link"
           [routerLink]="['home']">
           Home
        </a>
      </li>
      <li class="nav-item" [routerLinkActive]="['active']">
        <a class="nav-link" [routerLink]="['search']">Search</a>
      </li>
    </ul>
  </nav>
   `
  })
  class HeaderComponent {
    // constructor(private router: Router) {}
    // goHome() {
    //   this.router.navigate([""]);
    // }
    // goSearch() {
    //   this.router.navigate(["search"]);
    // }
  }

@Component({
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
}

export const routes: Routes = [
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: SearchComponent}
];