import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { state, mutations } from '~/store/tasks'
import tasks from '@/pages/tasks.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Task Page', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        tasks: {
          state,
          mutations,
          namespaced: true
        }
      }
    })
  })
  test('Add new Task', async () => {
    const wrapper = shallowMount(tasks, { store, localVue })
    expect(wrapper.vm).toBeTruthy()
    const newTaskName = 'Test Task'
    await wrapper.find('form input[type="text"]').setValue(newTaskName)
    await wrapper.find('form > button').trigger('click')
    console.log(wrapper.text())

    // expect(wrapper.vm.$store.state.tasks.tasks.filter(e => e.name === newTaskName))
    expect(wrapper.find('div > span')).toBe(newTaskName)
  })
})
