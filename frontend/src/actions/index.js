import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/products';
const QUERY = '?';
const JOIN = '&';
const CATEGORY = 'category=';
const SEARCH = 'search=';
const SORT = 'price=';


export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SORT_OPTION = 'SET_SORT_OPTION';
export const SET_CATEGORY = 'SET_CATEGORY';

export function fetchProducts(searchTerm = null, sortOption = null, category = null) {
  let url = ROOT_URL; 
  
  if (searchTerm || sortOption || category) {
    url += QUERY;

    // Search Term
    if (searchTerm) {
      url += SEARCH + searchTerm;
      if (sortOption) {
        url += JOIN + SORT + sortOption;
      }
      if (category) {
        url += JOIN + CATEGORY + category;
      }
    
      // No search term
    } else if (sortOption) {
      url += SORT + sortOption;
      if (category) {
        url += JOIN + CATEGORY + category;
      }
    
      // no price sort
    } else if (category) {
      url += CATEGORY + category;
    }
  }

  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export function setSortOption(sortOption) {
  console.log("IN actions, sort was set to " + sortOption);
  return {
    type: SET_SORT_OPTION,
    payload: sortOption
  }
}

export function setSearchTerm(searchTerm) {
  return {
    type: SET_SEARCH_TERM,
    payload: searchTerm
  }
}

export function setCategory(category) {
  return {
    type: SET_CATEGORY,
    payload: category
  }
}


