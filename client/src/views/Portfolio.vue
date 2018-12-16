<template>
    <div class="projects">
        <div class="container">
            <div class="project-grid mt-4">
                <div class="project-item m-1" 
                v-for="project in projects">
                    <a  :href="project.url">
                        <h3 class="project-title text-white position-absolute text-center mx-auto mt-4 pt-4">{{ project.title }}</h3>
                        <img :src="project.image" :alt="project.title" height="200px" width="200px">
                    </a>
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
.project-title {
    display: none;
}
.project-item:hover .project-title {
    display:inline;
}
.project-item:hover img{
    opacity: 0.2;
}
.project-item {
    height: 200px;
    width: 200px;
    position: relative;
    float: left;
    background-color: aqua;
}
</style>
