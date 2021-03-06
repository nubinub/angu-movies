## Project initialization

* I used `angular-cli` to initialize the project. This is the recommanded tool on [official documentation](https://angular.io/cli).
* Added angular-routing as the problem clearly stated the need for a list page and detail page.
* Chosing SCSS style sheet format, as I'll definitely enjoy a CSS pre-processor and I prefer the CSS-like syntax.

## CI initialization

* Setting up CI in order to automatically run build in production mode, unit tests and e2e tests on each push. Insprired by [ng-githubg-actions](https://github.com/filipesilva/ng-github-actions) and [Cory Rylan](https://coryrylan.com/blog/building-angular-cli-projects-with-github-actions).

## movie-card

To fullfill first scenario requirements, I decided to develop a `MovieCard` component which render the various type of data required. My overall thinking followed the different steps:
* First of all I had to chose an UI library, as I didn't want to waste time on reinventing simple UI component. [Material angular](https://material.angular.io/) seems the perfect choice as it was directly mentionned on the generated example by angular-cli, and offers a [Card Component](https://material.angular.io/components/card/overview) which looks perfect for the job.
* My mind was focused on the component design first, so I didn't want to think about data fetching problematics at this stage. I therefore decided to work with mocked data, but in order to avoid unnecessary refactor once data fetching will be a thing, I based my model on the one returned by the [themoviedb](https://developers.themoviedb.org/3/movies/get-movie-details).
* `release_date` and `runtime` data provided by the API are not user-friendly, so I added some [custom pipes](https://angular.io/guide/pipes) using [moment](https://momentjs.com/) to improve their readability.
* Using [ngMocks](https://www.npmjs.com/package/ng-mocks) to remove warning from tests and keep the unit testing as unitary as possible.
* movie-card up and running !

## scenario-1

Time to implement scenario 1.
* First step, creating `MoviesListComponent` in order to display multiple movie cards using flex css property.
* Data fetching here we are! Time to actually query the api. To do so I will create two services:
  * MovieRepository: which will be responsible for accessing the data from the API and will rely on [HttpClient](https://angular.io/guide/http).
  * MovieService: which will add a logic layer on top of the repository.
  * At first the application will display the popular movies delivered by [themoviedb](https://developers.themoviedb.org/3/movies/get-popular-movies). 
  * Since I don't want to share my developper API key, you need to use your own API key by adding it to the localstorage. Via the developper console for example. I will deliver a more integrated way to add your api key in a later version.
```js
  localStorage.setItem('api_key', '<your_api_key>');
```
  * Runtime value has been remove from movie card as the data is not returned by the various search services from the moviedb.
  * Displaying 20 movies instead of 10 as the popular services returns 20 results.
* Adding a top bar to improve the overall looking.


## scenario-2

* Adding the detail page using [`AngularRoutingModule`](https://angular.io/guide/router).
* Reusing pipes created at step 1 to display formatted runtime and release date.
* Enhancing `MovieService` and `MovieRepository` with methods to access [movie detail](https://developers.themoviedb.org/3/movies/get-movie-details) and [cast](https://developers.themoviedb.org/3/movies/get-movie-credits) information.
* I couldn't find the information about the director. Perhaps I missed something, but the information is not in the movie detail service nor in the movie credits.
* Adding a back button in the top bar to improve user experience.

### improvements

* The overall look and feel of the page could really be improved, I'll come back at it later.
* Runtime and release date could become components, rather than reusing only the pipes.
* Top bar should really be made more generic.

## scenario-3

* `MoviesListComponent` now receives movies as input rather than fetching them on init. This will allow me to reuse that component for scenario-5.
* Using [`ReactiveFormsModule`](https://angular.io/guide/reactive-forms) to handle search input. 
* With [`debounceTime`](https://rxjs-dev.firebaseapp.com/api/operators/debounceTime), the search will be effective after the user stops typing for 500ms.

## scenario-5

* Adding an abstract class `AbstractListService` which provides utility methods to easily add a movie to a given list, removing it and persisting it in the locasl storage. 
* Adding two services thant inherits `AbstractListService` to manage the seen movies list and the watch list. Only difference is the local storage key used to store the list.
* `WatchCardComponent` can now uses those services to provide actions to add the displayed movie in the watch list or seen list.
* Extracting those toggle actions into components in order to reuse them in the movie details page.


## nav-bar

* Creating a `NavbarComponent` to avoid code duplication between all the pages.
* Using `MatSideNav` from material angular to allow easy navigation between all the pages.
* Various UI modifications to improve orerall user experience.

## settings

In order to avoid to share my api key on github, I added a settings page so the user can input his own api key. The api key is then stored in the local storage. If no api key is found in the local storage, the user is automatically redirected toward the settings page. The settings page is also accessible via the sidenav menu at any times.

## To be improved

### Tests

Some shortcuts have been taken on the test department:
* The tests cases are there as examples. Most of them are the simple test cases generated by angular-cli. A lot of tests should be added to provide some optimal code coverage.
* Code coverage tools could be included in the CI process.
* This application could clearly benefit some e2e testing.
* I ended up using both [ngMocks](https://www.npmjs.com/package/ng-mocks) and [NO_ERROR_SCHEMA](https://angular.io/api/core/NO_ERRORS_SCHEMA). Yet a lot of warnings remains and some work needs to be done to clean things up.
* A test-driven-developpement approach might have been appropriate as the scenario requirements were known in advance and were quite easy to test.

### Aplication architecture

* For convenience purpose and time reason, I went for a single module application. However, I feel this application could clearly benefit of a modular approach, maybe by [feature](https://angular.io/guide/feature-modules).
* Some components might need some refactor and some splitting in order to provide an ideal world where one component has one purpose.
* Adding a state management system such as [redux](https://redux.js.org/) or [mobx](https://redux.js.org/) should be considered as well.
* An error management system could really improve application robustness. At the moment I have no error notification, nor fallback in case of error.

### Features

* The search form is quite simple and doesn't offer the features required by the fourth scenario.
* The list management system could rely on the moviedb list API rather than using only the local storage.

### UI

* A success notification system should be added, especially for the list management system. Maybe something based on [snackbar](https://material.angular.io/components/snack-bar/overview) could really improve user experience.
* Some [placeholders](https://www.npmjs.com/package/angular-placeholder) could be added to notify the user that an asynchronous loading is progress.

### Github-pages

At the moment it's not possible to navigate directly to a page or to refresh a page on the github-pages application. It has something to do with the deploy configuration. I haven't been able to figure out what was wrong from [this documentation](https://angular.io/guide/deployment#deploy-to-github-pages).
