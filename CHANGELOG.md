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
