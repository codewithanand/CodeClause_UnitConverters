// GETTING INPUT
let inputValue = document.getElementById("inputValue")
let outputValue = document.getElementById("outputValue")

// SETTING TABS FUNCTIONALITY
let tabLists = document.querySelectorAll(".tabItems")
let tabContentLists = document.querySelectorAll(".tabContentLists")

let type = 0
let fromUnit = ""
let toUnit = ""

tabLists.forEach((item, index) => {
    item.onclick = () => {
        // Change Tabs
        tabLists.forEach(item => {
            item.classList.remove("active")
        })
        item.classList.add("active")

        // Change Tab Contents
        tabContentLists.forEach(item => {
            item.classList.remove("active")
        })
        tabContentLists[index].classList.add("active")

        type = index
        setUnit(type)
    }
})

// LENGTH MULTIPLIER
const getLengthMultiplier = (from, to) => {
    switch (from) {
        case "meter":
            switch (to) {
                case "meter":
                    return 1
                    break;
                case "kilometer":
                    return 0.001
                    break;
                case "centimeter":
                    return 100
                    break;
                case "millimeter":
                    return 1000
                    break;
                case "micrometer":
                    return 1000000
                    break;
                case "nanometer":
                    return 1000000000
                    break;
                case "mile":
                    return 0.0006213689
                    break;
                case "yard":
                    return 1.0936132983
                    break;
                case "foot":
                    return 3.280839895
                    break;
                case "inch":
                    return 39.37007874
                    break;
                case "lightyear":
                    return 1.057e-15
                    break;
            }
            break;
        case "kilometer":
            switch (to) {
                case "meter":
                    return 1000
                    break;
                case "kilometer":
                    return 1
                    break;
                case "centimeter":
                    return 100000
                    break;
                case "millimeter":
                    return 1000000
                    break;
                case "micrometer":
                    return 1000000000
                    break;
                case "nanometer":
                    return 1000000000000
                    break;
                case "mile":
                    return 0.6213688756
                    break;
                case "yard":
                    return 1093.6132983
                    break;
                case "foot":
                    return 3280.839895
                    break;
                case "inch":
                    return 39370.07874
                    break;
                case "lightyear":
                    return 1.057e-13
                    break;
            }
            break;
        case "centimeter":
            switch (to) {
                case "meter":
                    return 0.01
                    break;
                case "kilometer":
                    return 0.00001
                    break;
                case "centimeter":
                    return 1
                    break;
                case "millimeter":
                    return 10
                    break;
                case "micrometer":
                    return 10000
                    break;
                case "nanometer":
                    return 10000000
                    break;
                case "mile":
                    return 0.0000062137
                    break;
                case "yard":
                    return 0.010936133
                    break;
                case "foot":
                    return 0.032808399
                    break;
                case "inch":
                    return 0.3937007874
                    break;
                case "lightyear":
                    return 1.057e-18
                    break;
            }
            break;
        case "millimeter":
            switch (to) {
                case "meter":
                    return 0.001
                    break;
                case "kilometer":
                    return 0.000001
                    break;
                case "centimeter":
                    return 0.1
                    break;
                case "millimeter":
                    return 1
                    break;
                case "micrometer":
                    return 1000
                    break;
                case "nanometer":
                    return 1000000
                    break;
                case "mile":
                    return 6.213688756e-7
                    break;
                case "yard":
                    return 0.0010936133
                    break;
                case "foot":
                    return 0.0032808399
                    break;
                case "inch":
                    return 0.03937007874
                    break;
                case "lightyear":
                    return 1.057e-19
                    break;
            }
            break;
        case "micrometer":
            switch (to) {
                case "meter":
                    return 0.000001
                    break;
                case "kilometer":
                    return 10e-10
                    break;
                case "centimeter":
                    return 0.0001
                    break;
                case "millimeter":
                    return 0.001
                    break;
                case "micrometer":
                    return 1
                    break;
                case "nanometer":
                    return 1000
                    break;
                case "mile":
                    return 6.213688756e-10
                    break;
                case "yard":
                    return 0.0000010936
                    break;
                case "foot":
                    return 0.0000032808
                    break;
                case "inch":
                    return 0.0000393701
                    break;
                case "lightyear":
                    return 1.057e-22
                    break;
            }
            break;
        case "nanometer":
            switch (to) {
                case "meter":
                    return 1e-9
                    break;
                case "kilometer":
                    return 1e-12
                    break;
                case "centimeter":
                    return 1e-7
                    break;
                case "millimeter":
                    return 0.000001
                    break;
                case "micrometer":
                    return 0.001
                    break;
                case "nanometer":
                    return 1
                    break;
                case "mile":
                    return 6.213688756e-13
                    break;
                case "yard":
                    return 1.093613298e-9
                    break;
                case "foot":
                    return 3.280839895e-9
                    break;
                case "inch":
                    return 3.937007874e-8
                    break;
                case "lightyear":
                    return 1.057e-25
                    break;
            }
            break;
        case "mile":
            switch (to) {
                case "meter":
                    return 1609.35
                    break;
                case "kilometer":
                    return 1.60935
                    break;
                case "centimeter":
                    return 160935
                    break;
                case "millimeter":
                    return 1609350
                    break;
                case "micrometer":
                    return 1609350000
                    break;
                case "nanometer":
                    return 1609350000000
                    break;
                case "mile":
                    return 1
                    break;
                case "yard":
                    return 1760.0065617
                    break;
                case "foot":
                    return 5280.019685
                    break;
                case "inch":
                    return 63360.23622
                    break;
                case "lightyear":
                    return 1.701096963e-13
                    break;
            }
            break;
        case "yard":
            switch (to) {
                case "meter":
                    return 0.9144
                    break;
                case "kilometer":
                    return 0.0009144
                    break;
                case "centimeter":
                    return 91.44
                    break;
                case "millimeter":
                    return 914.4
                    break;
                case "micrometer":
                    return 914400
                    break;
                case "nanometer":
                    return 914400000
                    break;
                case "mile":
                    return 0.0005681797
                    break;
                case "yard":
                    return 1
                    break;
                case "foot":
                    return 3
                    break;
                case "inch":
                    return 36
                    break;
                case "lightyear":
                    return 9.665287622e-17
                    break;
            }
            break;
        case "foot":
            switch (to) {
                case "meter":
                    return 0.3048
                    break;
                case "kilometer":
                    return 0.0003048
                    break;
                case "centimeter":
                    return 30.48
                    break;
                case "millimeter":
                    return 304.8
                    break;
                case "micrometer":
                    return 304800
                    break;
                case "nanometer":
                    return 304800000
                    break;
                case "mile":
                    return 0.0001893932
                    break;
                case "yard":
                    return 0.3333333333
                    break;
                case "foot":
                    return 1
                    break;
                case "inch":
                    return 12
                    break;
                case "lightyear":
                    return 3.22176254e-17
                    break;
            }
            break;
        case "inch":
            switch (to) {
                case "meter":
                    return 0.0254
                    break;
                case "kilometer":
                    return 0.0000254
                    break;
                case "centimeter":
                    return 2.54
                    break;
                case "millimeter":
                    return 25.4
                    break;
                case "micrometer":
                    return 25400
                    break;
                case "nanometer":
                    return 25400000
                    break;
                case "mile":
                    return 0.0000157828
                    break;
                case "yard":
                    return 0.0277777778
                    break;
                case "foot":
                    return 0.0833333333
                    break;
                case "inch":
                    return 1
                    break;
                case "lightyear":
                    return 2.684802117e-17
                    break;
            }
            break;
        case "lightyear":
            switch (to) {
                case "meter":
                    return 9460660000000000
                    break;
                case "kilometer":
                    return 9460660000000
                    break;
                case "centimeter":
                    return 946066000000000000
                    break;
                case "millimeter":
                    return 9460660000000000000
                    break;
                case "micrometer":
                    return 9.46066e+21
                    break;
                case "nanometer":
                    return 9.46066e+24
                    break;
                case "mile":
                    return 5878559666946
                    break;
                case "yard":
                    return 10346303587051618
                    break;
                case "foot":
                    return 31038910761154856
                    break;
                case "inch":
                    return 372466929133858300
                    break;
                case "lightyear":
                    return 1
                    break;
            }
            break;
    }
}

