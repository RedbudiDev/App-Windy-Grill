
/**
 * 
 * @param {object} params 
 * @returns strings of query params
 */
export function generateSearchCiteria(params) {
    let searchCriteria = {};
    let count = 0;
    for (const key in params) {
        switch (key) {
            case "pageSize":
                searchCriteria["searchCriteria[pageSize]"] = params[key].value;
                break;
            case "currentPage":
                searchCriteria["searchCriteria[currentPage]"] = params[key].value;
                break;
            case "sortOrders":
                const [field, direction] = params[key].value.split("_");
                if (field && direction) {
                    searchCriteria["searchCriteria[sortOrders][0][field]"] = field;
                    searchCriteria["searchCriteria[sortOrders][0][direction]"] =
                        direction;
                }
                break;
            default:
                searchCriteria[
                    `searchCriteria[filter_groups][${count}][filters][0][field]`
                ] = key;
                searchCriteria[
                    `searchCriteria[filter_groups][${count}][filters][0][value]`
                ] = params[key].value;
                searchCriteria[
                    `searchCriteria[filter_groups][${count}][filters][0][condition_type]`
                ] = "eq";
                count++;
                break;
        }
    }

    return searchCriteria;
};

/** 
 * function for returning full url based on baseurl + search criteria
 * it is query string
 */
export function appendSearchCiteria(path, searchCriteria) {
    let url = path + "?";
    for (const key in searchCriteria) {
      url += `${key}=${searchCriteria[key]}&`;
    }
    return url;
};

/** function for formatting number */
export function numberToCurrency (number) {
    if(number) {
        const numberString = number?.toString();
        const [celiDeo, decimalniDeo] = numberString?.toString().split('.');
    
        const formatiraniCeoDeo = celiDeo?.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const formatiraniBroj = decimalniDeo
            ? `${formatiraniCeoDeo},${decimalniDeo}`
            : `${formatiraniCeoDeo},${`00`}`;
    
        return formatiraniBroj;
    } else {
        return "";
    }
}