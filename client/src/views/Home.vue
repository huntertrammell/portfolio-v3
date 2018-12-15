<template>
  <div class="home">
    <div id="intro" class="intro container-fluid">
        <div class="row summary animated mx-2">
            <div class="col-lg col-sm-12">
                <h2 class="title-text">Full-Stack Web Developer</h2>
                <h6 class="title-text pb-4">expert problem solver and imaginative designer</h6>
                <div class="text-center">
                    <img class="profilePic" src="assets/images/hunterPic.png" alt="Hunter Trammell">
                </div>
                <h4 class="title-text pt-4 crop-cont-sm">
                    <a class="btn btn-projects" href="/about">Get To Know Me</a>
                </h4>
            </div>
            <div class="col-lg col-sm-12 crop-cont-sm">
                <h2 class="title-text">Passionate About Coding</h2>
                <h6 class="title-text pb-4">the largest <i>'room'</i> in the world is the <i>'room'</i> for improvement</h6>
                <div class="fullStack pt-4 pb-4">
                    <img class="img-left img-1 img-responsive animated" src="assets/images/icons/html.png" alt="html" data-img="HTML">
                    <img class="img-inner img-2 img-responsive animated" src="assets/images/icons/firebase.png" alt="css" data-img="Firebase">
                    <img class="img-inner img-3 img-responsive animated" src="assets/images/icons/nodejs.png" alt="firebase" data-img="Node.js">
                    <img class="img-inner img-4 img-responsive animated" src="assets/images/icons/JSON.png" alt="node.js" data-img="JSON">
                    <img class="img-inner img-5 img-responsive animated" src="assets/images/icons/git.png" alt="git" data-img="Git">
                    <img class="img-inner img-6 img-responsive animated" src="assets/images/icons/css.png" alt="JSON" data-img="CSS">
                    <img class="img-right img-7 img-responsive animated" src="assets/images/icons/javascript.png" alt="javascript" data-img="Javascript">
                </div>
                <h5 class="title-text caption animated pt-4 pb-4">Javascript</h5>
                <h4 class="title-text pt-4">
                    <a class="btn btn-projects" href="/portfolio">Explore Projects</a>
                </h4>
            </div>
            <div class="col-lg col-sm-12 crop-cont-sm">
                <h2 class="title-text">Send Me A Message</h2>
                <h6 class="title-text pb-4">i'm always open to chat</h6>
                <div class="text-center">
                    <img class="profilePic" width="180" src="assets/images/mail.png" alt="Hunter Trammell">
                </div>
                <h4 class="title-text pt-4">
                    <a class="btn btn-projects" href="/contact">Say Hello</a>
                </h4>
            </div>
        </div>
        <img src="" alt="">
    </div>
  </div>
</template>

<script>
$(document).ready(function(){
    //Applies animation to the programming icons on homepage
    //used .img-X as class for all icons this will target each once on setInterval
    let imgNum = 1
    //this will target previous animation to remove class
    let prevImgNum = 0
    //function for adding and removing bounce
    function bounce(){
        //condition to tell function to reset img number
        if (imgNum==8) {
            imgNum = 1
            prevImgNum = 0
            $('.img-7').removeClass('bounce').removeClass('fadeIn')
        }
        let caption = $('.caption')
        caption.removeClass('fadeIn')
        let captionText = $('.img-' + imgNum).data('img')
        //adds X number to .img- class based on count above and is incremented at bottom
        let prevImg = $('.img-' + prevImgNum)
        prevImg.removeClass('bounce')
        let curImg = $('.img-' + imgNum)
        curImg.addClass('bounce')
        caption.text(captionText)
        imgNum++
        prevImgNum++
        caption.addClass('fadeIn')
    }
    //calling function
    setInterval(bounce, 3000)
})
export default {
  name: "home"
};
</script>

<style>
.intro {
    margin-top: 15%;
}
.img-left {
    width: 10%;
    padding-right: 4px;
}
.img-inner {
    width: 10%;
    padding-left: 4px;
    padding-right: 4px;
}
.img-right {
    width: 10%;
    padding-left: 4px;
}
.fullStack {
    text-align: center;
}
.profilePic {
    border-radius: 50%;
    box-shadow: 2px 2px 4px black;
}
.summary {
    position: relative;
    top: -100px;
    padding-bottom: 10px;
    animation-delay: 250ms;
    animation-duration: 1.5s;
}
.title-text {
    color: white;
    text-align: center;
    text-shadow: 2px 2px 4px black;
    font-family: 'Do Hyeon', sans-serif;
}
.sub-text {
    color: white;
    text-align: center;
    text-shadow: 2px 2px 4px black;
    font-size: .75em;
}
.btn-projects {
    color: white;
    text-shadow: 2px 2px 4px black;
    background-color: #12639c;
    box-shadow: 2px 2px 4px black;
}
.btn-projects:hover {
    text-decoration: none;
    box-shadow: 0 0 10px white;
    color: white;
}
@media screen and (max-width: 767px) {
    .crop-cont-sm{
        display: none;
    }
    .home {
      padding-top: 150px;
    }
}

</style>

