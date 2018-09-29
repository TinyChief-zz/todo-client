import {signUserIn, signUserUp, logoutUser} from '@/store/actions/auth'
import {createTask, getUserTasks, getTodayTasks, openNewTask} from '@/store/actions/task'

export default {
  toggleMenu ({ commit }) {
    commit('toggleMenu')
  },
  createTask,
  getUserTasks,
  getTodayTasks,
  openNewTask,
  signUserIn,
  signUserUp,
  logoutUser
}
