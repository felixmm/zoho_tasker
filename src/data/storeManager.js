import Store from "electron-store";

const storeName = process.env.NODE_ENV !== "production" ? "zohotasker_db_dev" : "zohotasker_db";

const _store = new Store({ name: storeName });

export const getWorkDay = (dateKey) => _store.get(dateKey);

export const setWorkDay = (workDay) => _store.set(workDay.dateKey, workDay);

export const dateKeyExists = (dateKey) => _store.has(dateKey);

export const saveTask = (dateKey, task) => {
    const workDay = _store.get(dateKey);
    
    workDay.tasks.push(task);
    _store.set(workDay.dateKey, workDay);
};

export const deleteTask = (dateKey, task) => {
    const workDay = _store.get(dateKey);

    workDay.tasks = workDay.tasks.filter(x => x.task != task.task);
    _store.set(workDay.dateKey, workDay);
}

export const addComment = (dateKey, comment) => {
    const workDay = _store.get(dateKey);

    workDay.comment = comment;
    _store.set(workDay.dateKey, workDay);
}

export const clearAll = () => _store.clear();

export const getAll = () => _store.get();