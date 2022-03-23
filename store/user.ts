import { MutationTree } from 'vuex'

interface IStateUser {
  isAuthenticated: boolean,
  name: string
}

export const state = () : IStateUser => ({
  isAuthenticated: false,
  name: ''
})

export type RootState = ReturnType<typeof state>

export const mutations: MutationTree<RootState> = {
  setIsAuthenticated (state:IStateUser, data: boolean) {
    state.isAuthenticated = data
  }
}
