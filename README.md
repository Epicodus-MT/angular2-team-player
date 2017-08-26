<img src="epicodus.png" align="right">

# Angular2 Team Roster
> **Technologies Used** - TypeScript, Javascript, HTML, CSS.
> **IDE Used** - Atom.

#### By _**Mara Timberlake**_

Application for updating and deleting Seattle Sounders team roster.

## Description

_This application is a fan page that manages the roster of the Seattle Sounders.
The user may see a list of all team members, click a team member's entry in the list to visit their profile page (which includes more details about them), visit an "About" page that explains the Seattle Sounders history and current happenings. All data persisted in a database. Administrators (authentication not required) may add, delete or edit individual team members._

## Planning

1. Configuration/dependencies
  * Angular2
  * TypeScript
  * Node

2. Specs
  * Spec 1: User creates a new player form, fills out new player form, new animal added to database and appears on page after 'add' button clicked.
  * Spec 2: User edits player details, user clicks 'Update' button after filling out form, information changes database and appears on page.

3. Integration
  * app.Component.ts contains all components
  * AboutComponent - information about the team
  * AdminComponent - views player list with link to update/delete
  * EditPlayerComponent - update/delete players from roster
  * PlayerDetailComponent - player information displayed
  * RosterComponent - the list of player on the team
  * WelcomeComponent - Home page

4. UX/UI
  * Include and modify bootstrap/materialize/Sass etc.
  * Develop custom style

5. Polish  
  * Add functionality to keep track of stats
  * Add a message board area
  * Include "announcements" and "schedule"
  * Deploy application -- include a link to the live site in README

## What's included
Within the repository you'll find the following directories and files:

```
angular2-team-roster/
├── src/
|    └── app/
|    |     └── about/
|    |     └── admin/
|    |     └── edit-player/
|    |     └── player-detail/
|    |     └── roster/
|    |     └── welcome/
|    |     └── app.component.ts
|    └── index.html
|    └── main.ts
|    └── styles.css
├── .gitignore
├── bower.json
├── package.json
├── README.md
└── tsconfig.json
```
## Prerequisites/Installation Requirements

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)

## Setup
To run this program:
* _LOCAL: Go to Terminal_
* `git clone https://github.com/Epicodus-MT/angular2-zoo-tracker.git`
* `cd angular2-team-roster`
* `npm install`
* `bower install`

## Running / Development
* `ng serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Known Bugs
_No known bugs at this time._

## Support and Contact Details
For questions or feedback, please contact [Mara Timberlake](<contact-info.md>).

## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://opensource.org/licenses/MIT)

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.

Copyright (c) 2017 *_Mara Timberlake_*


# Angular2TeamRoster

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
