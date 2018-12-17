<template>
  <div id="about" class="container-fluid about">
        <div class="row mb-4 mt-0 pt-0">
            <div class="col mx-4">
                <h5 class="title-text text-center">
                    I am a Full-Stack Web Developer with a passion for crafting aesthetically pleasing user interfaces. 
                    Previous management history has attested that I am proficient working alone, with a team, and am comfortable taking lead in any situation. 
                    Enjoys graphic design and expanding personal knowledge to develop new perspectives on implementation and user interaction.
                </h5>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-sm-12">
                <div class="card bg-transparent">
                    <h3 class="card-header bg-dark title-text">Education</h3>
                    <div class="card-body project-info pt-2 pb-2">
                        <ul class="title-text text-left mb-2 pl-0 ml-0">
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
                <div class="card bg-transparent my-4">
                    <h3 class="card-header bg-dark title-text">Job Experience</h3>
                    <div class="card-body project-info pt-2 pb-2">
                        <p class="title-text text-left">AMC Theatres</p>
                        <ul class="title-text text-left pl-0 ml-0">
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
                    </div>
                </div>
            </div>
            <div class="col-lg-8 col-sm-12 mb-4">
                <div class="card bg-transparent">
                    <h3 class="card-header bg-dark title-text">Skills</h3>
                    <div class="card-body graph-card project-info">
                        <div id="content" class="graph">
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
        Chart.defaults.global.defaultFontColor = 'white'
        Chart.defaults.global.defaultFontFamily = "'Josefin Sans', sans-serif"
        var chart = this.$refs.chart;
        var ctx = chart.getContext("2d");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ['HTML', 'Javascript', 'CSS', 'Node.js', 'Express', 'Vue.js', 'MySQL', 'Firebase', 'MongoDB', 'React.js', 'Photoshop', 'Git'],
                datasets: [{
                    label: 'Skill Level',
                    data: [4, 4, 4, 3, 2, 3, 2, 3, 1, 1, 2, 3, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)',
                        'rgba(255, 99, 132, 0.75)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                legend: {
                    position: 'bottom',
                },
                hover: {
                    mode: 'label'
                },
                scales: {
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: ''
                        }
                    }],
                    xAxes: [{
                        display: true,
                        position: 'top',
                        scaleLabel: {
                            display: true,
                            labelString: ''
                        },
                        ticks: {
                            min: 0,
                            max: 4.25,
                            stepSize: 1,
                            callback: function(label, index, labels) {
                                switch (label) {
                                case 0:
                                    return '';
                                case 1:
                                    return 'Beginner';
                                case 2:
                                    return 'Intermidiate';
                                case 3:
                                    return 'Advanced';
                                case 4:
                                    return 'Expert';
                                case 5:
                                    return '';
                                }
                            }
                        },
                        gridLines: {
                        display: false
                        }
                    }]
                }
            }
        });
    }
}
</script>

<style>
.title-text {
    list-style-type: none;
}
#content {
    position: relative;
    margin: auto;
    height: 100%;
    width: 100%;
}
@media screen and (max-width: 767px) {
    .about {
      padding-top: 25px;
    }
    .graph-card {
        overflow-x: scroll;
    }
    .graph {
        position: relative !important;
        height: 500px !important;
        width: 1000px !important;
    }
    canvas {
        height: 100% !important;
        width: 100% !important;
    }
    ::-webkit-scrollbar {
        height: 5px;
    }
}
</style>
