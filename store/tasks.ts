import { MutationTree } from 'vuex'

export interface ITask {
  id: string,
  isActive: boolean,
  name: string
}

interface IStateTask {
  tasks: Array<ITask>
}

export const state = () : IStateTask => ({
  tasks: [] as Array<ITask>
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  addTask (state, payload:ITask) {
    state.tasks.push(payload)
  },
  removeTask (state:IStateTask, idTask:string) {
    const indexTask = state.tasks.findIndex(e => e.id === idTask)
    if (indexTask >= 0) { state.tasks.splice(indexTask, 1) }
  },
  setIsActiveToTask (state: IStateTask, payload: {id:string, isActive: boolean}) {
    const task = state.tasks.find(e => e.id === payload.id)
    if (task) { task.isActive = payload.isActive }
  }
}
