const options = {
    chart: {
        renderTo: "container",
        type: "column",
        options3d: {
            enabled: true,
            alpha: 10,
            beta: 25,
            depth: 70
        }
    },
    colors: ['pink'],
    title: {
        text: "Caitlyn Jenner"
    },
    series: [
        {
            name: "Caitlyn Jenner",
            data: [100000, 25, 100]
        }
    ], 
    plotOptions: {
        column: {
            depth: 25
        }
    },
    xAxis: {
        categories: [
            "Net Worth", 
            "Per appearance", 
            "Per Speech"
        ],        
        labels: {
            skew3d: true,
            style: {
                fontSize: '16px'
            }
        }
    },
    yAxis: {
        title: {
            text: "Million dollars"
        }
    }
}

const chart = new Highcharts.Chart(options)
const btn = document.querySelector("#btn")

const Caitlyn = {
    data: [100, 25, 100],
    name: "Caitlyn Jenner",
    kategorier: ["Net Worth", "Per appearance", "Per Speech"]
}
const Kris = {
    data: [60, 2, 60],
    name: "Kris Jenner",
    kategorier: ["Net Worth", "10% from the kids' jobs", "KUWTK tv-show"]
} 
const Kourtney = {
    data: [35, 60],
    name: "Kourtney Kardashian",
    kategorier: ["Net Worth", "KUWTK tv-show"]
}
const Kim = {
    data: [350, 1, 160, 60],
    name: "Kim Kardashian",
    kategorier: ["Net Worth", "Per post on sosial media", "from Kanye West", "KUWTK tv-show"]
}
const Khloe = {
    data: [40, 60],
    name: "Khloe Kardashian",
    kategorier: ["Net Worth", "KUWTK tv-show"]
}
const Rob = {
    data: [10],
    name: "Rob Kardashian",
    kategorier: ["Net Worth"]
}
const Kendall = {
    data: [30, 22, 60],
    name: "Kendall Jenner",
    kategorier: ["Net Worth", "Modeljobs", "KUWTK tv-show"]
}
const Kylie = {
    data: [1000, 330, 1, 2, 79],
    name: "Kylie Jenner",
    kategorier: ["Net Worth, 2019; $1 billion", "Kylie Cosmetics", "Per post on sosial media", "Kendall + Kylie", "KUWTK tv-show"]
}

const personer = {
    "Caitlyn" :Caitlyn,
    "Kris" : Kris,
    "Kourtney" : Kourtney,
    "Kim" : Kim,
    "Khloe" : Khloe,
    "Rob" : Rob,
    "Kendall" : Kendall,
    "Kylie" : Kylie
}

btn.onclick = (evt) => {
    const person = evt.target.dataset.person;
    const persondata = personer[person]

    chart.series[0].update({data: persondata.data})
    chart.series[0].update({name: persondata.name})
    chart.title.update({text: persondata.name})
    chart.xAxis[0].setCategories(persondata.kategorier)
}