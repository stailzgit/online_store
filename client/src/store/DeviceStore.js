import {makeAutoObservable} from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
      {id: 3, name: 'Телевизоры'},
      {id: 4, name: 'Пылесосы'},
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
      {id: 3, name: 'Lenovo'},
      {id: 4, name: 'Asus'},
    ]
    this._devices = [
      { "id": 1, "name": "12 pro", "price": "100000", "rating": "0", "img": "96ad6c84-3471-4fba-9392-f727b1a80667.jpg", "createdAt": "2022-01-27T18:48:23.425Z", "updatedAt": "2022-01-27T18:48:23.425Z", "typeId": 2, "brandId": 2},
      { "id": 2, "name": "a51", "price": "100000", "rating": "0", "img": "d0472e55-bbe7-4cca-8cc2-46f1b315ca86.jpg", "createdAt": "2022-01-27T18:59:42.256Z", "updatedAt": "2022-01-27T18:59:42.256Z", "typeId": 1, "brandId": 1},
      { "id": 3, "name": "a515","price": "100000", "rating": "0", "img": "671f47b1-fee5-4d03-a67b-32c13d6c3d11.jpg", "createdAt": "2022-01-27T18:59:54.328Z", "updatedAt": "2022-01-27T18:59:54.328Z", "typeId": 2, "brandId": 1},
      {"id": 4, "name": "note pro", "price": "100000", "rating": "0", "img": "8a9ba10d-e5a7-49cf-9fff-9f3ba791952f.jpg", "createdAt": "2022-01-27T19:00:13.427Z", "updatedAt": "2022-01-27T19:00:13.427Z", "typeId": 2, "brandId": 2},
      {"id": 5, "name": "Atlant", "price": "100000", "rating": "0", "img": "706f6a5b-38f9-4b6a-b0b3-71d0f184fdc0.jpg", "createdAt": "2022-01-27T19:00:22.878Z", "updatedAt": "2022-01-27T19:00:22.878Z", "typeId": 2, "brandId": 2}
    ]
    this._selectedType = {}
    this._selectedBrand = {}
    makeAutoObservable(this)
  }

  setTypes(types) { this._types = types }
  setBrands(brands){ this._brands = brands }
  setDevices(devices){ this._devices = devices }
  setUser(user) { this._user = user }
  setSelectedType(type) { this._selectedType = type }
  setSelectedBrand(brand) { this._selectedBrand = brand }

  get types() { return this._types }
  get users() { return this._user }
  get brands() { return this._brands }
  get devices() { return this._devices }
  get selectedType() { return this._selectedType }
  get selectedBrand() { return this._selectedBrand }


}