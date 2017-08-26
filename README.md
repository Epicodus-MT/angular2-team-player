<img src="epicodus.png" align="right">

# Angular2 Team Roster
> **Technologies Used** - TypeScript, Javascript, HTML, CSS.
> **IDE Used** - Atom.

#### By _**Mara Timberlake**_

Application for updating and deleting Seattle Sounders team roster.

## Description

_This application is a fan page that manages the roster of the Seattle Sounders.
The user may see a list of all team members, click a team member's entry in the list to visit their profile page (which includes more details about them), visit an "About" page that explains the Seattle Sounders history and current happenings. All data persists in a database. Administrators (authentication not required) may add, delete or edit individual team members._

## Planning

1. Configuration/dependencies
  * Angular2
  * TypeScript
  * Node

2. Specs
  * Spec 1: User creates a new player form, fills out new player form, new player added to database and appears on page after 'Add' button clicked.
  * Spec 2: User edits player details, user clicks 'Update' button after filling out form, information changes database and appears on page.
  * Spec 3: User deletes player, user clicks 'Delete' button and alert pops up asking, "Are you sure you want to delete this player from the team?", after clicking "OK" the player is deleted from database and disappears from page.

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
* `git clone https://github.com/Epicodus-MT/angular2-team-roster.git`
* `cd angular2-team-roster`
* `npm install`
* `bower install`

## Running / Development
* `ng serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.2.

## Known Bugs
_No known bugs at this time._

## Support and Contact Details
For questions or feedback, please contact [Mara Timberlake](<contact-info.md>).

## License
[![CC0](https://licensebuttons.net/p/zero/1.0/88x31.png)](https://opensource.org/licenses/MIT)

To the extent possible under law, the author has waived all copyright and related or neighboring rights to this work.

Copyright (c) 2017 *_Mara Timberlake_*
