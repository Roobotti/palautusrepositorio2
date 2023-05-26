const Filter = (countries, filter) => {
    return countries.filter(country => country.name.common.slice(0, filter.length).toLowerCase() === filter.toLowerCase())
  }

export default Filter