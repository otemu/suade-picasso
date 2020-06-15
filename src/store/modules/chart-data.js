// import axios from "axios";
import people from '@/data/data';

const chartData = {
  namespaced: true,
  state: {
    data: people,
    updated: 0,
  },
  actions: {
    update({ commit }, obj) {
      commit('UPDATE_DATA', obj);
    },
    remove({ commit }, obj) {
      commit('REMOVE_DATA', obj);
    },
  },
  mutations: {
    UPDATE_DATA(state, obj) {
      const { type } = obj;
      const idx = state.data.findIndex((x) => x.id === obj.id);
      state.data[idx][type] = obj.value;
      state.updated += 1;
    },
    REMOVE_DATA(state, obj) {
      const idx = state.data.findIndex((x) => x.id === obj.id);
      state.data.splice(idx, 1);
      state.updated += 1;
    },
  },
};

export default chartData;