// TEMPERATURE MULTIPLIER
const getTempMultiplier = (from, to) => {
    switch (from) {
        case "celsius":
            switch (to) {
                case "celsius":
                    return (Number(inputValue.value))
                    break;
                case "kelvin":
                    return (Number(inputValue.value)+273.15)
                    break;
                case "fahrenheit":
                    return ((Number(inputValue.value)*9/5)+32)
                    break;
            }
            break;
        case "kelvin":
            switch (to) {
                case "celsius":
                    return (Number(inputValue.value)-272.15)
                    break;
                case "kelvin":
                    return (Number(inputValue.value))
                    break;
                case "fahrenheit":
                    return (((Number(inputValue.value)-273.15)*9/5)+32)
                    break;
            }
            break;
        case "fahrenheit":
            switch (to) {
                case "celsius":
                    return ((Number(inputValue.value)-32)*5/9)
                    break;
                case "kelvin":
                    return (((Number(inputValue.value)-32)*5/9)+273.15)
                    break;
                case "fahrenheit":
                    return Number(inputValue.value)
                    break;
            }
            break;
    }
}

// AREA MULTIPLIER
const getAreaMultiplier = (from, to) => {
    switch (from) {
        case "sqmeter":
            switch (to) {
                case "sqmeter":
                    return 1
                    break;
                case "sqkilometer":
                    return 0.000001
                    break;
                case "sqcentimeter":
                    return 10000
                    break;
                case "sqmillimeter":
                    return 1000000
                    break;
                case "sqmicrometer":
                    return 1000000000000
                    break;
                case "hectare":
                    return 0.0001
                    break;
                case "sqmile":
                    return 3.861018768e-7
                    break;
                case "sqyard":
                    return 1.1959900463
                    break;
                case "sqfoot":
                    return 10.763910417
                    break;
                case "sqinch":
                    return 1550.0031
                    break;
                case "acre":
                    return 0.00024710
                    break;
            }
            break;
        case "sqkilometer":
            switch (to) {
                case "sqmeter":
                    return 1000000
                    break;
                case "sqkilometer":
                    return 1
                    break;
                case "sqcentimeter":
                    return 10000000000
                    break;
                case "sqmillimeter":
                    return 1000000000000
                    break;
                case "sqmicrometer":
                    return 1000000000000000000
                    break;
                case "hectare":
                    return 100
                    break;
                case "sqmile":
                    return 0.3861018768
                    break;
                case "sqyard":
                    return 1195990.0463
                    break;
                case "sqfoot":
                    return 10763910.417
                    break;
                case "sqinch":
                    return 1550003100
                    break;
                case "acre":
                    return 247.10538147
                    break;
            }
            break;
        case "sqcentimeter":
            switch (to) {
                case "sqmeter":
                    return 0.0001
                    break;
                case "sqkilometer":
                    return 1e-10
                    break;
                case "sqcentimeter":
                    return 1
                    break;
                case "sqmillimeter":
                    return 100
                    break;
                case "sqmicrometer":
                    return 100000000
                    break;
                case "hectare":
                    return 1e-8
                    break;
                case "sqmile":
                    return 3.861018768e-11
                    break;
                case "sqyard":
                    return 0.000119599
                    break;
                case "sqfoot":
                    return 0.001076391
                    break;
                case "sqinch":
                    return 0.15500031
                    break;
                case "acre":
                    return 2.471053814e-8
                    break;
            }
            break;
        case "sqmillimeter":
            switch (to) {
                case "sqmeter":
                    return 0.000001
                    break;
                case "sqkilometer":
                    return 1e-12
                    break;
                case "sqcentimeter":
                    return 0.01
                    break;
                case "sqmillimeter":
                    return 1
                    break;
                case "sqmicrometer":
                    return 1000000
                    break;
                case "hectare":
                    return 10e-11
                    break;
                case "sqmile":
                    return 3.861018768e-13
                    break;
                case "sqyard":
                    return 0.000001196
                    break;
                case "sqfoot":
                    return 0.0000107639
                    break;
                case "sqinch":
                    return 0.0015500031
                    break;
                case "acre":
                    return 2.471053814e-10
                    break;
            }
            break;
        case "sqmicrometer":
            switch (to) {
                case "sqmeter":
                    return 1e-12
                    break;
                case "sqkilometer":
                    return 1e-18
                    break;
                case "sqcentimeter":
                    return 10e-9
                    break;
                case "sqmillimeter":
                    return 0.000001
                    break;
                case "sqmicrometer":
                    return 1
                    break;
                case "hectare":
                    return 1e-16
                    break;
                case "sqmile":
                    return 3.861018768e-19
                    break;
                case "sqyard":
                    return 1.195990046e-12
                    break;
                case "sqfoot":
                    return 1.076391041e-11
                    break;
                case "sqinch":
                    return 1.5500031e-9
                    break;
                case "acre":
                    return 2.471053814e-16
                    break;
            }
            break;
        case "hectare":
            switch (to) {
                case "sqmeter":
                    return 10000
                    break;
                case "sqkilometer":
                    return 0.01
                    break;
                case "sqcentimeter":
                    return 100000000
                    break;
                case "sqmillimeter":
                    return 10000000000
                    break;
                case "sqmicrometer":
                    return 10000000000000000
                    break;
                case "hectare":
                    return 1
                    break;
                case "sqmile":
                    return 0.0038610188
                    break;
                case "sqyard":
                    return 11959.900463
                    break;
                case "sqfoot":
                    return 107639.10417
                    break;
                case "sqinch":
                    return 15500031
                    break;
                case "acre":
                    return 2.4710538147
                    break;
            }
            break;
        case "sqmile":
            switch (to) {
                case "sqmeter":
                    return 2589990
                    break;
                case "sqkilometer":
                    return 2.589990
                    break;
                case "sqcentimeter":
                    return 25899900000
                    break;
                case "sqmillimeter":
                    return 2589990000000
                    break;
                case "sqmicrometer":
                    return 2589990000000000000
                    break;
                case "hectare":
                    return 258.9990
                    break;
                case "sqmile":
                    return 1
                    break;
                case "sqyard":
                    return 3097602.26
                    break;
                case "sqfoot":
                    return 27878420.34
                    break;
                case "sqinch":
                    return 4014492529
                    break;
                case "acre":
                    return 640.00046695
                    break;
            }
            break;
        case "sqyard":
            switch (to) {
                case "sqmeter":
                    return 0.83612736
                    break;
                case "sqkilometer":
                    return 8.3612736e-7
                    break;
                case "sqcentimeter":
                    return 8361.2736
                    break;
                case "sqmillimeter":
                    return 836127.36
                    break;
                case "sqmicrometer":
                    return 836127360000
                    break;
                case "hectare":
                    return 0.000083612736
                    break;
                case "sqmile":
                    return 3.228303429e-7
                    break;
                case "sqyard":
                    return 1
                    break;
                case "sqfoot":
                    return 9
                    break;
                case "sqinch":
                    return 1296
                    break;
                case "acre":
                    return 0.0002066116
                    break;
            }
            break;
        case "sqfoot":
            switch (to) {
                case "sqmeter":
                    return 0.09290304
                    break;
                case "sqkilometer":
                    return 9.290304e-8
                    break;
                case "sqcentimeter":
                    return 909.0304
                    break;
                case "sqmillimeter":
                    return 92903.04
                    break;
                case "sqmicrometer":
                    return 92903040000
                    break;
                case "hectare":
                    return 0.0000092903
                    break;
                case "sqmile":
                    return 3.58700381e-8
                    break;
                case "sqyard":
                    return 0.111111111
                    break;
                case "sqfoot":
                    return 1
                    break;
                case "sqinch":
                    return 144
                    break;
                case "acre":
                    return 0.0000229568
                    break;
            }
            break;
        case "sqinch":
            switch (to) {
                case "sqmeter":
                    return 0.00064516
                    break;
                case "sqkilometer":
                    return 6.4516e-10
                    break;
                case "sqcentimeter":
                    return 6.4516
                    break;
                case "sqmillimeter":
                    return 645.16
                    break;
                case "sqmicrometer":
                    return 645160000
                    break;
                case "hectare":
                    return 6.4516e-8
                    break;
                case "sqmile":
                    return 2.490974868e-10
                    break;
                case "sqyard":
                    return 0.0007716049
                    break;
                case "sqfoot":
                    return 0.0069444444
                    break;
                case "sqinch":
                    return 1
                    break;
                case "acre":
                    return 1.594225079e-7
                    break;
            }
            break;
        case "acre":
            switch (to) {
                case "sqmeter":
                    return 4046.8564224
                    break;
                case "sqkilometer":
                    return 0.0040468564
                    break;
                case "sqcentimeter":
                    return 40468564.224
                    break;
                case "sqmillimeter":
                    return 4046856422.4
                    break;
                case "sqmicrometer":
                    return 4046856422400000
                    break;
                case "hectare":
                    return 0.4046856422
                    break;
                case "sqmile":
                    return 0.0015624989
                    break;
                case "sqyard":
                    return 4840
                    break;
                case "sqfoot":
                    return 43560
                    break;
                case "sqinch":
                    return 6272640
                    break;
                case "acre":
                    return 1
                    break;
            }
            break;
    }
}

