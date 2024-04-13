import { defineStore } from 'pinia';

export const useUIStore = defineStore('ui', {
  state: () => ({
    isSideMenuOpen: true,
  }),
  getters: {
  },
  actions: {
    toggleSideMenu() {
      this.isSideMenuOpen = !this.isSideMenuOpen
    },
  },
});
