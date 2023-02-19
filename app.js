const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const usersUrl = `https://jsonplaceholder.typicode.com/users/`

async function getPosts() {
    const res = await fetch(postsUrl);
    const posts = await res.json();
    console.log(posts)

    return posts;
}

async function getUser(userId) {
    const res = await fetch(usersUrl + userId);
    const user = await res.json();
    return user;
}


function renderPost(post) {
    const section = document.querySelector('.posts');

    const postDiv = document.createElement('div');

    const postTitle = document.createElement('h2');
    postTitle.innerText = post.title;

    postTitle.classList.add('post__header');

    const postAuthor = document.createElement('h4');
    postAuthor.classList.add('post__author')

    getUser(post.userId).then(user => {
        postAuthor.innerText = 'Written by ' + user.name;
    })
    

    const postBody = document.createElement('div');
    postBody.innerText = post.body;


    postDiv.appendChild(postTitle);
    postDiv.appendChild(postAuthor);
    postDiv.appendChild(postBody);

    postDiv.classList.add('post');

    section.appendChild(postDiv);
}


async function renderPosts() {
    const posts = await getPosts();

    posts.forEach(post => renderPost(post));
}


renderPosts();