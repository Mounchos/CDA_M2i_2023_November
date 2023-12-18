import {ref, computed} from 'vue';
import {defineStore} from 'pinia'

export const gameStore = defineStore('games', ()=> {
  
  const games = ref([]);

  const gameForId = computed((gameId)=> games.value.find(g => g.id === gameId));

  function addGame(game){
    games.value.push(game);
  }

  function removeGame(game){
    games.value = games.value.filter(g => g!== game);
  }

return {games, gameForId, addGame, removeGame}

})