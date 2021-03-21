import { useEffect, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useDispatch, useSelector } from 'react-redux';
import { SEARCH_BY } from '../constants';
import { setCity } from '../redux/actions';
import { getCities } from '../sources';

const SearchControl = () => {
  const [searchString, setSearchString] = useState('');
  const citiesData = useSelector(state => state.locationReducer.getCities);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchString && searchString.length >= 3)
      dispatch(getCities(searchString))
  }, [searchString])

  const handleSearch = (str) => {
    setSearchString(str);
  }

  const handleSelection = (selectedCity) => {
    if (selectedCity && selectedCity.length > 0) {
      dispatch(setCity(selectedCity[0]));
    }
  }

  return (
    <div>
      <Typeahead
        id="search-control"
        labelKey={SEARCH_BY}
        placeholder="Search cities"
        onInputChange={handleSearch}
        onChange={handleSelection}
        minLength={3}
        options={citiesData.data}
        isLoading={citiesData.isLoading}
        multiple={false}
      />
    </div>
  )
}

export default SearchControl;