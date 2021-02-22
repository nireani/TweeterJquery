const tweeter = Tweeter()
const renderer = Renderer()
renderer.renderPosts(tweeter.getPosts())

// const post = function () {


// }


$('#post').click(function(){

    console.log("hi");
    tweeter.addPost($("#input").val())
    renderer.renderPosts(tweeter.getPosts())


})

const addCom = function (postID) {
    // console.log(postID);
    // const x = $(this).closest('.post').get()
    // console.log(x);
    tweeter.addComment($(".inputCom").val(),postID)
    renderer.renderPosts(tweeter.getPosts())

}

const delPost = function (id) {
    console.log(id);
    tweeter.removePost(id)
    renderer.renderPosts(tweeter.getPosts())

}
const delCom = function (pid, cid) {
    console.log(cid);
    tweeter.removeComment(pid, cid)
    renderer.renderPosts(tweeter.getPosts())

}


