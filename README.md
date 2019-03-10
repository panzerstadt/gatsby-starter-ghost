# building a Gatsby + Ghost blog + static site

#### There are a few pieces to this puzzle

- Frontend - Gatsby + static site generator with webhook integration (e.g. Netlify)
- CMS / backend - Ghost + hosting service for your Ghost instance (e.g. Now.sh)

# Steps

1. GATSBY - clone / build Gatsby site (gatsby-starter-ghost for all the defaults setup for you)
2. GHOST - clone / build Ghost site (using docker )
3. GHOST - go to your Ghost site `https://your-ghost-site.now.sh/ghost` and sign in
4. GHOST - set your Ghost site to private (to prevent confusion as to where is the blog)
5. GATSBY - on your Gatsby Netlify, go to `site settings > build & deploy > build hooks` and copy the URL
6. GHOST - go back to your Ghost site and go ti `integrations > + Add custom integration`, and name it something nice (e.g. netlify connection)
7. GHOST - click on `+ Add webhook`, give it a name, under event select `Site changes (rebuild)`, and paste your URL (that you copied from Netlify)
8. GHOST - now copy the `Content API Key` and `API URL` from `integrations`
9. GATSBY - go to your gatsby repo (created by Netlify, so you might have to `git clone`) and go to `.ghost.json`, and replace the `apiUrl` and `contentApiKey` with the ones from Ghost.
10. GATSBY - `git add .`, `git commit -m "integration"`, `git push origin master`
11. GATSBY - go to your Gatby Netlify and look at your `Production deploys`. you should see something happening (Netlify rebuilds based on your updates on `master`). Your edits get built immediately on `git push origin master`.
12. GHOST - try creating a new post, and publishing it.
13. GATSBY - your Netlify's `Production deploys` should have been triggered by the Ghost's webhook.
14. IF YOUR GHOST CONTENT UPDATE REBUILDS YOUR GATSBY STATIC SITE, YOU'RE DONE.
15. GATSBY - get a custom domain for your client and link it with your Netlify deployment so it's not called `https://determined-jackson-941c9b.netlify.com/` or something like that.
16. start editing your Gatsby pages based on your client's design requirements!
17. get a fully custom website in Gatsby + Blog integration with all the Blogging features that your client will be happy about.

# Gatsby

- with gatby-starter-ghost, hosted on netlify
- https://www.gatsbyjs.org/starters/TryGhost/gatsby-starter-ghost/

```
Easiest way
1. go here: https://www.gatsbyjs.org/starters/TryGhost/gatsby-starter-ghost/
2. click on "Try this starter"
3. follow instructions.
4. DONE.
```

# Ghost

- with docker, hosted on now.sh
- https://medium.com/joelachance/setup-ghost-with-docker-in-under-a-minute-202199db49c1
- using docker allows this deployment to be flexible (you can deploy docker on a lot of other places)

# a far easier and more flexible way

1. build your react website anyhow (probably on pure react)
2. connect to ghost as an api, perform POST requests for data (ghost still has to be hosted separately)
3. show your data however you want it on your react website
