const Tweeter = function () {
    let posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    const postIdCounter = function () {
        return posts.length

    }


    const commentIdCounter = function () {
        let comCount = 0
        for (i = 0; i < posts.length; i++) {
            comCount += posts[i].comments.length
        }
        return comCount
    }

    const getPosts = function () {
        return posts
    }

    const addPost = function (text) {
        newID = posts.length+1
        newPost = {
            text: text,
            id: "p" + newID,
            comments: []
        }
        posts.push(newPost)

    }

    const removePost = function (postID) {
        for (let i=0 ; i<posts.length ; i++ ){
            if (posts[i].id==postID){
                posts.splice(i, 1)

            }
        }
        

    }

    const addComment = function (text, postID) {
        console.log(text);
        newComid = commentIdCounter() + 1
        newCom = {
            id: "c" + newComid,
            text: text
        }
        for (i = 0; i < posts.length; i++) {
            if (posts[i].id == postID) {
                posts[i].comments.push(newCom)
            }
        }


    }

    const removeComment = function (postID, comID) {
        console.log(postID,comID);
        for (i = 0; i < posts.length; i++) {
            if (postID == posts[i].id) {
                console.log("hu");
                for (j = 0; j < posts[i].comments.length; j++) {
                    if (comID == posts[i].comments[j].id) {
                        console.log(posts[i].comments[j]);

                        posts[i].comments.splice(j,1)

                    }
                }
            }

        }

    }
    return {

        postIdCounter: postIdCounter,
        commentIdCounter: commentIdCounter,
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
    
}



// const tweeter = Tweeter()
// console.log(tweeter.postIdCounter());
// console.log(tweeter.commentIdCounter());
// tweeter.addPost("hello")

// // console.log(tweeter.getPosts());
            // tweeter.removePost("p1")
// tweeter.addComment("p2", "myCom")
// tweeter.getPosts()

// console.log(tweeter.getPosts());

// const tweeter = Tweeter()
// tweeter.getPosts()

// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// //============================
// //============================
// //Stop here
// //Make sure everything works. Then keep going
// //============================
// //============================

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}