import { getAllUser } from "../api/user";
import { getAllCategory } from "../api/category";

class Formatter {
  constructor() {
    this.users = []
    this.categories = []
  }

  setUsers (users) {
    this.users = users
  }

  async getUsers () {
    try {
      const data = await getAllUser()
      this.users = data.result
    } catch (e) {
      console.log(e)
      this.users = []
    }
  }

  setCategories (categories) {
    this.categories = categories
  }

  async getCategories () {
    try {
      const data = await getAllCategory()
      this.users = data.result
    } catch (e) {
      console.log(e)
      this.users = []
    }
  }

  userFormatter (userId) {
    const user = this.users.find(item => item.id === userId)
    return user ? user.name : ''
  }

  categoryFormatter (id) {
    const category = this.categories.find(item => item.id === id)
    return category ? category.categoryName : ''
  }
}

export default new Formatter()

