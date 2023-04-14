const url = `https://countryapi.io/api/all?apikey=cqynJmw1OZ3b894SNRcDIJLLcc7A7sgqYX9T7PAB`
const countries = ['Canada', 'Costa Rica', 'Mali', 'Bahrain', 'ethiopia', 'France', 'Finland', 'Germany', 'Kenya', 'Nevada',
    'South Dakota', 'Sudan', 'Senegal', 'Russia', 'Philippines', 'Latvia']


const btn = document.getElementById('seebtn')

btn.addEventListener('click', generate)
var group1 = [];
var group2 = [];
var group3 = [];
var group4 = [];

function generate() {
    let v = [];
    for (var x = 0; x < 100; x++) {
        let w = Math.floor(Math.random() * 16);
        if (v.includes(countries[w])) {
            w = Math.floor(Math.random() * 16);
        }
        else {
            v.push(countries[w]);
        }
    }

    for (var j = 0; j < 4; j++) {
        var tab = document.querySelector('.lists');
        tab.innerHTML = `
        <div class=" cards card col-lg-3 " style="width: 15rem; background-color: rgb(96,114,108); margin: 10px ">
    <div class="card_cover">
        <h5 class="card-title text-white text-center m-3">---MATCH---</h5>
        <div id="container1"></div>
        <div class="card-body row">
            <p class="col-lg-6 " id="clist1"> </p>
            <p class="col-lg-6 highcharts-description">
                <input type="number" class="form-control card-1" placeholder="score-1" id="score-1" style="background: transparent;">
                &nbsp; 
                 <input type="number" class="form-control card-1" placeholder="score-2" id="score-2" style="background: transparent;">
                 &nbsp; 
                 <input type="number" class="form-control card-1" placeholder="score-3" id="score-3" style="background: transparent;">
                 &nbsp; 
                 <input type="number" class="form-control card-1" placeholder="score-4" id="score-4" style="background: transparent;">
                <br> <i class="bi bi-trophy" style="font-size: 20px"></i>                           
                 </p>
            <a href="#" class="links btn btn-success " id="g1" onclick="graph(this.id)">Analyze Graph</a>
        </div>
    </div>
</div> 

<div class=" cards card col-lg-3 " style="width: 15rem; background-color: rgb(96,114,108); margin: 10px">
    <div class="card_cover">
        <h5 class="card-title text-white text-center m-3">---MATCH---</h5>
        <div id="container1"></div>
        <div class="card-body row">
            <p class="col-lg-6 " id="clist2"> </p>
            <p class="col-lg-6 highcharts-description">
                <input type="number" class="form-control card-2" placeholder="score-1" id="score-5" style="background: transparent;">
                &nbsp;
                 <input type="number" class="form-control card-2" placeholder="score-2" id="score-6" style="background: transparent;"> 
                 &nbsp; 
                 <input type="number" class="form-control card-2" placeholder="score-3" id="score-7" style="background: transparent;">
                 &nbsp; 
                 <input type="number" class="form-control card-2" placeholder="score-4" id="score-8" style="background: transparent;">
                <br> <i class="bi bi-trophy" style="font-size: 20px"></i>
                 </p>
            <a href="#" class="links btn btn-success " id="g2" onclick="graph(this.id)">Analyze Graph</a>
        </div>
    </div>
</div> 
<div class="cards card col-lg-3 " style="width: 15rem; background-color: rgb(96,114,108); margin: 10px ">
    <div class="card_cover">
        <h5 class="card-title text-white text-center m-3">---MATCH---</h5>
        <div id="container1"></div>
        <div class="card-body row">
            <p class="col-lg-6"  id="clist3"> </p>
            <p class="col-lg-6 highcharts-description">
                <input type="number" class="form-control card-3" placeholder="score-1" id="score-9" style="background: transparent;">
                &nbsp;
                 <input type="number" class="form-control card-3" placeholder="score-2" id="score-10" style="background: transparent;">
                 &nbsp; 
                 <input type="number" class="form-control card-3" placeholder="score-3" id="score-11" style="background: transparent;">
                 &nbsp; 
                 <input type="number" class="form-control card-3" placeholder="score-4" id="score-12" style="background: transparent;">
                <br> <i class="bi bi-trophy" style="font-size: 20px"></i>
                 </p>
            <a href="#" class="links btn btn-success " id="g3" onclick="graph(this.id)">Analyze Graph</a>
        </div>
    </div>
</div>
 <div class=" cards card col-lg-3 " style="width: 15rem; background-color: rgb(96,114,108); margin: 10px ">
    <div class="card_cover">
        <h5 class="card-title text-white text-center m-3">---MATCH---</h5>
        <div id="container1"></div>
        <div class="card-body row">
            <p class="col-lg-6 " id="clist4"> </p>
            <p class="col-lg-6 highcharts-description">
                <input type="number" class="form-control card-4" placeholder="score-1" id="score-13" style="background: transparent;">
                &nbsp;
                 <input type="number" class="form-control card-4" placeholder="score-2" id="score-14" style="background: transparent;">
                 &nbsp; 
                 <input type="number" class="form-control card-4" placeholder="score-3" id="score-15" style="background: transparent;">
                 &nbsp; 
                 <input type="number" class="form-control card-4" placeholder="score-4" id="score-16" style="background: transparent;">
                <br> <i class="bi bi-trophy" style="font-size: 20px"></i>
                 </p>
            <a href="#" class="links btn btn-success" id="g4" onclick="graph(this.id)">Analyze Graph</a>
        </div>
    </div>
</div>
<a href="#" class="links btn btn-success " id="none" style="width:35%">Analyze All country</a>
`


        var wid = 0;
        var wid2 = 0;
        var wid3 = 0;
        var wid4 = 0;
        for (var i = 0; i < 16; i++) {
            wid = document.getElementById('clist1')
            wid.innerHTML += v[i] + "<br><br>";

            wid2 = document.getElementById('clist2')
            wid2.innerHTML += v[++i] + "<br><br>";

            wid3 = document.getElementById('clist3')
            wid3.innerHTML += v[++i] + "<br><br>";

            wid4 = document.getElementById('clist4')
            wid4.innerHTML += v[++i] + "<br><br>";
        }
    }
    //console.log(v) 
    var j = 0;
    for (var i = 0, j = 0; i < 16, j < 4; i++, j++) {
        group1[j] = v[i]

        group2[j] = v[++i]

        group3[j] = v[++i]

        group4[j] = v[++i]
    }
    //console.log(group1)
var x = document.getElementById('none')
x.addEventListener("click" , gall)

    function gall() {
        var c1_score1 = 0;
        var c1_score2 = 0;
        var c1_score3 = 0;
        var c1_score4 = 0;
    
        var c1_score5 = 0;
        var c1_score6 = 0;
        var c1_score7 = 0;
        var c1_score8 = 0;
    
        var c1_score9 = 0;
        var c1_score10 = 0;
        var c1_score11 = 0;
        var c1_score12 = 0;
    
        var c1_score13 = 0;
        var c1_score14 = 0;
        var c1_score15 = 0;
        var c1_score16 = 0;
    
    
        c1_score1 = Number(document.getElementById('score-1').value)
        c1_score2 = Number(document.getElementById('score-2').value)
        c1_score3 = Number(document.getElementById('score-3').value)
        c1_score4 = Number(document.getElementById('score-4').value)
    
        c1_score5 = Number(document.getElementById('score-5').value)
        c1_score6 = Number(document.getElementById('score-6').value)
        c1_score7 = Number(document.getElementById('score-7').value)
        c1_score8 = Number(document.getElementById('score-8').value)
    
        c1_score9 = Number(document.getElementById('score-9').value)
        c1_score10 = Number(document.getElementById('score-10').value)
        c1_score11 = Number(document.getElementById('score-11').value)
        c1_score12 = Number(document.getElementById('score-12').value)
    
        c1_score13 = Number(document.getElementById('score-13').value)
        c1_score14= Number(document.getElementById('score-14').value)
        c1_score15 = Number(document.getElementById('score-3').value)
        c1_score16 = Number(document.getElementById('score-16').value)
    
        
    
        var country_n1 = 0
        var country_n2 = 0
        var country_n3 = 0
        var country_n4 = 0

        country_n1 = group1[0]
        country_n2 = group1[1]
        country_n3 = group1[2]
        country_n4 = group1[3]
    
        country_n21 = group2[0]
        country_n22 = group2[1]
        country_n23 = group2[2]
        country_n24 = group2[3]
    
        country_n31 = group3[0]
        country_n32 = group3[1]
        country_n33 = group3[2]
        country_n34 = group3[3]
    
        country_n41 = group4[0]
        country_n42 = group4[1]
        country_n43 = group4[2]
        country_n44 = group4[3]
    
        Highcharts.chart('container4', {
            chart: {
              type: 'column',
              backgroundColor: '#101820FF',
            },
            title: {
              text: 'World Cup '
            },
            subtitle: {
              text: ''
            },
            xAxis: {
              type: 'category',
              labels: {
                rotation: -45,
                style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
                }
              }
            },
            yAxis: {
              min: 0,
              title: {
                text: 'points'
              }
            },
            legend: {
              enabled: false
            },
            tooltip: {
              pointFormat: 'score: <b>{point.y:.1f} pts</b>'
            },
            series: [{
              name: 'Population',
              data: [
                [country_n1,c1_score1],
                [country_n2,c1_score2],
                [country_n3, c1_score3],
                [country_n4, c1_score4],
                [country_n21, c1_score5],
                [country_n22 , c1_score6],
                [country_n23 , c1_score7],
                [country_n24 , c1_score8],
                [country_n31 , c1_score9],
                [country_n32 , c1_score10],
                [country_n33 , c1_score11],
                [country_n34 , c1_score12],
                [country_n41 , c1_score13],
                [country_n42 , c1_score14],
                [country_n43 , c1_score15],
                [country_n44 , c1_score16]
              ],
              dataLabels: {
                enabled: true,
                rotation: -90,
                color: '#FFFFFF',
                align: 'right',
                format: '{point.y:.1f}', // one decimal
                y: 50, // 10 pixels down from the top
                style: {
                  fontSize: '13px',
                  fontFamily: 'Verdana, sans-serif'
                }
              }
            }]
          }
        
          );
    }

}



