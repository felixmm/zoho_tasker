import Store from "electron-store";

const _store = new Store();

export const getWorkDay = (dateKey) => _store.get(dateKey);

export const setWorkDay = (workDay) => _store.set(workDay.dateKey, workDay);

export const dateKeyExists = (dateKey) => _store.has(dateKey);