// VOLUME MULTIPLIER
const getVolumeMultiplier = (from, to) => {
    switch (from) {
        case "cumeter":
            switch (to) {
                case "cumeter":
                    return 1
                    break;
                case "cukilometer":
                    return 1e-9
                    break;
                case "cucentimeter":
                    return 1000000
                    break;
                case "cumillimeter":
                    return 1000000000
                    break;
                case "litre":
                    return 1000
                    break;
                case "millilitre":
                    return 1000000
                    break;
                case "gallon":
                    return 264.17217686
                    break;
                case "cumile":
                    return 2.399128636e-10
                    break;
                case "cuyard":
                    return 1.3079506193
                    break;
                case "cufoot":
                    return 35.314666721
                    break;
                case "cuinch":
                    return 61023.744095
                    break;
            }
            break;
        case "cukilometer":
            switch (to) {
                case "cumeter":
                    return 1000000000
                    break;
                case "cukilometer":
                    return 1
                    break;
                case "cucentimeter":
                    return 1000000000000000
                    break;
                case "cumillimeter":
                    return 1000000000000000000
                    break;
                case "litre":
                    return 1000000000000
                    break;
                case "millilitre":
                    return 1000000000000000
                    break;
                case "gallon":
                    return 264172176858
                    break;
                case "cumile":
                    return 0.2399128636
                    break;
                case "cuyard":
                    return 1307950619.3
                    break;
                case "cufoot":
                    return 35314666721
                    break;
                case "cuinch":
                    return 61023744094732
                    break;
            }
            break;
        case "cucentimeter":
            switch (to) {
                case "cumeter":
                    return 0.000001
                    break;
                case "cukilometer":
                    return 10e-16
                    break;
                case "cucentimeter":
                    return 1
                    break;
                case "cumillimeter":
                    return 1000
                    break;
                case "litre":
                    return 0.001
                    break;
                case "millilitre":
                    return 1
                    break;
                case "gallon":
                    return 0.0002641722
                    break;
                case "cumile":
                    return 2.399128636e-16
                    break;
                case "cuyard":
                    return 0.000001308
                    break;
                case "cufoot":
                    return 0.0000353147
                    break;
                case "cuinch":
                    return 0.0610237441
                    break;
            }
            break;
        case "cumillimeter":
            switch (to) {
                case "cumeter":
                    return 1e-9
                    break;
                case "cukilometer":
                    return 1e-18
                    break;
                case "cucentimeter":
                    return 0.001
                    break;
                case "cumillimeter":
                    return 1
                    break;
                case "litre":
                    return 0.000001
                    break;
                case "millilitre":
                    return 0.001
                    break;
                case "gallon":
                    return 2.641721768e-7
                    break;
                case "cumile":
                    return 2.399128636e-19
                    break;
                case "cuyard":
                    return 1.307950619e-9
                    break;
                case "cufoot":
                    return 3.531466672e-8
                    break;
                case "cuinch":
                    return 0.0000610237
                    break;
            }
            break;
        case "litre":
            switch (to) {
                case "cumeter":
                    return 0.001
                    break;
                case "cukilometer":
                    return 1e-12
                    break;
                case "cucentimeter":
                    return 1000
                    break;
                case "cumillimeter":
                    return 1000000
                    break;
                case "litre":
                    return 1
                    break;
                case "millilitre":
                    return 1000
                    break;
                case "gallon":
                    return 0.2641721769
                    break;
                case "cumile":
                    return 2.399128636e-19
                    break;
                case "cuyard":
                    return 0.0013079506
                    break;
                case "cufoot":
                    return 0.0353146667
                    break;
                case "cuinch":
                    return 61.023744095
                    break;
            }
            break;
        case "millilitre":
            switch (to) {
                case "cumeter":
                    return 0.000001
                    break;
                case "cukilometer":
                    return 10e-16
                    break;
                case "cucentimeter":
                    return 1
                    break;
                case "cumillimeter":
                    return 1000
                    break;
                case "litre":
                    return 0.001
                    break;
                case "millilitre":
                    return 1
                    break;
                case "gallon":
                    return 0.0002641722
                    break;
                case "cumile":
                    return 2.399128636e-16
                    break;
                case "cuyard":
                    return 0.000001308
                    break;
                case "cufoot":
                    return 0.0000353147
                    break;
                case "cuinch":
                    return 0.0610237441
                    break;
            }
            break;
        case "gallon":
            switch (to) {
                case "cumeter":
                    return 0.00378541
                    break;
                case "cukilometer":
                    return 3.78541e-12
                    break;
                case "cucentimeter":
                    return 3785.41
                    break;
                case "cumillimeter":
                    return 3785410
                    break;
                case "litre":
                    return 3.78541
                    break;
                case "millilitre":
                    return 3785.41
                    break;
                case "gallon":
                    return 1
                    break;
                case "cumile":
                    return 9.081685531e-13
                    break;
                case "cuyard":
                    return 0.0049511294
                    break;
                case "cufoot":
                    return 0.1336804926
                    break;
                case "cuinch":
                    return 230.99989113
                    break;
            }
            break;
        case "cumile":
            switch (to) {
                case "cumeter":
                    return 4168180000
                    break;
                case "cukilometer":
                    return 4.16818
                    break;
                case "cucentimeter":
                    return 4168180000000000
                    break;
                case "cumillimeter":
                    return 4168179999999999500
                    break;
                case "litre":
                    return 4168180000000
                    break;
                case "millilitre":
                    return 4168180000000000
                    break;
                case "gallon":
                    return 1101117184136
                    break;
                case "cumile":
                    return 1
                    break;
                case "cuyard":
                    return 5451773612.4
                    break;
                case "cufoot":
                    return 147197887535
                    break;
                case "cuinch":
                    return 254357949660781
                    break;
            }
            break;
        case "cuyard":
            switch (to) {
                case "cumeter":
                    return 0.764554858
                    break;
                case "cukilometer":
                    return 7.645548579e-10
                    break;
                case "cucentimeter":
                    return 764554.85798
                    break;
                case "cumillimeter":
                    return 764554857.98
                    break;
                case "litre":
                    return 764.55485798
                    break;
                case "millilitre":
                    return 764554.85798
                    break;
                case "gallon":
                    return 201.97412116
                    break;
                case "cumile":
                    return 1.834265453e-10
                    break;
                case "cuyard":
                    return 1
                    break;
                case "cufoot":
                    return 27
                    break;
                case "cuinch":
                    return 46656
                    break;
            }
            break;
        case "cufoot":
            switch (to) {
                case "cumeter":
                    return 0.0283168466
                    break;
                case "cukilometer":
                    return 2.831684659e-11
                    break;
                case "cucentimeter":
                    return 28316.846592
                    break;
                case "cumillimeter":
                    return 28316846.592
                    break;
                case "litre":
                    return 28.316846592
                    break;
                case "millilitre":
                    return 28316.846592
                    break;
                case "gallon":
                    return 7.480523006
                    break;
                case "cumile":
                    return 6.793575755e-12
                    break;
                case "cuyard":
                    return 0.037037037
                    break;
                case "cufoot":
                    return 1
                    break;
                case "cuinch":
                    return 1728
                    break;
            }
            break;
        case "cuinch":
            switch (to) {
                case "cumeter":
                    return 0.0000163871
                    break;
                case "cukilometer":
                    return 1.6387064e-14
                    break;
                case "cucentimeter":
                    return 16.387064
                    break;
                case "cumillimeter":
                    return 16387.064
                    break;
                case "litre":
                    return 0.016387064
                    break;
                case "millilitre":
                    return 16.387064
                    break;
                case "gallon":
                    return 0.0043290064
                    break;
                case "cumile":
                    return 3.931467451e-15
                    break;
                case "cuyard":
                    return 0.0000214335
                    break;
                case "cufoot":
                    return 0.0005787037
                    break;
                case "cuinch":
                    return 1
                    break;
            }
            break;
    }
}

