// import {ref, computed} from 'vue';
// import {defineStore} from 'pinia'

// export const authStore = defineStore('auth', ()=> {
  
//   const user = ref(null);

//   const isLogged = computed((gameId)=> games.value.find(g => g.id === gameId));

//   function login(){
    
//   }

//   function logout(){
   
//   }

// return {games, gameForId, addGame, removeGame}

// })




import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const authStore = defineStore('auth', () => {
  const user = ref(null);

 
  const isLogged = computed(() => user.value !== null);

  function login(userInfo) {
    user.value = userInfo;
  }

  function logout() {
    user.value = null;
  }

  return { user, isLogged, login, logout };
});
