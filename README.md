### This is a sample of using HTML + CSS + JS file to make simple web page. It provides a tool to convert kilometers to miles and vice versa.

## Briefly introduction: 
(Thanks to the author of this page: https://www.calculatorful.com/kilometers-to-miles)

### Kilometer (Kilometre) - Unit of distance measurement in many countries

The kilometer is a unit of length in the International System of Units (SI), commonly known as the metric system. As its prefix “kilo” indicates, one kilometer equals 1000 meters. 

### Mile, is it used more widely than the kilometer?

The mile is a unit of distance in the US customary system or the Imperial system, equal to 1,760 yards or 1.6 kilometers. The mile is a common unit used to show the distances between places and it is widely used in English-speaking countries such as the USA. 

### How many kilometers in a mile?
One mile equals 1.609344 km. Hence, 1 km is equal to 0.621371 mi.

To convert [kilometers into miles](https://www.calculatorful.com/kilometers-to-miles), you multiply the distance value by 0.621371 because 1 km equals 0.621371 mi. The following is the formula:

Miles = kilometers × 0.621371

## Steps to create the website
1. Create an html file to handle input event and display the results
```
<body>
    <div class="container">
        <div class="parent-container">
            <div class="child-container">
                <h2>Enter the Value</h2>               
                    <div class="base-container">
                        <label for="Kilometer">Kilometer</label>
                        <input type="number" id="km" placeholder="Enter Kilometer Values">
                    </div>
                    <div class="height-container">
                        <label for="miles">Miles</label>
                        <input type="number" id="miles" placeholder="Enter miles Values">
                    </div>
                    <button onclick="convertKmToMiles()" type="submit" class="btnSubmit">Km-To-Miles</button>
                    <button onclick="convertMilesTokm()" type="submit" class="btnSubmit">Miles-To-km</button>
            </div>
        </div>
    </div>

</body>
```
2. Create a script to make the conversion
```
const factor = 0.621371

function KmToMiles() {
  const kilometers = parseInt(document.getElementById("km").value);
  const miles = kilometers * factor;
  document.getElementById("miles").value = miles;
}

function MilesTokm() {
  const Miles = parseInt(document.getElementById("miles").value);
  const kilometers = Miles / factor;
  document.getElementById("km").value = kilometers;
}

```
3. Create a css file to define the styles for the page

```
.container{
    color: white;
    position: relative;
    display: flex;
    text-align: left;
}
.parent-container{
    color: black;
}
.child-container{
    background-color: rgba(240, 248, 255, 0.412);
    margin: 20px 20px;
    padding: 20px;
}
.base-container{
    margin-bottom: 10px;
}
.height-container{
    margin-bottom: 20px;
}
.btnSubmit{
    color: black;
}
```