// WEIGHT MULTIPLIER
const getWeightMultiplier = (from, to) => {
    switch (from) {
        case "kilogram":
            switch (to) {
                case "kilogram":
                    return 1
                    break;
                case "gram":
                    return 1000
                    break;
                case "milligram":
                    return 1000000
                    break;
                case "metricton":
                    return 0.001
                    break;
                case "longton":
                    return 0.0009842073
                    break;
                case "shortton":
                    return 0.0011023122
                    break;
                case "pound":
                    return 2.2046244202
                    break;
                case "ounce":
                    return 35.273990723
                    break;
                case "carrat":
                    return 5000
                    break;
                case "amu":
                    return 6.022136652e+26
                    break;
            }
            break;
        case "gram":
            switch (to) {
                case "kilogram":
                    return 0.001
                    break;
                case "gram":
                    return 1
                    break;
                case "milligram":
                    return 1000
                    break;
                case "metricton":
                    return 0.000001
                    break;
                case "longton":
                    return 9.842073304e-7
                    break;
                case "shortton":
                    return 0.0000011023
                    break;
                case "pound":
                    return 0.0022046244
                    break;
                case "ounce":
                    return 0.0352739907
                    break;
                case "carrat":
                    return 5
                    break;
                case "amu":
                    return 6.022136652e+23
                    break;
            }
            break;
        case "milligram":
            switch (to) {
                case "kilogram":
                    return 0.000001
                    break;
                case "gram":
                    return 0.001
                    break;
                case "milligram":
                    return 1
                    break;
                case "metricton":
                    return 10e-10
                    break;
                case "longton":
                    return 9.842073304e-10
                    break;
                case "shortton":
                    return 1.10231221e-9
                    break;
                case "pound":
                    return 0.0000022046
                    break;
                case "ounce":
                    return 0.000035274
                    break;
                case "carrat":
                    return 0.005
                    break;
                case "amu":
                    return 6022136652e+11
                    break;
            }
            break;
        case "metricton":
            switch (to) {
                case "kilogram":
                    return 1000
                    break;
                case "gram":
                    return 1000000
                    break;
                case "milligram":
                    return 1000000000
                    break;
                case "metricton":
                    return 1
                    break;
                case "longton":
                    return 0.9842073304
                    break;
                case "shortton":
                    return 1.1023122101
                    break;
                case "pound":
                    return 2204.6244202
                    break;
                case "ounce":
                    return 35273.990723
                    break;
                case "carrat":
                    return 5000000
                    break;
                case "amu":
                    return 6.022136652e+29
                    break;
            }
            break;
        case "longton":
            switch (to) {
                case "kilogram":
                    return 1016.04608
                    break;
                case "gram":
                    return 1016046.08
                    break;
                case "milligram":
                    return 1016046080
                    break;
                case "metricton":
                    return 1.01604608
                    break;
                case "longton":
                    return 1
                    break;
                case "shortton":
                    return 1.12
                    break;
                case "pound":
                    return 2240
                    break;
                case "ounce":
                    return 35840
                    break;
                case "carrat":
                    return 5080230.4
                    break;
                case "amu":
                    return 6.118768338e+29
                    break;
            }
            break;
        case "shortton":
            switch (to) {
                case "kilogram":
                    return 907.184
                    break;
                case "gram":
                    return 907184
                    break;
                case "milligram":
                    return 907184000
                    break;
                case "metricton":
                    return 0.907184
                    break;
                case "longton":
                    return 0.8928571429
                    break;
                case "shortton":
                    return 1
                    break;
                case "pound":
                    return 2000
                    break;
                case "ounce":
                    return 32000
                    break;
                case "carrat":
                    return 4535920
                    break;
                case "amu":
                    return 5.463186016e+29
                    break;
            }
            break;
        case "pound":
            switch (to) {
                case "kilogram":
                    return 0.453592
                    break;
                case "gram":
                    return 453.592
                    break;
                case "milligram":
                    return 453592
                    break;
                case "metricton":
                    return 0.000453592
                    break;
                case "longton":
                    return 0.0004464286
                    break;
                case "shortton":
                    return 0.0005
                    break;
                case "pound":
                    return 1
                    break;
                case "ounce":
                    return 16
                    break;
                case "carrat":
                    return 2267.96
                    break;
                case "amu":
                    return 2.731593008e+26
                    break;
            }
            break;
        case "ounce":
            switch (to) {
                case "kilogram":
                    return 0.0283495
                    break;
                case "gram":
                    return 28.3495
                    break;
                case "milligram":
                    return 28349.5
                    break;
                case "metricton":
                    return 0.0000283495
                    break;
                case "longton":
                    return 0.0000279018
                    break;
                case "shortton":
                    return 0.00003125
                    break;
                case "pound":
                    return 0.0625
                    break;
                case "ounce":
                    return 1
                    break;
                case "carrat":
                    return 141.7475
                    break;
                case "amu":
                    return 1.70724563e+25
                    break;
            }
            break;
        case "carrat":
            switch (to) {
                case "kilogram":
                    return 0.0002
                    break;
                case "gram":
                    return 0.2
                    break;
                case "milligram":
                    return 200
                    break;
                case "metricton":
                    return 2e-7
                    break;
                case "longton":
                    return 1.96841466e-7
                    break;
                case "shortton":
                    return 2.20462442e-7
                    break;
                case "pound":
                    return 0.0004409249
                    break;
                case "ounce":
                    return 0.0070547981
                    break;
                case "carrat":
                    return 1
                    break;
                case "amu":
                    return 1.20442733e+23
                    break;
            }
            break;
        case "amu":
            switch (to) {
                case "kilogram":
                    return 1.660540199e-27
                    break;
                case "gram":
                    return 1.660540199e-24
                    break;
                case "milligram":
                    return 1.660540199e-21
                    break;
                case "metricton":
                    return 1.660540199e-30
                    break;
                case "longton":
                    return 1.634315837e-30
                    break;
                case "shortton":
                    return 1.830433737e-30
                    break;
                case "pound":
                    return 3.660867475e-27
                    break;
                case "ounce":
                    return 5.85738796e-26
                    break;
                case "carrat":
                    return 8.302700999e-24
                    break;
                case "amu":
                    return 1
                    break;
            }
            break;
    }
}

