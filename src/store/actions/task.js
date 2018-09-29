import TaskService from '@/services/TaskService'

// import router from '@/router'
import toast from '@/toast'

async function getUserTasks ({ commit }) {
  try {
    const tasks = await TaskService.getUserTasks({
      userId: this.state.user._id,
      jwt: this.state.jwt
    })
    // getTodayTasks()
    commit('setUserTasks', tasks.data)
  } catch (err) {
    console.log(err)
  }
}
async function createTask ({ commit }, payload) {
  try {
    // commit('addTaskToUser', payload.task_id)
    const response = await TaskService.addNewTask({
      task: {
        ...payload,
        userId: this.state.user._id
      },
      jwt: this.state.jwt
    })
    commit('addTaskToUser', response.data)
    // Check if need to add to todayTasks list
    const todayDay = new Date().getDate()
    const todayMonth = new Date().getMonth()
    const todayYear = new Date().getFullYear()
    const taskDate = new Date(response.data.date)

    if (
      todayDay === taskDate.getDate() &&
      todayMonth === taskDate.getMonth() &&
      todayYear === taskDate.getFullYear()
    ) {
      commit('addTodayTask', response.data)
    }
    commit('openNewTask')
    toast.taskSuccess()
  } catch (err) {
    commit('openNewTask')
    toast.taskError()
    console.error(err)
  }
}

function getTodayTasks ({ commit }) {
  const todayDay = new Date().getDate()
  const todayMonth = new Date().getMonth()
  const todayYear = new Date().getFullYear()

  const result = this.state.userTasks.filter(task => {
    const taskDate = new Date(task.date)
    // Day of the month
    const taskDay = taskDate.getDate()
    const taskMonth = taskDate.getMonth()
    const taskYear = taskDate.getFullYear()

    if (
      todayDay === taskDay &&
      todayMonth === taskMonth &&
      todayYear === taskYear
    ) {
      return true
    }
  })
  commit('setTodayTasks', result)
}

function openNewTask ({ commit }) {
  commit('openNewTask')
}

export { getUserTasks, createTask, getTodayTasks, openNewTask }
