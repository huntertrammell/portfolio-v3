<template>
    <div class="projects">
        <div class="container">
            <h4 class="title-text">Hover over a project to see the title, click the title to visit the repository on GitHub for further information/demo.</h4>
            <div class="project-grid mt-4 mx-auto">
                <div class="project-item m-1" 
                v-for="project in projects"
                :key="project.title">
                    <img :src="project.image" :alt="project.title" height="200px" width="200px">
                    <div class="overlay">
                        <div class="text">
                            <a class="title-text" :href="project.url">{{ project.title }}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            projects: [
                {
                    title: "Dragonball RPG",
                    image: "assets/images/projects/dragonball_RPG.PNG",
                    url: "https://github.com/huntertrammell/Dragonball-RPG"
                },
                {
                    title: "Videogame Trivia",
                    image: "assets/images/projects/trivia_Game.PNG",
                    url: "https://github.com/huntertrammell/Trivia-Game" 
                },
                {
                    title: "GIF Generator",
                    image: "assets/images/projects/gif_Generator.PNG",
                    url: "https://github.com/huntertrammell/GIPHY-API"
                },
                {
                    title: "Train Scheduler",
                    image: "assets/images/projects/train_Scheduler.PNG",
                    url: "https://github.com/huntertrammell/Train-Scheduler"
                },
                {
                    title: "Films with Friends",
                    image: "assets/images/projects/films_With_Friends.PNG",
                    url: "https://github.com/huntertrammell/Films-With-Friends"
                },
                {
                    title: "KEViN a CLI bot",
                    image: "assets/images/projects/LIRI.PNG",
                    url: "https://github.com/huntertrammell/LIRI-node-app"
                },
                {
                    title: "Bamazon",
                    image: "assets/images/projects/bamazon.PNG",
                    url: "https://github.com/huntertrammell/bamazon"
                },
                {
                    title: "Friend Finder",
                    image: "assets/images/projects/friendfinder.PNG",
                    url: "https://github.com/huntertrammell/friendfinder"
                },
                {
                    title: "Expense.",
                    image: "assets/images/projects/expense.PNG",
                    url: "https://github.com/huntertrammell/Expense"
                }
            ]
        }
    }
}
</script>

<style>
.project-item {
    height: 200px;
    width: 200px;
    position: relative;
    float: left;
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgb(255, 99, 132);
}

.project-item:hover .overlay {
  opacity: 1;
}
a.title-text:hover {
    text-decoration: none;
    color:  white;
}
.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
