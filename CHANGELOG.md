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
