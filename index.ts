interface Cities {
    name: string;
    country: string;
    population: number;

}
export const addCity = () => {
    var newCity = {
        name: (<HTMLInputElement>document.getElementById("city")).value,
        country: (<HTMLInputElement>document.getElementById("country")).value,
        population: parseInt((<HTMLInputElement>document.getElementById("population")).value),
    }
    
    if(!newCity.name || !newCity.country || !newCity.population){
        return alert("Invalid input.")
    }
    var storage = localStorage.getItem('cities')
    if(storage){
        var cityNew = JSON.parse(`${storage}`)
        cityNew.push(newCity)
        localStorage.setItem("cities", JSON.stringify(cityNew))
    }else {
        localStorage.setItem("cities", JSON.stringify([newCity]))
    }
    
    //displayCities()
    getCity()

}

let city: Cities[] = JSON.parse(`${localStorage.getItem('cities')}`)

export const getCity = () => {
    displayCities(city)
}

export const displayCities = (cities: Cities[]) => {
    let table = document.getElementById("tbl")
    if(table) {
        while(table.hasChildNodes() && table.children[1]) {
            table.removeChild(table.children[1]);
        }
    }
    for(let i in cities){
        let tr = document.createElement("tr")
        let c = tr.insertCell(0)
        c.innerHTML = cities[i].name
        c = tr.insertCell(1)
        c.innerHTML = cities[i].country
        c = tr.insertCell(2)
        c.innerHTML = cities[i].population.toString()
        if(table) {
            table?.appendChild(tr);
        }

    }
}
export const SearchCity = (search: string) =>{
    
    let result = city.filter((data) => {
        return data.name.includes(search) || data.country.includes(search)
    });
    displayCities(result)
    
}
getCity()




