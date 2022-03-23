import { Middleware } from '@nuxt/types'

const authentication: Middleware = ({ app, store, redirect }) => {
  console.log('plugin authentication')
  // Use context
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.router.beforeEach((to, from, next) => {
    console.log(to)
    if (to.path === '/login') {
      next()
    } else if (store.state.user.isAuthenticated) {
      console.log('sigue')
      next()
    } else {
      console.log('DEBE IR A LOGIN')
      // app?.router?.push('/login')
      redirect('/login')
    }
  })
}

export default authentication
