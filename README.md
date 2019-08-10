# IT Early Talent Training Team Project
<p>
for Ally Financial Early Talent Orientation, lead by Galvanize, Summer 2019
</p>

<h2>Team Allyance</h2>
<!--<p>
</p>-->

<h3>Invoicify Web-App Front-End</h3>
<h4>Challenge: Implement new feature to existing invoice software with limited functionality.</h4>

<h1>Improvements</h1>
<p>
<li>
1. multiple user roles
</li>
<li>
2. due date and payment status handling
</li>
<li>
3. modern user interface improvements
</li>

</p>
<h2>
<img src="https://github.com/haroldhyte/invoicify-frontend/blob/master/screenshots/home.png" />
<p>
homepage
<br>
</p>
<img src="https://github.com/haroldhyte/invoicify-frontend/blob/master/screenshots/admin.png" />
<p>
admin or employee view
</p>
<br>
<img src="https://github.com/haroldhyte/invoicify-frontend/blob/master/screenshots/client.png" />
<p>
client view
</p>

<h1>Technical Details</h1>
<h2>Associated Code</h2>
<a href="https://github.com/jawitzke/invoicify">Back-End Code</a>
<br>
<a href="https://github.com/erics273/invoicify">Original Back-End Code</a>
<br>
<a href="https://github.com/erics273/invoicify-frontend-final">Original Front-End Code</a>

<h2>Configuration for Development Environment</h2>
<p>
<li>
1. npm install -g @angular/cli
</li>
<li>
2. npm install -g angular-cli-ghpages
</li>
</p>

<h2>Configuration for GitHub Pages</h2>
<h4>In the Cloned Repository:</h4>
<p>
<li>
1. npm install
</li>
</p>

<h2>Deploying to GitHub Pages</h2>
<h4>Locally, for Testing</h4>
<p>
<li>
1. npm start
</li>
</p>
<p>
NOTE: this will run the local frontend at localhost:4200. this also requires that data-service.ts be reconfigured to use a running local backend. the local backend should be running at localhost:8080/api/
</p>

<h4>In Desired Branch:</h4>
<p>
<li>
1. ng build
</li>
<li>
2. ngh
</li>
</p>
<p>
NOTE: this automatically generates and pushes a git commit to the gh-pages branch. if the gh-pages branch is not yet created, this will automatically configure it
</p>
