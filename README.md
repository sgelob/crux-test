# Why

Because web performance matters!

# What

Compare web performance metrics of your website against competiton, using the scores from PageSpeed Insights API. You can compare First Contentful Paint (FCP), DOM Content Loaded (DCL) and overall scores in percentage.

# How to get this working

- In the root of this project, create a "settings" folder
  - In this folder, create a file called "api-key" containing the google API key
  - In this folder, create files "home-urls.js", "category-urls.js", "product-urls.js" and "site-names.js" containing something similar to this >> https://gist.github.com/akmur/caf80ae7f1b8643cb160c49dfc47defa
- Install node on your machine if you don't have it already
- Run "npm install" in your terminal
- Run "npm run start" to start the server
- Visit in your browser http://localhost:3333/

If you have a different number of site to compare, you need to change the "values.slice" parameters inside the routes/index.js

# To-do

- Compare also the pageStats for every added website
