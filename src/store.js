import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    registrations: [],
    users: [
        {id: 1, name: 'Max', registered: false},
        {id: 2, name: 'Anna', registered: false},
        {id: 3, name: 'Chris', registered: false},
        {id: 4, name: 'Sven', registered: false}
    ]
  },
  getters: {
    unregisteredUsers: function(state) {
      return state.users.filter(usr => {
        !usr.registered;
      })
    }
  },
  mutations: {
    register(state, userId) {
      const user = state.users.find(usr => {
        return usr.id == userId;
      });
      user.registered = true;
      const date = new Date;
      const day = date.getDay() < 10 ? '0'+date.getDay() : date.getDay();
      const mon = date.getMonth() < 10 ? '0'+date.getMonth() : date.getMonth();
      state.registrations.push({
        userId: user.id, 
        name: user.name, 
        date: day + '/' + mon
      });
    },
    unregister(state, payload) {
      const user = state.users.find(usr => {
        return usr.id == payload.uid;
      });
      user.registered = false;      
      state.registrations.splice(payload.index, 1);
    }
  },
  // actions will make the code asysnchronous - everything will run simultaneously
  // We can have http/ajax calls, then call mutations
  actions: {
    myregister(context, userId) {
      setTimeout( () => {
        context.commit('register', userId)
      }, 500);
    }
  }
});