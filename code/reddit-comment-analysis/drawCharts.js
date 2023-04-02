const ctx = document.getElementById('semanticChartOverview');


const similarityData = 
[
    {commentDate: "2005-12",
pair: "there vs they're",
cosineSim: 0.007219134697070167,
cosineStd: 0.0024680460275457055},
{commentDate: "2005-12",
pair: "there vs their",
cosineSim: 0.007696416766765906,
cosineStd: 0.0030798316329342093},
{commentDate: "2005-12",
pair: "they're vs their",
cosineSim: 0,
cosineStd: 0},
{commentDate: "2006-06",
pair: "there vs they're",
cosineSim: 0.06273276058825086,
cosineStd: 0.007640950023379636},
{commentDate: "2006-06",
pair: "there vs their",
cosineSim: 0.09091304745466523,
cosineStd: 0.009583519763535914},
{commentDate: "2006-06",
pair: "they're vs their",
cosineSim: 0.08739279978066693,
cosineStd: 0.004473316615446871},
{commentDate: "2006-12",
pair: "there vs they're",
cosineSim: 0.08487684996055278,
cosineStd: 0.012692706816572214},
{commentDate: "2006-12",
pair: "there vs their",
cosineSim: 0.0934244532498864,
cosineStd: 0.010419647563610142},
{commentDate: "2006-12",
pair: "they're vs their",
cosineSim: 0.09495622986462823,
cosineStd: 0.0031717312724592953},
{commentDate: "2007-06",
pair: "there vs they're",
cosineSim: 0.11715333443223949,
cosineStd: 0.005311215520419691},
{commentDate: "2007-06",
pair: "there vs their",
cosineSim: 0.121981320880731,
cosineStd: 0.005154860117102738},
{commentDate: "2007-06",
pair: "they're vs their",
cosineSim: 0.16942880016782472,
cosineStd: 0.0064523868830569},
{commentDate: "2007-12",
pair: "there vs they're",
cosineSim: 0.1304067516199599,
cosineStd: 0.009081437988732545},
{commentDate: "2007-12",
pair: "there vs their",
cosineSim: 0.1369436051528502,
cosineStd: 0.0049461780275342326},
{commentDate: "2007-12",
pair: "they're vs their",
cosineSim: 0.19082628336480617,
cosineStd: 0.009006841782396791},
{commentDate: "2008-06",
pair: "there vs they're",
cosineSim: 0.11747520270441361,
cosineStd: 0.0031361450573468017},
{commentDate: "2008-06",
pair: "there vs their",
cosineSim: 0.14424335459248833,
cosineStd: 0.0031915805000728454},
{commentDate: "2008-06",
pair: "they're vs their",
cosineSim: 0.20413191999442296,
cosineStd: 0.005034755271049203},
{commentDate: "2008-12",
pair: "there vs they're",
cosineSim: 0.11831509501351371,
cosineStd: 0.002993499592868178},
{commentDate: "2008-12",
pair: "there vs their",
cosineSim: 0.1514197293095583,
cosineStd: 0.005181445904339286},
{commentDate: "2008-12",
pair: "they're vs their",
cosineSim: 0.2270927394456138,
cosineStd: 0.005180167929445575},
{commentDate: "2009-06",
pair: "there vs they're",
cosineSim: 0.1363511619698321,
cosineStd: 0.002773840579619775},
{commentDate: "2009-06",
pair: "there vs their",
cosineSim: 0.15978651837781865,
cosineStd: 0.0033180851786002727},
{commentDate: "2009-06",
pair: "they're vs their",
cosineSim: 0.23461042532768736,
cosineStd: 0.006372523858939386},
{commentDate: "2009-12",
pair: "there vs they're",
cosineSim: 0.14033450227654695,
cosineStd: 0.0019841370131407953},
{commentDate: "2009-12",
pair: "there vs their",
cosineSim: 0.15978985543030066,
cosineStd: 0.0014651619341326096},
{commentDate: "2009-12",
pair: "they're vs their",
cosineSim: 0.2496528863840643,
cosineStd: 0.0020325788927318335},
{commentDate: "2010-06",
pair: "there vs they're",
cosineSim: 0.14317669466253632,
cosineStd: 0.0019616103503237036},
{commentDate: "2010-06",
pair: "there vs their",
cosineSim: 0.15765309560849816,
cosineStd: 0.0013175457642254904},
{commentDate: "2010-06",
pair: "they're vs their",
cosineSim: 0.2502979622407657,
cosineStd: 0.0019468102749308233},
{commentDate: "2010-12",
pair: "there vs they're",
cosineSim: 0.1465380797859949,
cosineStd: 0.0017839382902949089},
{commentDate: "2010-12",
pair: "there vs their",
cosineSim: 0.16398133652507413,
cosineStd: 0.0016138747720783814},
{commentDate: "2010-12",
pair: "they're vs their",
cosineSim: 0.26198700068398545,
cosineStd: 0.0014871207940432489},
{commentDate: "2011-06",
pair: "there vs they're",
cosineSim: 0.14704719527769475,
cosineStd: 0.0012774341360061072},
{commentDate: "2011-06",
pair: "there vs their",
cosineSim: 0.16715913522679657,
cosineStd: 0.000866079828338789},
{commentDate: "2011-06",
pair: "they're vs their",
cosineSim: 0.26026417758669723,
cosineStd: 0.0016111909639217152},
{commentDate: "2012-06",
pair: "there vs they're",
cosineSim: 0.1478830745060151,
cosineStd: 0.0003512940486846556},
{commentDate: "2012-06",
pair: "there vs their",
cosineSim: 0.17381533191277357,
cosineStd: 0.0003400804570043836},
{commentDate: "2012-06",
pair: "they're vs their",
cosineSim: 0.2618528260565839,
cosineStd: 0.0017643764511400199},
{commentDate: "2012-12",
pair: "there vs they're",
cosineSim: 0.14921890231832863,
cosineStd: 0.00081038649832935},
{commentDate: "2012-12",
pair: "there vs their",
cosineSim: 0.1717522853917668,
cosineStd: 0.0007887579671925488},
{commentDate: "2012-12",
pair: "they're vs their",
cosineSim: 0.2661853529035461,
cosineStd: 0.0007004628163018135},
]

const allPairs = ["they're vs their", "there vs their", "there vs they're"]
const pairToColorMap = {
    "they're vs their": "#ffa600",
    "there vs their": "#0062cc",
    "there vs they're": "#008a71"
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
        label: "Error bar",
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


new Chart(ctx, {
    type: "line",
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Evolution of word embedding similarity based on Reddit comments'
          },
          legend: {
            position: "bottom",
            labels: {
               filter: (l) => (l.text !== "Error bar")
            }
          }
        },
        scales: {
            y: {
              title: {
                display: true,
                text: 'Cosine similarity'
              }
            },
            x: {
                title: {
                  display: true,
                  text: 'Date'
                }
              }
          }
     }
});