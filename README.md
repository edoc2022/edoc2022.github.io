# EDOC 2022

This repository contains the sources for EDOC 2022 website. This website is built on top of the template __gatsby-starter-grayscale__, by Anubhav Srivastava.

## Install and Deploy

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

Then you can run it by:

```sh
cd edoc2022.github.io
npm install
npm run build
npm run serve
```

This website is configured to be served under the path `/2022`, so to access it during development visit `localhost:9000/2022`. Also, remember to always use Gatsby's `Link` component to create links, instead of the bare HTML tags.

To deploy the site, replace the contents of the folder `/2022` on your website's server with the contents of the folder `/public` on the repository. Remember that it is necessary to execute `npm run build` to update this folder's contents.
