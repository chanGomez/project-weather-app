//add event listener to submit button
const form = document.querySelector("form");
const val = document.getElementById("#locationInput")
form.addEventListener("submit", (event)=>{
   event.preventDefault();
   //get what has been submitted into the link like new york = `https://wttr.in/${newyork}?format=j1` DONE
   const apiInput = event.target.locationInput.value
   let api = `https://wttr.in/` + apiInput + `?format=j1`;
   fetch(api)
   .then((response)=> response.json())
   .then((result)=>{



     let inputText = event.target.locationInput.value
     //MAIN SECTION
        //remove "Choose a location to view the weather." paragraph and add areaName on it in h2
        const chooseMessage = document.querySelector("#chooseLocation")
        chooseMessage.remove()

        let article = document.querySelector(".currentWeather")
        let nameHTwo = document.createElement("h2")
        nameHTwo.textContent = result.nearest_area[0].areaName[0].value
        // const main = document.querySelector("main").style.height = "300px";
        const main = document.querySelector("main")
        document.querySelector("main").style.height = "220px";
        document.querySelector("main").style.gridColumn = "1 / 4";
        document.querySelector(".currentWeather").style.gridColumn = "1 / 4";
        
        
        
        article.prepend(nameHTwo)
        //add area section in main
        let areaMain = document.createElement("p")
        areaMain.textContent = `Area: ${result.nearest_area[0].areaName[0].value}`
        nameHTwo.after(areaMain)
        //add region section in main
        let regionMain = document.createElement("p")
        regionMain.textContent = `Region: ${result.nearest_area[0].region[0].value}`
        areaMain.after(regionMain)
        //add country section in main
        let countryMain = document.createElement("p")
        countryMain.textContent = `Country: ${result.nearest_area[0].country[0].value}`
        regionMain.after(countryMain)
        //add currently section in main
        let currentlyMain = document.createElement("p")
        currentlyMain.textContent = `Currenlty: Feels Like ${result.current_condition[0].FeelsLikeF}°F`
        countryMain.after(currentlyMain)
        
        
        //TODAY
    const h3Today = document.querySelector(".today h3")
    h3Today.textContent = "Today"
    const averageTempToday = document.createElement("p")
    averageTempToday.textContent = `Average Temperature: ${result.weather[0].avgtempF}°F`
    h3Today.after(averageTempToday)
    const maxTempToday = document.createElement("p")
    maxTempToday.textContent = `Max Temperature: ${result.weather[0].maxtempF}°F`
    averageTempToday.after(maxTempToday)
    const minTempToday = document.createElement("p")
    minTempToday.textContent = `Min Temperature: ${result.weather[0].mintempF}°F`
    maxTempToday.after(minTempToday)


    //TOMORROW
    const h3Tomorrow = document.querySelector(".tomorrow h3")
    h3Tomorrow.textContent = "Tomorrow"
    const averageTempTomorrow = document.createElement("p")
    averageTempTomorrow.textContent = `Average Temperature: ${result.weather[1].avgtempF}°F`
    h3Tomorrow.after(averageTempTomorrow)
    const maxTempTomorrow = document.createElement("p")
    maxTempTomorrow.textContent = `Max Temperature: ${result.weather[1].maxtempF}°F`
    averageTempTomorrow.after(maxTempTomorrow)
    const minTempTomorrow = document.createElement("p")
    minTempTomorrow.textContent = `Min Temperature: ${result.weather[1].mintempF}°F`
    maxTempTomorrow.after(minTempTomorrow)

    //TODAY
    const h3DayAfter = document.querySelector(".dayAfter h3")
    h3DayAfter.textContent = "Day After Tomorrow"
    const averageTempDayAfter = document.createElement("p")
    averageTempDayAfter.textContent = `Average Temperature: ${result.weather[2].avgtempF}°F`
    h3DayAfter.after(averageTempDayAfter)
    const maxTempDayAfter = document.createElement("p")
    maxTempDayAfter.textContent = `Max Temperature: ${result.weather[2].maxtempF}°F`
    averageTempDayAfter.after(maxTempDayAfter)
    const minTempDayAfter = document.createElement("p")
    minTempDayAfter.textContent = `Min Temperature: ${result.weather[2].mintempF}°F`
    maxTempDayAfter.after(minTempDayAfter)

    //styles for ttd-container
    document.querySelector(".ttd-container").style.background = "linear-gradient(transparent 0%, #48abe0 400%"  
    document.querySelector(".ttd-container").style.borderRadius = "0px 0px 10px 10px" 
    document.querySelector(".ttd-container").style.borderBottom = "solid 3px rgb(172, 202, 0)"  

    //History list
     if(inputText){
        //remove prevouis message
        let noPrevious = document.querySelector("#noPrevious")
        noPrevious.remove()
         //add search to list
        let newListItems = inputText.split("\n");//array now
        for (let i = 0; i < newListItems.length; i++){
        const newListItem = document.createElement("li");
        let otherThanFirstLetter = newListItems[i].slice(1)
        let capNewListItem = newListItems[i].charAt(0).toUpperCase() + otherThanFirstLetter
        newListItem.innerHTML = `<li><a href="">${capNewListItem}</a> - ${result.current_condition[0].FeelsLikeF}°F </li>`;
        let searchList = document.querySelector("#searchList")
        searchList.append(newListItem); 

        newListItem.addEventListener("click", (event)=>{
            console.log(event.target);
        })
        }
    }
    //FORM REST
    document.querySelector("form").reset();
    console.log(article);
    console.log(event.target);
    console.log(result)
   })
   .catch((error)=>{
       console.log("error")
   })
})
