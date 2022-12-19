## Important Guideline

#### 1. Write code and commit on your own branch only. (No commits on master branch). Feel free to make as many branches as you like.

#### 2. Avoid using (Shift+Delete). Recycle Bin is a friend in need.

#### 3. Thoroughly test before opening a Pull Request.

#### 4. Any other important guideline for the team should be highlighted here in Readme.md in bold.

## Setting up The Repo 1st Time on Local System

#### 1. Clone the repo on your computer.

```nodejs
git clone git@github.com:pradip8928/Giftana.git
```
#### 2. Setup Environment and dependencies  .
#### Install Node JS from nodejs.org

#### 3. To run Node App
#### Navigate to root Directory:
```nodejs
cd Server
```
#### Install Dependencies:
```nodejs
npm install
```
#### Start Node App:
```nodejs
npm run server 
```

## Starting with new task.

#### 1. On your master branch

    ` git pull git@github.com:pradip8928/Giftana.git `

#### 2. Checkout to Your own branch.

    `git checkout -b <branch_name>`



## Pushing to the Repo
#### 1. Commit the code changes onto your branch.

#### 2. Make sure you are up to date with the `master` branch.
    git fetch origin master
    git merge origin/master
Complete the merge. Resolve merge conflicts (if any)

#### 3. git push origin br_name

#### 4. Goto Github and create a Pull Request.

#### 5. Wait for Pull Request to get approved.


## To Commit and push the code to the repo
1. Adding the files  using given syntax :
```Github
git add .
```
or
```Github
git add <FileName> or <FolderName>
```
2. Make a Commit
```Github
git commit -m "Message"
```
3. To create branch
```Github
git branch -b <branchname>
```
4. To checkout your own branch
```Github
git checkout  <branch_name>
```
5. To push the code to  your own branch
```Github
git push origin <branch_name>
```
6. Make a pull request and wait for  response

