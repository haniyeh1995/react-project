import { useState } from "react"
import { AsyncPaginate } from "react-select-async-paginate"
import PropTypes from 'prop-types'
import { GEO_API_URL, geoApiOptions } from "../../Api";



function Search({onSearchChanege}){

    const [search,setSearch]= useState(null);

    const handelOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChanege(searchData);
    }

    const loadOptions = (inputValue) => {
        return fetch(
            `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
            geoApiOptions
          )
            .then((response) => response.json())
            .then((response) => {
              return {
                options: response.data.map((city) => {
                  return {
                    value: `${city.latitude} ${city.longitude}`,
                    label: `${city.name}, ${city.countryCode}`,
                  };
                }),
              };
            });
    }

    return(
        <div>
            <AsyncPaginate
            placeholder = "Serach the city"
            debounceTimeout={700}
            value ={search}
            onChange={handelOnChange}
            loadOptions={loadOptions}
            />
        </div>

    )
}

Search.propTypes = {
    onSearchChanege: PropTypes.func,
}
export default Search