function graph(req_id) {
    var c1_score1 = 0;
    var c1_score2 = 0;
    var c1_score3 = 0;
    var c1_score4 = 0;
    var country_n1 = 0
    var country_n2 = 0
    var country_n3 = 0
    var country_n4 = 0
    if (req_id == 'g1') {
        country_n1 = group1[0]
        country_n2 = group1[1]
        country_n3 = group1[2]
        country_n4 = group1[3]

        c1_score1 = Number(document.getElementById('score-1').value)
        c1_score2 = Number(document.getElementById('score-2').value)
        c1_score3 = Number(document.getElementById('score-3').value)
        c1_score4 = Number(document.getElementById('score-4').value)
    }
    else if (req_id == 'g2') {
        country_n1 = group2[0]
        country_n2 = group2[1]
        country_n3 = group2[2]
        country_n4 = group2[3]

        c1_score1 = Number(document.getElementById('score-5').value)
        c1_score2 = Number(document.getElementById('score-6').value)
        c1_score3 = Number(document.getElementById('score-7').value)
        c1_score4 = Number(document.getElementById('score-8').value)
    }
    else if (req_id == 'g3') {
        country_n1 = group3[0]
        country_n2 = group3[1]
        country_n3 = group3[2]
        country_n4 = group3[3]

        c1_score1 = Number(document.getElementById('score-9').value)
        c1_score2 = Number(document.getElementById('score-10').value)
        c1_score3 = Number(document.getElementById('score-11').value)
        c1_score4 = Number(document.getElementById('score-12').value)
    }
    else {
        country_n1 = group4[0]
        country_n2 = group4[1]
        country_n3 = group4[2]
        country_n4 = group4[3]

        c1_score1 = Number(document.getElementById('score-13').value)
        c1_score2 = Number(document.getElementById('score-14').value)
        c1_score3 = Number(document.getElementById('score-15').value)
        c1_score4 = Number(document.getElementById('score-16').value)
    }

    var charts = `<div class="row">
        <figure class="highcharts-figure1" style="margin-left:20px;">
        <div id="container3" style="background-color:green;"></div> </figure>
    <figure class="highcharts-figure col">
                    <div id="container"></div>
                    <p class="highcharts-description"></p>
        </figure>
        </div>`

    var twographs = document.getElementById('twoGraphs')
    twographs.innerHTML = charts


    Highcharts.chart('container', {
        chart: {
            type: 'bar',
            backgroundColor: '#101820FF',
        },
        title: {
            text: 'FOOTBALL MATCH',
            align: 'center'
        },
        xAxis: {
            categories: [country_n1, country_n2, country_n3, country_n4],
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'SCORE',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' millions'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Scored-pts',
            data: [c1_score1, c1_score2, c1_score3, c1_score4]
        }]
    });




    Highcharts.chart('container3', {
        chart: {
            type: 'variablepie',
            backgroundColor: '#101820FF',
        },
        title: {
            text: 'FOOTBALL MATCH',
            align: 'center'
        },
        tooltip: {
            headerFormat: '',
            pointFormat: '<span style="color:{point.color}">\u25CF</span> <b> {point.name}</b><br/>' +
                'score: <b>{point.y}</b><br/>'
        },
        series: [{
            minPointSize: 10,
            innerSize: '20%',
            zMin: 0,
            name: 'countries',
            data: [{
                name: country_n1,
                y: c1_score1,
                z: 92
            }, {
                name: country_n2,
                y: c1_score2,
                z: 119
            }, {
                name: country_n3,
                y: c1_score3,
                z: 121
            }, {
                name: country_n4,
                y: c1_score4,
                z: 136
            }]
        }]
    });

}

