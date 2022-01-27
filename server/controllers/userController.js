const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const {User, Basket} = require('../models/models')

class UserController {
  async registration(req, res, next) {
    const {email, password, role} = req.body
    if(!email || !password) {
      return next(ApiError.badRequest('Некоректный email или password'))
    }

    const candidate = await User.findOne({where: {email}})
    if(candidate) {
      return next(ApiError.badRequest('Пользователь с таким email уже существует'))
    }

    const hashPassword = await  bcrypt.hash(password, 5)
    const user = await User.create({email, role, password: hashPassword})

  }

  async login(req, res) {

  }

  async check(req, res, next) {
    const {id} = req.query
    if(!id){
      return next(ApiError.badRequest('Не задан ID'))
    }
    res.json(id)
  }
}

module.exports = new UserController()