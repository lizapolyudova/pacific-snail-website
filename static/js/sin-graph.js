const paramMap = new Map();
paramMap.set('rise', 'value-rise');
paramMap.set('riseBase', 'value-rise-base');
paramMap.set('set', 'value-set');
paramMap.set('setBase', 'value-set-base');
paramMap.set('theta', 'value-theta')


function addParams() {
    let params = document.getElementById("graph-input");

    function  inputParam (paramName) {
        const text = `A_{${paramName}}`;
        let textNode = document.createTextNode(`$${text}$ = `);
        let node = document.createElement("input");
        node.id = paramMap.get(paramName);
        node.type = 'text';
        params.appendChild(textNode);
        params.appendChild(node)
        params.appendChild(document.createElement("br"));
    }


    inputParam("rise",);
    inputParam("riseBase");
    inputParam("set");
    inputParam("setBase");
    inputParam("theta")

    }

function setPlot() {
    let target = "rise";

    let contentsBounds = document.body.getBoundingClientRect();
    let width = 800;
    let height = 500;
    let ratio = contentsBounds.width / width;
    width *= ratio;
    height *= ratio;


    let riseBase = 0;
    let setBase = .5;
    let riseAmplitude = 1;
    let setAmplitude = 1;
    let thetaValue = -.1;

    let timeGraphs;
    const scaleFactor = 1.1;
    let render = () => {
        let maxAmplitude = Math.max(riseAmplitude+riseBase, setAmplitude+setBase);
        console.log(`calculated max amplitude: ${maxAmplitude} based on : `)
        timeGraphs = functionPlot({
            target: `#${target}`,
            yAxis: {domain: [- scaleFactor * maxAmplitude, scaleFactor * maxAmplitude]},
            xAxis: {domain: [0, 2 * Math.PI]},
            data: [
                {
                    fn: `${setBase}+sin(x+${thetaValue})*${setAmplitude}`,
                    derivative: {
                        fn: `cos(x+${thetaValue})*${setAmplitude}`,
                        updateOnMouseMove: true,
                    },
                    color: 'red',
                },
                {
                    fn: `${setBase}`,
                    color: 'pink',
                },
                {
                    fn: `${riseBase}-sin(x)*${riseAmplitude}`,
                    color: 'blue',
                    derivative: {
                        fn: `cos(x)*${riseAmplitude}`,
                        updateOnMouseMove: true,
                    },
                },
                {
                    fn: `${riseBase}`,
                    color: 'lightblue',
                }
            ]
        });

        let dayLength = functionPlot({
            target: `#diff`,
            xAxis: {domain: [0, 2 * Math.PI]},
            data: [
                {
                    fn: `${setBase}+sin(x+${thetaValue})*${setAmplitude} - (${riseBase}-sin(x)*${riseAmplitude})`,
                    derivative: {
                        fn: `cos(x+${thetaValue})*${setAmplitude}+cos(x)*${riseAmplitude}`,
                        updateOnMouseMove: true
                    }
                }
            ]
        });
    timeGraphs.addLink(dayLength);
    dayLength.addLink(timeGraphs);
    }

    render();
    document.getElementById('graph-input').childNodes.forEach(e => e.addEventListener('input', (e) => {
        riseAmplitude  = readValue("value-rise") || riseAmplitude;
        setAmplitude = readValue("value-set") || setAmplitude;
        riseBase  = readValue("value-rise-base") || riseBase;
        setBase = readValue("value-set-base") || setBase;
        thetaValue = readValue("value-theta") || thetaValue;
        render();
    }));
}

function readValue(input) {
    return parseFloat(document.getElementById(input).value);
}


function risePlot() {
    let source = document.getElementById("value-rise");
    let contentsBounds = document.body.getBoundingClientRect();
    let width = 800;
    let height = 500;
    let ratio = contentsBounds.width / width;
    width *= ratio;
    height *= ratio;

    let amplitudeValue = 1;
    let target = "rise"

    function render() {
        functionPlot({
            target: `#${target}`,
            yAxis: {domain: [-1.05 * amplitudeValue, 1.05 * amplitudeValue]},
            xAxis: {domain: [0, 2 * Math.PI]},
            data: [
                {
                    fn: `-sin(x)*${amplitudeValue}`
                }
            ]
        })
    };
    render();
    source.addEventListener('input', (e) => {
        amplitudeValue = e.target.value;
        render();
    });
}

