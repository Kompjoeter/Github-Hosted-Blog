# Github-Hosted-Blog

You can also read this readme live on the deployed project page: https://randbyyp.github.io/Github-Hosted-Blog/

# Description
*This is a GitHub-hosted blog made by RanDByyp aka Joran de Boer.*

Back when I was working on my website, I was considering adding a blog to it. I quickly realized that adding lengthy blogposts to my HTML wasn't gonna cut it. I needed a server to store all my blogposts, but I wasn't really sure what that actually meant or how it worked. Since it was just an experiment, I started looking into easier (And free) ways to do this.

Eventually I stumbled upon the javascript 'fetch' function and was already familiar with JSON and deploying projects from Github. After doing some prototyping I came up with an idea.

I decided to store everything in one GitHub repository.

The content of the blogposts is stored in .txt's, a .json file holds the data of the blogposts like 'title','date' and an url to the .txt file. This all is applied to my webpage and is navigable with a menu.

The project can still be optimized, but it works and for a simple blog it does the trick.

In the future I might look into adding 'sorting of blogposts' by date, alphabet or even category and make it so that the ordering of the blogposts on the webpage is not dependent on the order of the objects in the json array.

# How does it work?

To display a blogpost, the program grabs a .json file from its repository using 'fetch'. The json file consists of an array filled with objects, each object containing a 'title', 'date' and 'file'.

The **'title'** is a simple string with the title of the post. It gets applied to the correct HTML element.
Same goes for **'date'**, which is a simple string with the date of the post. It gets applied to the correct HTML element.
The **'file'** holds a string with an url which links to a .txt file in a folder inside the project's repository.

This .txt file holds the text for the blog post (The text you are reading right now!), so the actual post content. It is applied to the correct HTML element as if it was actual HTML code using 'innerHTML'.

For every blogpost (So, for every object in the the array in the .json file) a button is created in the menu displaying the title of said blogpost.

Furthermore, the blogpsots can be navigated with 'first', 'previous', 'next' and 'last' buttons, if able.

# Usage

To use this project to make a blog of your own you'll need the following files from this repository:

- **index.html**
- **main.css**
- **blog-control.js**
- **posts.json**
- **a folder with blogposts in .txt**

*Of course you are free to edit the main.css to fit your own preferences.*

# Creating the blogposts

Write some blogposts and save them as a .txt. The filename can be anything but to keep things organized it helps if it's immediately recognizable as a specific blogpost. Each blogpost .txt should have a unique name.

You can use HTML tags inside your blogposts .txt and they will be applied as such. You don't have to add a title or date at the top of your blogpost. This will be done automatically, as they are read from your posts.json file.

Upload the .txt files to your github repository, preferably in a folder named 'blogposts'.

**!- Even if you deploy your blog from gh-pages, you only need to upload your blogposts .txt's to your master branch. You can simply link to them with an url as I will explain below.**

# Setting up the .json file

As I've stated before, every object in the array represents a blogpost. It has a 'title' (string), a 'date' (string) and 'file'(string). New blogposts are added at the bottom of the array.

Edit the title and date to your liking, but make sure the 'file' links to the correct url holding the .txt that contains the correct content for your blogpost.

Make sure the url in 'file' is a 'raw' url, otherwise the 'fetch' operation to grab the blogpost .txt will fail.

When you navigate to the .txt file in your repository, there should be a button titled 'raw' somewhere on the screen, click it and copy the url in your adress-bar. Post the copied link behind "file":, in your .json file. Make sure the url is inbetween "".

Make sure your posts.json's formatting looks something like this:
```
[
	{
		"title": "Description",
		"date":"2020/08/18",
		"file": "https://raw.githubusercontent.com/RanDByyp/Github-Hosted-Blog/master/blogposts/2020-08-18-description.txt"
	},
	{
		"title": "Usage",
		"date":"2020/08/18",
		"file": "https://raw.githubusercontent.com/RanDByyp/Github-Hosted-Blog/master/blogposts/2020-08-18-usage.txt"
	},
	{
		"title": "Contact",
		"date":"2020/08/18",
		"file": "https://raw.githubusercontent.com/RanDByyp/Github-Hosted-Blog/master/blogposts/2020-08-18-contact.txt"
	}
]
```

After you have edited the post.json to contain all your blogpost-data, upload it to your repository.

Now go into the blog-control.js file, and at the top of the file change the 'postsSource' variable so that it holds a string of the raw-url that links to your posts.json file in your repository.

**!- Even if you deploy your blog from gh-pages, you only need to upload your posts.json to your master branch. You can simply link to it with the raw-url, as just explained.**

# Finishing up

Finally upload the index.html, main.css and blog-control.js to your repository and deploy the page to see if things are working correctly.

If you want to change which blogpost is displayed on page-load (Either the first or last post in the .json array), go into the blog-control.js file, and at the top of the file change the variable 'latestPostFirst' to either 'true' or 'false'.

If you want add more blogposts in the future, you simply have to write content for it in a .txt. Upload the .txt to your 'blogposts' folder in your repository and add a new object to the bottom of the array in your posts.json which will hold the title, date and raw-url of your new blogpost.

Good luck!

# Credits

This program was made by Joran de Boer AKA RanDByyp.

# License

This program is written by me (Joran de Boer AKA RanDByyp) and uses the **MIT License**:

Copyright 2020 Joran de Boer AKA RanDByyp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Contact

[Twitter](https://twitter.com/RandbYyp)<br>[Website](https://randbyyp.github.io/)
