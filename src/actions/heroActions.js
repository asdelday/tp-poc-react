import { actionTypes } from 'constants';

export function requestHeroes() {
  return {
    type: actionTypes.REQUEST_HEROES,
    date: Date.now(),
  };
}

export function receiveHeroes(result) {
  return {
    type: actionTypes.RECEIVE_HEROES,
    result,
    date: Date.now(),
  };
}

export function setHeroesLimit(limit) {
  return {
    type: actionTypes.SET_HEROES_LIMIT,
    limit,
    date: Date.now(),
  };
}

export function setHeroesTeamTitle(title) {
  return {
    type: actionTypes.SET_HEROES_TEAM_TITLE,
    title,
    date: Date.now(),
  };
}

export function addHeroToTeam(id) {
  return {
    type: actionTypes.ADD_HERO_TO_TEAM,
    id,
    date: Date.now(),
  };
}

export function removeHeroFromTeam(id) {
  return {
    type: actionTypes.REMOVE_HERO_FROM_TEAM,
    id,
    date: Date.now(),
  };
}

export function newHero(hero) {
  return {
    type: actionTypes.NEW_HERO,
    hero,
    date: Date.now(),
  };
}
