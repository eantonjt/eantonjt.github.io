const ctx = document.getElementById('semanticChartOverview');


const similarityData = 
[
    {
        commentDate: "2005-12",
        pair: "their vs there",
        cosineSim: 0.34,
        cosineStd: 0.01
    },
    {
        commentDate: "2006-06",
        pair: "their vs there",
        cosineSim: 0.3,
        cosineStd: 0.02
    },
    {
        commentDate: "2005-12",
        pair: "their vs they're",
        cosineSim: 0.54,
        cosineStd: 0.01
    },
    {
        commentDate: "2006-06",
        pair: "their vs they're",
        cosineSim: 0.7,
        cosineStd: 0.02
    },
    {
        commentDate: "2005-12",
        pair: "there vs they're",
        cosineSim: 0.06,
        cosineStd: 0.01
    },
    {
        commentDate: "2006-06",
        pair: "there vs they're",
        cosineSim: 0.12,
        cosineStd: 0.02
    }

]

const allPairs = ["their vs they're", "their vs there", "there vs they're"]
const pairToColorMap = {
    "their vs they're": "#00ff00",
    "their vs there": "#ff0000",
    "there vs they're": "#0000ff"
}
const allLabels = [... new Set(similarityData.map(it => it.commentDate))].sort()
const allDatasets = allPairs.map(
    wordPair => {return {
        label: wordPair,
        borderColor: pairToColorMap[wordPair],
        backgroundColor: pairToColorMap[wordPair],
        borderWidth: 1,
        pointHoverRadius: 5,
        data: similarityData.filter(
            dataElem => dataElem.pair == wordPair).map(
                dataElem => {return {
                    x: dataElem.commentDate,
                    y: dataElem.cosineSim
                    }})
    }})

const allErrorbars = similarityData.map(
    dataElem => {return {
        label: null,
        borderColor: pairToColorMap[dataElem.pair],
        borderWidth: 1,
        pointStyle: 'line',
        data: [{x: dataElem.commentDate, y: dataElem.cosineSim + dataElem.cosineStd},
              {x: dataElem.commentDate, y: dataElem.cosineSim - dataElem.cosineStd}]
    }}
)


const plotData = allDatasets.concat(allErrorbars)

const data = {
    labels: allLabels,
    datasets: plotData
}

console.log(data)

new Chart(ctx, {
    type: "line",
    data: data,
    options: {
        plugins: {
          legend: {
            labels: {
               filter: (l) => (l.text !== null)
            }
          }
        }
     }
});