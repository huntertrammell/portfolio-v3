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
    <router-view/>
  </div>
</template>

<style>
html {
    overflow: hidden;
    height: 100%;
}
body {
    height: 100%;
    overflow: auto;
    background-image: linear-gradient(to top right, #1ed9ea, #8518a5);
}
.navbar-brand, .nav-link {
    color: white !important;
}
.nav-link:hover {
    text-shadow: 2px 2px 4px black;
}
@media screen and (max-width: 767px) {
    .navbar{
        padding-bottom: 150px;
    }
}
</style>
