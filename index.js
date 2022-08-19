"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCity = exports.displayCities = exports.getCity = exports.addCity = void 0;
const addCity = () => {
    var newCity = {
        name: document.getElementById("city").value,
        country: document.getElementById("country").value,
        population: parseInt(document.getElementById("population").value),
    };
    if (!newCity.name || !newCity.country || !newCity.population) {
        return alert("Invalid input.");
    }
    var storage = localStorage.getItem('cities');
    if (storage) {
        var cityNew = JSON.parse(`${storage}`);
        cityNew.push(newCity);
        localStorage.setItem("cities", JSON.stringify(cityNew));
    }
    else {
        localStorage.setItem("cities", JSON.stringify([newCity]));
    }
    //displayCities()
    (0, exports.getCity)();
};
exports.addCity = addCity;
let city = JSON.parse(`${localStorage.getItem('cities')}`);
const getCity = () => {
    (0, exports.displayCities)(city);
};
exports.getCity = getCity;
const displayCities = (cities) => {
    let table = document.getElementById("tbl");
    if (table) {
        while (table.hasChildNodes() && table.children[1]) {
            table.removeChild(table.children[1]);
        }
    }
    for (let i in cities) {
        let tr = document.createElement("tr");
        let c = tr.insertCell(0);
        c.innerHTML = cities[i].name;
        c = tr.insertCell(1);
        c.innerHTML = cities[i].country;
        c = tr.insertCell(2);
        c.innerHTML = cities[i].population.toString();
        if (table) {
            table === null || table === void 0 ? void 0 : table.appendChild(tr);
        }
    }
};
exports.displayCities = displayCities;
const SearchCity = (search) => {
    let result = city.filter((data) => {
        return data.name.includes(search) || data.country.includes(search);
    });
    (0, exports.displayCities)(result);
};
exports.SearchCity = SearchCity;
(0, exports.getCity)();
