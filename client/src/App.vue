<template>
  <div id="app">
      <nav class="navbar navbar-expand-lg navbar-light bg-transparent">
        <a class="navbar-brand" href="#">Hunter Trammell</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <router-link class="nav-link" to="/">Home</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/portfolio">Portfolio</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            </ul>
        </div>
      </nav>
    <transition :name="transitionName"
                mode="out-in"
                @beforeLeave="beforeLeave"
                @enter="enter">
        <router-view/>
    </transition>
  </div>
</template>
<script>
const DEFAULT_TRANSITION = 'fade';
    export default {
        name: 'App',
        data() {
            return {
            prevHeight: 0,
            transitionName: DEFAULT_TRANSITION,
            };
        },
        created() {
            this.$router.beforeEach((to, from, next) => {
                let transitionName = to.meta.transitionName || from.meta.transitionName;

                if (transitionName === 'slide') {
                const toDepth = to.path.split('/').length;
                const fromDepth = from.path.split('/').length;
                transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
                }

                this.transitionName = transitionName || DEFAULT_TRANSITION;

                next();
            });
        },
        methods: {
            beforeLeave(element) {
            this.prevHeight = getComputedStyle(element).height;
            }
        }
    }
</script>

<style>
html {
    overflow: hidden;
    height: 100%;
}
body {
    height: 100%;
    overflow-y: auto;
    background-image: linear-gradient(to top right, #1ed9ea, #8518a5);
}
.navbar-brand, .nav-link {
    color: white !important;
    font-family: 'Josefin Sans', sans-serif;
}
.nav-link:hover {
    text-shadow: 2px 2px 4px black;
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: transparent; 
}
::-webkit-scrollbar-thumb {
  background: #343a40; 
}
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