// TIME MULTIPLIER
const getTimeMultiplier = (from, to) => {
    switch (from) {
        case "second":
            switch (to) {
                case "second":
                    return 1
                    break;
                case "millisecond":
                    return 1000
                    break;
                case "microsecond":
                    return 1000000
                    break;
                case "nanosecond":
                    return 1000000000
                    break;
                case "picosecond":
                    return 1000000000000
                    break;
                case "minute":
                    return 0.0166666667
                    break;
                case "hour":
                    return 0.0002777778
                    break;
                case "day":
                    return 0.0000115741
                    break;
                case "week":
                    return 0.0000016534
                    break;
                case "month":
                    return 3.802570537e-7
                    break;
                case "year":
                    return 3.168808781e-8
                    break;
            }
            break;
        case "millisecond":
            switch (to) {
                case "second":
                    return 0.001
                    break;
                case "millisecond":
                    return 1
                    break;
                case "microsecond":
                    return 1000
                    break;
                case "nanosecond":
                    return 1000000
                    break;
                case "picosecond":
                    return 1000000000
                    break;
                case "minute":
                    return 0.000016667
                    break;
                case "hour":
                    return 2.77777777e-7
                    break;
                case "day":
                    return 1.157407407e-8
                    break;
                case "week":
                    return 1.653439153e-9
                    break;
                case "month":
                    return 3.802570537e-10
                    break;
                case "year":
                    return 3.168808781e-11
                    break;
            }
            break;
        case "microsecond":
            switch (to) {
                case "second":
                    return 0.000001
                    break;
                case "millisecond":
                    return 0.001
                    break;
                case "microsecond":
                    return 1
                    break;
                case "nanosecond":
                    return 1000
                    break;
                case "picosecond":
                    return 1000000
                    break;
                case "minute":
                    return 1.666666666e-8
                    break;
                case "hour":
                    return 2.77777777e-10
                    break;
                case "day":
                    return 1.157407407e-11
                    break;
                case "week":
                    return 1.653439153e-12
                    break;
                case "month":
                    return 3.802570537e-13
                    break;
                case "year":
                    return 3.168808781e-14
                    break;
            }
            break;
        case "nanosecond":
            switch (to) {
                case "second":
                    return 1e-9
                    break;
                case "millisecond":
                    return 0.000001
                    break;
                case "microsecond":
                    return 0.001
                    break;
                case "nanosecond":
                    return 1
                    break;
                case "picosecond":
                    return 1000
                    break;
                case "minute":
                    return 1.666666666e-11
                    break;
                case "hour":
                    return 2.77777777e-13
                    break;
                case "day":
                    return 1.157407407e-14
                    break;
                case "week":
                    return 1.653439153e-15
                    break;
                case "month":
                    return 3.802570537e-16
                    break;
                case "year":
                    return 3.168808781e-17
                    break;
            }
            break;
        case "picosecond":
            switch (to) {
                case "second":
                    return 1e-12
                    break;
                case "millisecond":
                    return 1e-9
                    break;
                case "microsecond":
                    return 0.000001
                    break;
                case "nanosecond":
                    return 0.001
                    break;
                case "picosecond":
                    return 1
                    break;
                case "minute":
                    return 1.666666666e-14
                    break;
                case "hour":
                    return 2.77777777e-16
                    break;
                case "day":
                    return 1.157407407e-17
                    break;
                case "week":
                    return 1.653439153e-18
                    break;
                case "month":
                    return 3.802570537e-19
                    break;
                case "year":
                    return 3.168808781e-20
                    break;
            }
            break;
        case "minute":
            switch (to) {
                case "second":
                    return 60
                    break;
                case "millisecond":
                    return 60000
                    break;
                case "microsecond":
                    return 60000000
                    break;
                case "nanosecond":
                    return 60000000000
                    break;
                case "picosecond":
                    return 6000000000000
                    break;
                case "minute":
                    return 1
                    break;
                case "hour":
                    return 0.01666666667
                    break;
                case "day":
                    return 0.0006944444
                    break;
                case "week":
                    return 0.0000992063
                    break;
                case "month":
                    return 0.0000228154
                    break;
                case "year":
                    return 0.0000019013
                    break;
            }
            break;
        case "hour":
            switch (to) {
                case "second":
                    return 3600
                    break;
                case "millisecond":
                    return 3600000
                    break;
                case "microsecond":
                    return 3600000000
                    break;
                case "nanosecond":
                    return 3600000000000
                    break;
                case "picosecond":
                    return 3600000000000000
                    break;
                case "minute":
                    return 60
                    break;
                case "hour":
                    return 1
                    break;
                case "day":
                    return 0.0416666667
                    break;
                case "week":
                    return 0.005952381
                    break;
                case "month":
                    return 0.0013689254
                    break;
                case "year":
                    return 0.0001140771
                    break;
            }
            break;
        case "day":
            switch (to) {
                case "second":
                    return 86400
                    break;
                case "millisecond":
                    return 86400000
                    break;
                case "microsecond":
                    return 86400000000
                    break;
                case "nanosecond":
                    return 86400000000000
                    break;
                case "picosecond":
                    return 86400000000000000
                    break;
                case "minute":
                    return 1440
                    break;
                case "hour":
                    return 24
                    break;
                case "day":
                    return 1
                    break;
                case "week":
                    return 0.1428571429
                    break;
                case "month":
                    return 0.0328542094
                    break;
                case "year":
                    return 0.0027378508
                    break;
            }
            break;
        case "week":
            switch (to) {
                case "second":
                    return 604800
                    break;
                case "millisecond":
                    return 604800000
                    break;
                case "microsecond":
                    return 604800000000
                    break;
                case "nanosecond":
                    return 604800000000000
                    break;
                case "picosecond":
                    return 604800000000000000
                    break;
                case "minute":
                    return 10080
                    break;
                case "hour":
                    return 168
                    break;
                case "day":
                    return 7
                    break;
                case "week":
                    return 1
                    break;
                case "month":
                    return 0.22997994661
                    break;
                case "year":
                    return 0.0191649555
                    break;
            }
            break;
        case "month":
            switch (to) {
                case "second":
                    return 2629800
                    break;
                case "millisecond":
                    return 2629800000
                    break;
                case "microsecond":
                    return 2629800000000
                    break;
                case "nanosecond":
                    return 2629800000000000
                    break;
                case "picosecond":
                    return 2629800000000000000
                    break;
                case "minute":
                    return 43830
                    break;
                case "hour":
                    return 730.5
                    break;
                case "day":
                    return 30.4375
                    break;
                case "week":
                    return 4.3482142857
                    break;
                case "month":
                    return 1
                    break;
                case "year":
                    return 0.0833333333
                    break;
            }
            break;
        case "year":
            switch (to) {
                case "second":
                    return 31557600
                    break;
                case "millisecond":
                    return 31557600000
                    break;
                case "microsecond":
                    return 31557600000000
                    break;
                case "nanosecond":
                    return 31557600000000000
                    break;
                case "picosecond":
                    return 31557600000000000000
                    break;
                case "minute":
                    return 525960
                    break;
                case "hour":
                    return 8766
                    break;
                case "day":
                    return 365.25
                    break;
                case "week":
                    return 52.178571429
                    break;
                case "month":
                    return 12
                    break;
                case "year":
                    return 1
                    break;
            }
            break;
    }
}


