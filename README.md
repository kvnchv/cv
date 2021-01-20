# Curriculum Vitae

Adapted from [this template](https://github.com/sneas/cv-template/generate). 

## Creating your own

1. Create a new repo out of this template by clicking [this link](https://github.com/sneas/cv-template/generate).
1. Clone the newly created repo.
1. Install project dependencies with `npm install`.
1. Run `npm run deploy` to initialize `gh-pages`. This is a one time action. Further deployments will be initiated by GitHub Actions on every push to `master`.

## Usage

1. Start local development server with `npm start`.
1. Update contents of `src` folder to fit your needs. This item is explained [below](#update-contents).
1. Commit and push your changes.
1. GitHub Actions will automatically build the latest version and deploy it to GitHub Pages.
1. Open `http://your-username.github.io/your-cv-repo`.

### Update contents

The project uses [HandlebarsJS](https://github.com/wycats/handlebars.js/) as a template engine.

The main HTML is found in [src/templates/index.html](src/templates/index.html). Metadata for the template is in [src/metadata/metadata.js](src/metadata/metadata.js).
