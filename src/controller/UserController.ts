import {Request, Response} from 'express'

import User from '../schema/User'

class UserController {
  public async index (req:Request, res:Response): Promise<Response> {
    console.log('entrou')
    try {
      const users = await User.find()
      return res.json(users)  
    } catch (error) {
      console.log(error)
      return res.json(error)
    }    
  }

  public async store (req:Request, res:Response): Promise<Response> {
    try {
      const user = await User.create(req.body)      
      return res.json(user)
    } catch (error) {
      console.log(error)
      return res.json(error)
    }
  }
}

export default new UserController()
