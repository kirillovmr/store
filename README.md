# [Morejust.store](https://morejust.store) :briefcase: [![Build Status](https://travis-ci.org/kirillovmr/store.svg?branch=master)](https://travis-ci.org/kirillovmr/store)
Create your own free unlimited cloud storage! Our tool uses GitHub-as-a-storage to save there the uploaded files. You can use [our deployed tool](https://morejust.store) or run it by yourself - see below for instructions.

## How to deploy

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/kirillovmr/store/tree/heroku-deploy)

*TL;DR: you need to create a GitHub token and add it to deployed repo as GITHUB_TOKEN environment variable.* 

Or just watch a video:

[![Morejust storage installation demo](https://raw.githubusercontent.com/morejust/orgb1/bc1a5a9688ac7951473e3b0b18ea5dac/Screenshot%202019-01-01%20at%2018.32.41.png)](https://www.youtube.com/watch?v=Srz5RMnDv6s)


### Step-by-step guide

#### :one: Create GitHub token
1. Register on GitHub and go to [Settings -> Developer Settings -> Personal Access Tokens -> Generate new token](https://github.com/settings/tokens/new)
2. Give it a random name, select **public repo** and scroll below and smash **Generate**. You don't have to add any additional rights if you want to store your files on public repositories.
<img src="https://raw.githubusercontent.com/morejust/orgb1/ee1ec84391449b16ed643d3b629b6f0b/Screenshot%202018-12-27%20at%2014.40.19.png" height="300">
3. Copy generated GitHub token and go to the next part: deployment.

#### :two: Deploy to Heroku

Heroku allows to create free small machines and deploy from GitHub in one click. You will need to have a Heroku account to proceed, so please [register](https://signup.heroku.com/login).

1. Press the button below to deploy with one click

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/morejust/store/tree/heroku-deploy)

2. Choose any app name you like
<img src="https://raw.githubusercontent.com/morejust/orgb1/1c5eff2238a0abcf387205626bf804f2/Create-heroku.png" height="300">

3. Click the 'Manage App' at the bottom of the page

4. Click 'Settings' and 'Reveal Config Vars'

5. Set the *key* to **GITHUB_TOKEN** and the *value* to the generated on the previous steps GitHub token.

<img src="https://raw.githubusercontent.com/morejust/orgb1/c9cbc1a17746e52d1accb9d14e0f9b8b/Screenshot%202018-12-26%20at%2002.20.27.png" height="300">

6. Smash 'Open app' and enjoy!

---

#### Run Client & Server locally

If you don't like . Heroku, you can deploy manually. 

``` bash
git clone https://github.com/morejust/store
```

Start server:
``` bash
npm run dev
```

Start client:
``` bash
cd client
npm start
```

## All Environment Variables

Here is the list of all possible config variables that can be changed (except **GITHUB_TOKEN** that is required and was set earlier). If you decide to use this config variables, you should specify them as environment variables.

1. **BLOCK_SIZE_MB** - max block (github repo) size. Default value = 1000
2. **MAX_FILE_SIZE_MB** - max file size that can be uploaded. Default value = 100
3. **GITHUB_ORGANIZATION** - used to create blocks in the organization Github account, not in your private account. Default value - not set.

## Technical details

### HEROKU DEPLOY

To use this `heroku-deploy` branch:

```bash
git checkout heroku-deploy
git fetch
git reset --hard origin/master
npm run build-front
git add client/build
git commit --allow-empty -m "build heroku"
git push --force
git checkout master
```

or simply

```bash
npm run deploy
```

### How to use add_file.sh script

From any folder you can launch:

``` bash
bash add_file.sh $NAME_OF_bLOCK_REPO $AbSOLUTE_PATH_TO_FILE
```

Keep in mind that you should have a push access to the repository. If you want to create a new repo for files (we call it 'block'), you should have the rights to create a new repo.

---
Creators:
[Dan Okhlopkov](https://github.com/ohld), [Viktor Kirillov](https://github.com/kirillovmr), [Alexey Bykhun](https://github.com/caffeinum).
