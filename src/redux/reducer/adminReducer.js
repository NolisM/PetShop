import {
  GET_PRODUCTS,
} from "../actions/adminActions";

const initialState = {
    products: [],
    details: [],
    categories: [],
    filteredProducts: [],
    users: [],
    user:[],
    orders:[],
    form:[],
    animalCategory:[],
    allVisits:[],
    allAnalytics:[],
    pets:[],
}


  function adminReducer(state = initialState, action) {
    switch (action.type) {
      case GET_PRODUCTS:
        return {
          ...state, products: action.payload,
        };
      case 'POST_PRODUCT': {
        return {
          ...state,
          products: action.payload
        }
      }
      case 'PUT_PRODUCT': {
        return state;
      }
      case "GET_DETAIL_PRODUCTS": {
        return {
          ...state,
          details: action.payload,
          backupDetail: action.payload,
        };
      }
      case 'GET_PRODUCT_CATEGORY': {
        return {
          ...state,
          categories:action.payload

        }
      }
      case `DELETE_PRODUCT`: {
          return {  
            ...state,
            products: state.products.filter(
              (product) => product.id != action.payload
            )
          };
      }
      case 'GET_ANIMAL_CATEGORY': {
        return {
          ...state,
          animalCategory:action.payload
        }
      }
      case 'GET_USERS':
        return {
          ...state, users: action.payload,
      }
      case "USER_ON": {
        return state;
      }
      case "USER_OFF": {
        return state;
      }
      case 'DELETE_USER':
        return {
          ...state, 
          users: state.users.filter(
            (us) => us.id != action.payload
          )
      }
      case 'GET_DETAIL_USER': {
        return {
          ...state,
          user: action.payload,
        };
      }
      case 'PUT_USER': {
        return state;
      }  
      case 'GET_ANALYTICS': {
        return {
          ...state,
          allAnalytics: action.payload,
        };
      }
      case 'GET_VISITS': {
        return {
          ...state,
          allVisits: action.payload,
        };
      }
      case "GET_ALL_TOTAL_PETS": {
        return {
            ...state,
            pets: action.payload,
        };
      }
      case 'PUT_PET': {
        return state;
      }  
      case "DELETE_PET": {
        return state;
      }
      case "OK_PET": {
        return state;
      }
      default:
          return state;

    }
   
}

export default adminReducer;