var postAmount;
var postActive;
var postsSource = "https://raw.githubusercontent.com/RanDByyp/randbyyp.github.io/master/posts.json"

window.addEventListener('load', (event) => 
{
    initializeMenu();
    initializeNav();
});

function initializeMenu()
{
    let blogNavOptions = document.getElementById('blog-nav-options');

    //Grab JSON-Content and do:
    //Add a Button to the Dropdown-Menu for every 'post' in the JSON file
    fetch(postsSource)
    .then(response => response.json())
    .then(json => 
    {
        postAmount = json.length;
        postActive = postAmount-1;
        for(let i = 0; i < json.length; i++)
        {
            var btn = document.createElement("BUTTON");
            btn.innerHTML = json[i].title;
            btn.classList.add("dropdown-button-post");
            btn.id = [i];
            btn.addEventListener('click',function()
            {
                postActive = i;
                blogPostToggle();
            })
            blogNavOptions.appendChild(btn);
        }
    });
}

function initializeNav()
{        
    let postFirst = document.getElementById('post-first');
    let postPrevious = document.getElementById('post-previous');
    let postNext = document.getElementById('post-next');
    let postLast = document.getElementById('post-last');

    //Set and Apply first/previous/next/latest 'post' 
    //when each of their respective buttons is clicked, if able.
    postFirst.addEventListener('click',function()
    {
        postActive = 0;
        blogPostToggle();
    })

    postPrevious.addEventListener('click',function()
    {
        if (postActive > 0)
        {
            postActive -= 1;
            blogPostToggle();
        }
    })

    postNext.addEventListener('click',function()
    {
        if (postActive < postAmount-1)
        {
            postActive += 1;
            blogPostToggle();
        }
    })

    postLast.addEventListener('click',function()
    {
        postActive = postAmount-1;
        blogPostToggle();
    })

    blogPostToggle();
}




function blogPostToggle()
{
    fetch(postsSource)
    .then(response => response.json())
    .then(json => JsonApplyData(json[postActive])
    );
}

function JsonApplyData(post)
{
    let title = document.getElementById('title');
    let date = document.getElementById('date');

    title.innerText = post.title;
    date.innerText = post.date;
    JsonApplyTxt(post.file);  
}

function JsonApplyTxt(link)
{
    fetch(link)
    .then(response => response.text())
    .then(text =>
    {
        let textDiv = document.getElementById('text');
        textDiv.innerHTML = text;
    }
    );        
}