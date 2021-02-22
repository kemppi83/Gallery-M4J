# Salt Gallery - Day 3 - Perfecting your application and creating a backend service (if you have time)

## A. Scenario

We've now created our MVP and our CI/CD pipeline is up-and-running. Now it's time to continue working within our workflow - perfecting the application's functionality, styling it, writing more tests etc.

If you're content with your frontend application, move on to create a backend service.

## B. Suggestions for the backend service (the backend is optional)

One reason why we want to have a backend service is that we want to make our API calls through our own endpoint. This way, we can hide our API key by using something like [dotenv](https://www.npmjs.com/package/dotenv) and also set up our CORS so that only certain clients can access our backend.

We won't specifiy exactly how you should build your backend - you already have the tools (Node.js, Express, REST, GraphQL). You could also try out `lambda functions` (we'll look at these in more detail later though) through Netlify functions or directly via AWS [see more here](https://docs.netlify.com/functions/overview/).

Now that you know how to set up CI with Github actions, try to do that for your backend as well. However, you can't deploy a backend server to `S3`. If you want to deploy it, here are some suggestions:

- [Heroku](https://devcenter.heroku.com/articles/deploying-nodejs).
- [Elastic Beanstalk on AWS](https://aws.amazon.com/elasticbeanstalk/) - **NOTE that this one might generate costs**

---

Good luck and have fun!