// CONVERTING THE VALUES
const convertLength = (from, to, value) => {
    let res, mult;
    switch (from) {
        case "meter":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "kilometer":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "centimeter":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "millimeter":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "micrometer":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "nanometer":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "mile":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "yard":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "foot":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "inch":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "lightyear":
            mult = getLengthMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
    }
}
const convertTemp = (from, to, value) => {
    let res;
    switch (from) {
        case "celsius":
            res = getTempMultiplier(from, to)
            outputValue.value = res
            break;
        case "kelvin":
            res = getTempMultiplier(from, to)
            outputValue.value = res
            break;
        case "fahrenheit":
            res = getTempMultiplier(from, to)
            outputValue.value = res
            break;
    }
}
const convertArea = (from, to, value) => {
    let res, mult;
    switch (from) {
        case "sqmeter":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "sqkilometer":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "sqcentimeter":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "sqmillimeter":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "sqmicrometer":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "hectare":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "sqmile":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "sqyard":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "sqfoot":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "sqinch":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "acre":
            mult = getAreaMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
    }
}
const convertVolume = (from, to, value) => {
    let res, mult;
    switch (from) {
        case "cumeter":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "cukilometer":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "cucentimeter":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "cumillimeter":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "litre":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "millilitre":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "gallon":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "cumile":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "cuyard":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "cufoot":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "cuinch":
            mult = getVolumeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
    }
}
const convertWeight = (from, to, value) => {
    let res, mult;
    switch (from) {
        case "kilogram":
            mult = getWeightMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "gram":
            mult = getWeightMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "milligram":
            mult = getWeightMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "metricton":
            mult = getWeightMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "longton":
            mult = getWeightMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "shortton":
            mult = getWeightMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "pound":
            mult = getWeightMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "ounce":
            mult = getWeightMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "carrat":
            mult = getWeightMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "amu":
            mult = getWeightMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
    }
}
const convertTime = (from, to, value) => {
    let res, mult;
    switch (from) {
        case "second":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "millisecond":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "microsecond":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "nanosecond":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "picosecond":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "minute":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "hour":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "day":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "week":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "month":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
        case "year":
            mult = getTimeMultiplier(from, to)
            res = Number(value * mult)
            outputValue.value = res
            break;
    }
}

