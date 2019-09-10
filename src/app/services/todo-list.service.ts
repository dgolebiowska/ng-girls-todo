import { StorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
const todoListStorageKey = 'Todo_List';

const defaultTodoList = [
  {title: 'install NodeJS'},
  {title: 'install Angular CLI'},
  {title: 'create new app'},
  {title: 'serve app'},
  {title: 'develop app'},
  {title: 'deploy app'},
];
@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private todoList: TodoItem[];
  constructor(private storageService: StorageService) {
    this.todoList = storageService.getData(todoListStorageKey) || defaultTodoList;
  }

  addItem(item: TodoItem){
    this.todoList.push(item);
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
  updateItem(item:TodoItem, changes){
    const index=this.todoList.indexOf(item);
    this.todoList[index]={...item,...changes};
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
  saveList(){
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
  deleteItem(item:TodoItem){
    const index=this.todoList.indexOf(item);
    this.todoList.splice(index,1);
    this.saveList();

  }
  getTodoList() {
    return this.todoList;
  }
}