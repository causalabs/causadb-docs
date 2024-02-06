# CausaDB Documentation

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Deployment

The docs are deployed to AWS Amplify. The deployment is triggered by pushing to the `main` branch. The deployment process is automated and the website is updated automatically. Documentation from the API server and various clients is aggregated in the Github actions workflow. This is scheduled to run every 24 hours at 00:00 UTC, but can also be triggered manually.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
