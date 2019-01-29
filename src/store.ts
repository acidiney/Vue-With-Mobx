import { computed, observable, action } from 'mobx';

class Store {
    @observable public todo = [
        { role: 'comer', isCompleted: true},
        { role: 'casa', isCompleted: false},
    ];

    @computed get getIncompletedTasks() {
        return this.todo.filter((el) => !el.isCompleted);
    }

    @computed get getCompletedTasks() {
        return this.todo.filter((el) => el.isCompleted);
    }
}

const store = new Store();
export default store;
