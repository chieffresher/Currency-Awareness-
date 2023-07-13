
//note: replace "/js/country-locale.json" with the correct path of country-locale.json on your machine
function populateDropDownBoxWithCurrencyInfo() {
    fetch("/js/country-locale.json")
        .then((response) => response.json())
        .then((json) => {
            languageinfo = json.languages;
            //display countries
            let countriesHtml = "<option disabled selected>Select Currency</option> ";
            languageinfo.forEach((language) => {
                countriesHtml += `<option value="${language.locale},${language.currencyCode}">` + language.language + "</option>";
            })
            document.getElementById("currencyDetailId").innerHTML = countriesHtml;
        });
}

//Applying currency info to an amount
let curinfo = getCurrencyInfoFromDb();
currency_info = curinfo.split(",")
let CurrencyFormater = new Intl.NumberFormat(currency_info[0], {
    style: 'currency',
    currency: currency_info[1],
});
let total = 1020;
CurrencyFormater.format(total)
