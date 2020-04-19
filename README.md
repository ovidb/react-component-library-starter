## React Component Library Starter

[![Coverage Status](https://coveralls.io/repos/github/ovidb/react-component-library-starter/badge.svg?branch=master)](https://coveralls.io/github/ovidb/react-component-library-starter?branch=master)

I found it a bit annoying that I couldn't find a good starter package for creating a React Component Library in Typescript with automatic semantic release setup, so I decided to write this package

### Features:

- [tsdx](https://github.com/jaredpalmer/tsdx) - a wonderful zero-config cli that helps with all that TypeScript developing, building and testing.
- Configured [Storybook](https://storybook.js.org/) (courtesy of tsdx).
- CI/CD with automatic semantic version and changelog via conventional commits, release via [semantic-release](https://github.com/semantic-release/semantic-release/blob/beta/docs/recipes/maintenance-releases.md) and [conventional-commits](https://www.conventionalcommits.org/en/v1.0.0-beta.4/)
- Configured support for SCSS modules
- Coverage badge with [coveralls](https://coveralls.io/)

### Getting started
🤷‍♂️I will try to make this a bit more automatic, but until then some manual work will be needed. 

I would start with cloning this repo locally
```git clone git@github.com:ovidb/react-component-library-starter.git```

Then just rename the project folder, remove the `.git` folder so you can start fresh with a `git init`

```bash
mv react-component-livrary-starter my-react-component
cd my-react-component
rm -rf .git
git init
npm install
```

Then Rename project name, description, homepage, bugs, repository links in `package.json` and 
make sure the version is 0.0.0. This is required so that you can sensibly start at version 
1.0.0 when semantic release will run in CircleCI.
- in `README.md` change the link of the coverage badge to point to your own repository
You will have to signup for account with [coveralls.io](https://coveralls.io/). We'll setup this later on,
but for now you can just put a link that will match your github repo url.

You should also change the `README.md` file to describe what is so fabulous about the component
you're building 


Create a new repo in github and add it as an origin
```bash
git remote add origin git@github.com:your-user-name/my-component-library.git
```

**Now let's commit the changes**

> ⚠️ Warning
>
>You will need to use conventional commit format to benefit of automated semantic release and changelog generation
> 

Commit and and push
```bash
yarn commit
git push
```

At this point CircleCI will probably fail because you haven't setup the required tokens

**Configure CI/CD:**

To support `semantic-release` you'll have to[ generate a Github token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line) and [npm token](https://docs.npmjs.com/creating-and-viewing-authentication-tokens).

Login to CircleCI. 
Find your project and [add environment variables](https://circleci.com/docs/2.0/env-vars/#setting-an-environment-variable-in-a-project) for `GITHUB_TOKEN` and `NPM_TOKEN` environment variables. These are needed by [semantic-release](https://github.com/semantic-release/semantic-release/blob/beta/docs/recipes/maintenance-releases.md) for `GITHUB_TOKEN`, `NPM_TOKEN` and `CODECOV_TOKEN` and a `CACHE_VERSION`.
`CACHE_VERSION` is used to manually invalidate CircleCI cache if needed. The initial value can be `00001`.
The reason for the leading `0`s is so that the latest value is visible in Environment Variables view. 

Now you can head back to CircleCI and rerun the release workflow.

