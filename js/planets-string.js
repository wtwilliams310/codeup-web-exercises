(function(){
    "use strict";

    // var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;
    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    // planetsArray = planetsString.split('|');

    // console.log(planetsArray);

    // *
    //  * TODO:
    //  * Create a string with <br> tags between each planet. console.log() your
    //  * results. Why might this be useful?
    //  *
    // var planetBrString = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";

    // console.log(planetBrString);

    // document.body.innerHTML += planetBrString;


    //******another option shown in class
    //const planetsWithBreaks = planetsArray.join('<br>');
    //document.write(planetsWithBreaks);


    // * BONUS:
    // * Create another string that would display your planets in an un-ordered list
    // * list. You will need an opening AND closing <ul> tags around the entire
    // * string, and <li> tags around each planet.

    //***Solution #1: If we are able to create string with <li> tags. See additional solution below if no <li> tags are in string.***

    // let ulPlanetString = "<ul>" + "<li>Mercury</li><li>Venus</li><li>Earth</li><li>Mars</li><li>Jupiter</li><li>Saturn</li><li>Uranus</li><li>Neptune</li>" + "</ul>"
    // console.log(ulPlanetString);

    // document.body.innerHTML += ulPlanetString;


    //***Solution #2: This is another way using split and join together (assuming string did not already have <li> tags already***

    // let ulistPlanetString = "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune";
    // console.log("String displayed in an unordered list.");

    // let ulPlanetString = "<ul><li>" + "Mercury, Venus, Earth, Mars, Jupite, Saturn, Uranus, Neptune".split(", ").join("</li><li>") + "</li></ul>"
    // console.log(ulPlanetString);

    // document.body.innerHTML += ulPlanetString;

    //***class solution***
    // const planetsWithBreaks = planetsArray.join('<br>');
    //
    // const planetsList = '<ul><li>' + planetsArray.join('</li><li>) + '</li></ul>';
    //
    //     console.log(planetsList);
    //
    // document.write(planetsList);)

})();