import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    offices: [
      {
        city: 'Kyiv',
        country: 'Ukraine',
        street: 'Kuiv, Stepan Bandera, 33',
        postcode: '02066',
        coords: {
          lat: 50.4501,
          lng: 30.5234
        }
      },
      {
        city: 'New York',
        country: 'USA',
        street: '1027 Flatbush Ave, Brooklyn',
        postcode: '11226',
        coords: {
          lat: 40.638914,
          lng: -73.973199
        }
      },
      {
        city: 'Guangzhou',
        country: 'China',
        street: '137 Gexin Rd, Haizhu Qu',
        postcode: '23596',
        coords: {
          lat: 23.089225,
          lng: 113.254926
        }
      },
      {
        city: 'Barcelona',
        country: 'Spain',
        street: 'Passeig de Gràcia, 43',
        postcode: '08007',
        coords: {
          lat: 41.390424,
          lng: 2.163663
        }
      },
      
    ]
    /* offices: {
      kyiv: {
        lat: 50.4501,
        lng: 30.5234
      },
      "new york": {
        lat: 40.7128,
        lng: -73.935242
      },
      guangzhou: {
        lat: 23.1291,
        lng: 113.2644
      },
      barcelona: {
        lat: 41.3851,
        lng: 2.1734
      }
    }, */
    /* currentCoordinates: {
      lat: 50.4501,
      lng: 30.5234
    } */
  },
  /* mutations: {
    UPDATE_COORDINATES(state, payload) {
      state.currentCoordinates = payload;
    }
  },
  actions: {
    changeCurrentCoordinates({ commit }, coordinates) {
      commit("UPDATE_COORDINATES", coordinates);
    }
  }, */
  getters: {
    allOffices (state) {
      return state.offices;
    }
    /* cityCoordinates: state => state.cityCoordinates */
  }
});

export default store;