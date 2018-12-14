<template>
  <div id="about" class="container-fluid about">
        <div class="row mx-4 mt-2 pt-2">
            <div class="col-lg-3">
                <h1 class="title-text pb-0 mb-0">Full-Stack Developer</h1>
            </div>
            <div class="col-lg-9 mb-2">
                <p class="title-text text-left">I am a Full-Stack Web Developer with a passion for crafting aesthetically pleasing user interfaces. 
                    Previous management history has attested that I am proficient working alone, with a team, and am comfortable taking lead in any situation. 
                    Enjoys graphic design and expanding personal knowledge to develop new perspectives on implementation and user interaction.
                </p>
            </div>
        </div>
        <div class="row mx-4">
            <div class="col-lg-4 col-sm-12">
                <div class="card bg-transparent">
                    <h3 class="card-header bg-dark title-text">Education</h3>
                    <div class="card-body project-info pt-2 pb-2">
                        <ul class="title-text text-left mb-2">
                            <li>KU Coding Bootcamp
                            <ul>
                                <li>2018-Present</li>
                                <li>MERN Stack</li>
                            </ul>                            
                            </li>
                            <li>JCCC A+ Certification Training Course
                            <ul>
                                <li>2018</li>
                                <li>CompTIA 901/902</li>
                            </ul>                            
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="card bg-transparent mt-4">
                    <h3 class="card-header bg-dark title-text">Job Experience</h3>
                    <div class="card-body project-info pt-2 pb-2">
                        <ul class="title-text text-left">
                            <li>AMC Theatres
                                <ul>
                                    <li>2016-Present - Help Desk Analyst 1</li>
                                    <ul>
                                        <li>Provide remote support to theatres across the country</li>
                                        <li>Troubleshoot POS systems and Servers</li>
                                        <li>Work with vendors to provide hardware and software support where needed</li>
                                    </ul>
                                    <li>2014-2016 - Theatre Manager</li>
                                    <ul>
                                        <li>Manage food cost and conduct inventory counts</li>
                                        <li>Create weekly schedule tailored to projected attendance</li>
                                        <li>Support associates to ensure a positive work environment and guest experience</li>
                                    </ul>
                                </ul>                            
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-sm-12">
                <div class="card bg-transparent">
                    <h3 class="card-header bg-dark title-text">Skills</h3>
                    <div class="card-body project-info pt-2 pb-2">
                        <div id="content">
                            <canvas ref="chart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from 'chart.js';

export default {
    mounted() {
        var chart = this.$refs.chart;
        var ctx = chart.getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['HTML', 'Javascript', 'CSS'],
                yLabels: ['Expert', 'Advanced', 'Intermidiate', 'Beginner', ''],
                datasets: [{
                    label: 'Skills',
                    data: [50, 40, 40],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                    ],
                    borderWidth: 1
                }]
            }
        });
    }
}
</script>

<style>
.skill-rank {
    list-style-type: none;
}
</style>
