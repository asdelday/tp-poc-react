import * as types from '../constants/ActionTypes';

export function getHeroes() {
  return {
    type: types.GET_HEROES,
    date: Date.now(),
  };
};

export function addHeroToTeam(hero) {
  return {
    type: types.ADD_HERO_TO_TEAM,
    hero,
    date: Date.now(),
  };
};

export function removeHeroFromTeam(hero) {
  return {
    type: types.REMOVE_HERO_FROM_TEAM,
    hero,
    date: Date.now(),
  };
};
