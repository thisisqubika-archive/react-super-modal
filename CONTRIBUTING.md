Contributing Guidelines
--------------------------------------------------

This document provides general guidelines about how to contribute to any of the organization projects. Keep in mind these important things before you start contributing on any of them.

### Asking Questions

We do not use Github issues for general support. We think this questions should be posted on stack overflow using **react-modals** tag.

### Reporting issues

* Use **Github issues** on each project to report a bug.
* Before creating a new issue:
  * Make sure you are using the **latest release**.
  * Check if the issue was **already reported or fixed** (Notice that it may not be released yet).
  * If you found a match add a brief comment "I have the same problem" or "+1". This helps prioritize the issues addressing the most common and critical first. If possible add additional information to help us reproduce and fix the issue. Please use your best judgement.
* Reporting issues:
  * Please include any information that you think could help maintainers to fix the problem faster, some examples are:
    * Gifs with visual references to the issue.
    * Log outputs.
    * Steps to reproduce.

### Feature proposal

We would love to hear your ideas and make a discussions about it.

* Use github issues to make feature proposals.
* We use `type: feature request` label to mark all **feature request issues**.
* Before submitting your proposal make sure there is no similar feature request. If you found a match feel free to join the discussion or just add a brief "+1" if you think the feature is worth implementing.
* Be as specific as possible providing a precise explanation of feature request so anyone can understand the problem and the benefits of solving it.

### Pull requests

The easiest way to start contributing is searching open issues by `help wanted` tag. We also add a `difficulty` tag (difficulty: **easy**, difficulty: **moderate**, difficulty: **hard**) in order to give an idea of how complex it can be to implement each feature according to the project maintainers experience.

* Write a convincing description of your PR and why we should land it.
* Make sure your PR stays focused on a single feature. Don't change project configs or any files unrelated to the subject you're working. Open a single PR for each subject.
* Checkout the project style guide, make sure your code is conformant and clean. Remove any debugging lines (debuggers, console.log).
* Consider adding tests to your PR Specially for bugs, add tests reproducing the issue.
* Remember to document the new feature. We do not accept new feature pull requests without its associated documentation.
* In case of a new feature please update the project's documentation showing the feature and how to use it.
* It is important to keep the git history clean and tidy. This helps to identify the causes of bugs and helps in identifying the best fixes.
* Last but not least, it is important for us to keep the core code clean and consistent. This means we're pretty hard on code review, please hang on during code review

###### Suggested git workflow to contribute

1. Fork the Project's repository.
2. Clone your forked project into your machine: `git clone git@github.com:<your-github-username>/<Project>.git`
3. Add the original project repository as upstream repository in your forked project: `git remote add upstream git@github.com:react-modals/<Project>.git`
4. Before starting a new feature make sure your forked master branch is synchronized upstream master branch. Considering you do not merge your pull request into master you can run: `git checkout master` and then `git pull upstream master`. Optionally `git push origin master`.
5. Create a new branch. Note that the starting point is the upstream master branch HEAD. `git checkout -b my-feature-name`
6. Stage all your changes `git add .` and commit them `git commit -m "Your commit message"`
7. Make sure your branch is up to date with upstream master, `git pull --rebase upstream master`, resolve conflicts if necessary. This will move your commit to the top of git stack.
8. Squash your commits into one commit. `git rebase -i HEAD~<Number of commits>`
9. Push your branch into your forked remote repository.
10. Create a new pull request adding any useful comment.

###### Development
Requirements
- yarn

Setup
`yarn`

Build library
`yarn build`

Running tests
`yarn test`

Running linter
`yarn lint`

###### Code style and conventions

* [Airbnb Styleguide](https://github.com/airbnb/javascript/tree/master/react).
