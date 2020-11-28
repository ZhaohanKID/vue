import Vue from 'vue'
import Router from 'vue-router'

import Main from '../views/Main'
import Login from "../views/Login";

import UserProfile from '../views/user/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Main',
      path: '/main',
      component: Main,
      children: [
        {
          name: 'UserProfile',
          path: '/user/profile/:id',
          component: UserProfile
        }
      ]
    },{
      name: 'Login',
      path: '/login',
      component: Login
    },{
      path: '/goHome',
      redirect: '/main'
    }
  ]
});
