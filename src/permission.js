import router from './router'
import store from './store'
const white_list = ['/login', '/404']

router.beforeEach((to, from, next) => {
  const token = store.state.user.token
  if (token) {
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    if (white_list.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
