import Store from "electron-store";

const _store = new Store();

export const setUserStory = (userStory) => _store.set(userStory.dateKey, userStory);

export const getUserStory = (dateKey) => _store.get(dateKey);