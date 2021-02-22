# Salt Gallery - Day 2 - Creating the CI/CD Pipeline

## A. Scenario

In a professional development environment a CI/CD pipeline can be used to automate the delivery process. The pipeline builds code, runs tests (CI), and safely deploys a new version of the application (CD).

Today is going to be less coding and more configuring. Getting used to integrating different services and navigating the kind of services that we're going to look at today is very important in a modern software development role.

## B. CI/CD specifications

Our CI/CD will be set up the following way (there are many CI/CD tools and setups. This is just one way of structuring a CI/CD pipeline).

- Github Actions for testing our code on push and pull requests (this is our continuous integration part).
- AWS Codepipeline and S3 for building and deploying our application (this is our continuous delivery part).

### Github Actions for Continuous Integration

You should already have set up you with two branches - `main` and `development`. Now, we want you to set up _at least_ the following workflows:

- Whenever you push to the `development` branch, Github actions should start a _workflow_ which runs all _tests_ and _linting_.
- Whenever you make a pull-request from `development` to the `main` branch, Github actions should start a workflow which runs all _npm audit_ and any _e2e tests_ (if you have any).

Feel free to add additional workflows if you can - for example, maybe you can send some kind of email/slack/github notification to your team members on a pull request to master.

Here are some resources on Github Actions to help you get started:

- [This one setting up by using workflow templates](https://docs.github.com/en/free-pro-team@latest/actions/guides/setting-up-continuous-integration-using-workflow-templates) - we suggest using the 'set up a workflow yourself' option and try to figure out what your workflow file actually needs.
- [This one on the components of Github Actions](https://docs.github.com/en/free-pro-team@latest/actions/learn-github-actions/introduction-to-github-actions#understanding-the-workflow-file)

### AWS Codepipeline, CodeBuild and S3 for Continuous Delivery

---

**Disclaimer** AWS is a platform-as-a-service and can, depending on how it's used, generate costs. The services that we want you to use (Codepipeline, CodeBuild and S3) should, given the purposes for which we want you to use them, not generate any costs as any new users have a _Free Tier_ for these services. You can read more about pricing for each service here:

- [Codepipeline](https://aws.amazon.com/codepipeline/pricing/)
- [Codebuild](https://aws.amazon.com/codebuild/pricing/)
- [S3](https://aws.amazon.com/s3/pricing/)

---

Now it's time to delivering your code to the open internet. We'll add to our CI/CD structure by using AWS Codepipeline, Codebuild and S3 for the CD part (we could have used Codepipeline for the whole CI/CD integration, but we want you to use multiple tools). Create a Codepipeline which:

- Starts whenever code is pushed/merged to the `main` branch.
- Runs (at least) your production `build` command (remember webpack?).
- Deploys to an S3 bucket.
- Makes you website available on the internet.

AWS is a bit tricky and often you end up in pretty specific configuration. Thankfully, there's [this](https://www.youtube.com/watch?v=zkNdHv1iMgY&ab_channel=BetterCodingAcademy) very good guide from 'Better Coding Academy' which can help us along the way.

You'll have to do a few tweaks to make it work properly (for example taking into account that you use `npm`, not `yarn`).

For those of you who want to look closer at CI/CD on AWS specifically, [here's](https://d1.awsstatic.com/whitepapers/DevOps/practicing-continuous-integration-continuous-delivery-on-AWS.pdf) a pdf in which AWS discusses best practices.

---

Good luck and have fun!
