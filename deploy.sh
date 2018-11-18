#!/bin/sh
hugo

rm ../jnelssonsmith.github.io/404.html
rm -rf ../jnelssonsmith.github.io/categories
rm -rf ../jnelssonsmith.github.io/images
rm ../jnelssonsmith.github.io/index.html
rm -rf ../jnelssonsmith.github.io/js
rm -rf ../jnelssonsmith.github.io/resume
rm -rf ../jnelssonsmith.github.io/tags
rm -rf ../jnelssonsmith.github.io/blog
rm -rf ../jnelssonsmith.github.io/css
rm -rf ../jnelssonsmith.github.io/img
rm ../jnelssonsmith.github.io/index.xml
rm -rf ../jnelssonsmith.github.io/projects
rm ../jnelssonsmith.github.io/sitemap.xml

cp -a ./public/. ../jnelssonsmith.github.io/