// IDENTIFYING THE TYPE OF CONVERSION
const setConversionType = (fromUnit, toUnit) => {
    switch (type) {
        case 0:
            convertLength(fromUnit, toUnit, inputValue.value)
            break;
        case 1:
            convertTemp(fromUnit, toUnit, inputValue.value)
            break;
        case 2:
            convertArea(fromUnit, toUnit, inputValue.value)
            break;
        case 3:
            convertVolume(fromUnit, toUnit, inputValue.value)
            break;
        case 4:
            convertWeight(fromUnit, toUnit, inputValue.value)
            break;
        case 5:
            convertTime(fromUnit, toUnit, inputValue.value)
            break;
        default:
            console.log("Please select units")
            break;
    }
}

// SETTING UNITS TO CONVERT
const setUnit = (type) => {
    let fromUnitLength = document.getElementById("fromUnitLength")
    let toUnitLength = document.getElementById("toUnitLength")

    let fromUnitTemp = document.getElementById("fromUnitTemp")
    let toUnitTemp = document.getElementById("toUnitTemp")

    let fromUnitArea = document.getElementById("fromUnitArea")
    let toUnitArea = document.getElementById("toUnitArea")

    let fromUnitVolume = document.getElementById("fromUnitVolume")
    let toUnitVolume = document.getElementById("toUnitVolume")

    let fromUnitWeight = document.getElementById("fromUnitWeight")
    let toUnitWeight = document.getElementById("toUnitWeight")

    let fromUnitTime = document.getElementById("fromUnitTime")
    let toUnitTime = document.getElementById("toUnitTime")


    switch (type) {
        case 0:
            fromUnitLength.addEventListener("change", (e) => {
                fromUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })

            toUnitLength.addEventListener("change", (e) => {
                toUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })
            break;
        case 1:
            fromUnitTemp.addEventListener("change", (e) => {
                fromUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })

            toUnitTemp.addEventListener("change", (e) => {
                toUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })
            break;
        case 2:
            fromUnitArea.addEventListener("change", (e) => {
                fromUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })

            toUnitArea.addEventListener("change", (e) => {
                toUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })
            break;
        case 3:
            fromUnitVolume.addEventListener("change", (e) => {
                fromUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })

            toUnitVolume.addEventListener("change", (e) => {
                toUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })
            break;
        case 4:
            fromUnitWeight.addEventListener("change", (e) => {
                fromUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })

            toUnitWeight.addEventListener("change", (e) => {
                toUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })
            break;
        case 5:
            fromUnitTime.addEventListener("change", (e) => {
                fromUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })

            toUnitTime.addEventListener("change", (e) => {
                toUnit = e.target.value;
                setConversionType(fromUnit, toUnit)
            })
            break;
    }
}
setUnit(type)


inputValue.addEventListener("input", () => {
    setConversionType(fromUnit, toUnit)
})