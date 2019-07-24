# Invoicify Front-End
## Team Allyance
Galvanize Training Team Project for Ally IT Early Talent


## Configuration for Development Environment
1. npm install -g @angular/cli
2. npm install -g angular-cli-ghpages

## Configuration for GitHub Pages
### In the Cloned Repository:
1. npm install

## Deploying to GitHub Pages
### Locally, for Testing
1. npm start
NOTE: this will run the local frontend at localhost:4200
NOTE: this also requires that data-service.ts be reconfigured to use a running local backend
NOTE: the local backend should be running at localhost:8080/api/

### In Desired Branch:
1. ng build
2. ngh
NOTE: this automatically generates and pushes a git commit to the gh-pages branch
NOTE: if the gh-pages branch is not yet created, this will automatically configure it
