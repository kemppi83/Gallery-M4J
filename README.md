# Salt Gallery - From development to production

## A. Scenario

When working as a fullstack professional software developer you're not only expected to be able to build a web application which is accessible on `localhost:3000` if you run `npm run dev` - you'll be expected to know how to work on your code together with others in your team and how to make it ready for production. One way of structuring this work is by creating custom continuous integration (CI) and continuous delivery (CD) workflows in your team. That's what we'll do.

## B. What you will be working for three days

For the next three days we'll be creating an Image gallery application which will display images from Unsplash based on search queries. It will be built as a Single Page Application (SPA). We will however not utilize any frameworks nor libraries such as React, Vue or Angular. We'll also use a CSS extension language called SCSS.

This assignment is however not only about developing the application. It's equal parts about creating a production build pipeline which we'll achieve by follow a CI/CD workflow. This will include integrating many different software development tools (webpack, Babel, Github Actions, AWS Codepipeline just to name a few).

By the end of the following three days we want you to:

- Be able to create a frontend vanilla JavaScript application from scratch.
- Understand the concept of **the view depending on the state**.
- Start to get comfortable with SCSS.
- Understand Webpack and be able to set it up in a project for bundling multiple JavaScript files and SCSS.
- Understand why we need Babel for code compilation.
- Be comfortable with setting up your own Github repository and working on multiple branches.
- Understand what Github Actions are and how they can be used in a CI setup.
- Get comfortable with the Amazon Web Services platform and in particular the **Codepipeline** and **S3** services. You should also understand how these can be used in a CI/CD pipeline.
- Understand how we can deploy our application(s).

## C. Lab instructions

This lab is supposed to span for three day, divided as follows:

- Day 1: Develop a MVP (minimum viable product) of your SPA.
- Day 2: Set up your CI/CD pipeline with Github Actions and AWS and configured in a way which suits you.
- Day 3: Continue working on your MVP, perfecting it. At this point you should have a well-functioning CI/CD-system setup. Also, if time allows for it, create a backend service through which you make your API calls.

---

Good luck and have fun!
