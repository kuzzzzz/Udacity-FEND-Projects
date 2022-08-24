# Udacity Project: Evaluate a news article with Natural Language Processing

## Description

This is a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. It uses an exciting new api called Aylien to interact with their NLP system. This tool will give us back pertinent information about the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

Node and express are the webserver and routing, and webpack is the build tool of choice. Using webpack, I set up the app to have dev and prod environments, each with their own set of tools and commands.

The goal of this project is to practice with:

- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls

## Get Up and Running

Fork this repo, then clone the branch of your choice from your forked repo down to your computer:

```
git clone -- git@github.com:[your-user-name]/webpack-express.git --
```

`cd` into your new folder and run:
- ```npm install```
## Run In Development
- Run npm run build-dev
## Run In Production
- Run npm run build-prod
Visit localhost:8080 on your browser
## Testing
Jest is the tool of choice for running tests on the app. To test, run npm test in the terminal.

## API
The Aylien text analysis API was used in this project.

