const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            $("#posts").append(`<div class="post id="${post.id}" >${post.text}<i onclick=delPost('${post.id}') class="fas fa-trash-alt"></i><input type="text" placeholder="Add comment" id="${post.id}" class="inputCom" ><div  class="postCom" onclick=addCom('${post.id}') >Add comment</div></div> `)
            for (let c of post.comments) {
                $("#posts").append(`<div class="comments" id='${c.id}'>${c.text}<i onclick=delCom('${post.id}','${c.id}') class="fas fa-minus-circle"></i>`)
            }
        }
        
    }
    return {
        renderPosts:renderPosts
    }
    


}
Renderer()








