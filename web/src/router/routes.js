import { URI_PREFIX } from '../libs/constants'

export default [{
  path: URI_PREFIX,
  name: 'Dashboard',
  component: () => import('@/views/Dashboard.vue')
}, {
  path: URI_PREFIX + '/http/routes',
  name: 'Http Routes',
  component: () => import('../views/http/HttpRoutes.vue')
}, {
  path: URI_PREFIX + '/application',
  name: 'Application',
  component: () => import('../views/Application.vue')
}, {
  path: URI_PREFIX + '/app/info',
  name: 'Application Info',
  component: () => import('../views/app/AppInfo.vue')
}, {
  path: URI_PREFIX + '/app/events',
  name: 'Application Events',
  component: () => import('../views/app/AppEvents.vue')
}, {
  path: URI_PREFIX + '/server/info',
  name: 'Server Info',
  component: () => import('../views/server/ServerInfo.vue')
}, {
  path: URI_PREFIX + '/server/stats',
  name: 'Server Stats',
  component: () => import('../views/server/ServerStats.vue')
}, {
  path: URI_PREFIX + '/server/config',
  name: 'Server Config',
  component: () => import('../views/server/ServerConfig.vue')
}, {
  path: URI_PREFIX + '/server/events',
  name: 'Server Events',
  component: () => import('../views/server/ServerEvents.vue')
}, {
  path: URI_PREFIX + '/ws/routes',
  name: 'WebSocket Routes',
  component: () => import('../views/ws/WsRoutes.vue')
}, {
  path: URI_PREFIX + '/ws/test',
  name: 'WebSocket Test',
  component: () => import('../views/ws/WsTest.vue')
}, {
  path: URI_PREFIX + '/rpc/routes',
  name: 'Rpc Routes',
  component: () => import('../views/rpc/RpcRoutes.vue')
}, {
  path: URI_PREFIX + '/code/gen',
  name: 'Generator',
  component: () => import('../views/gen/GenView.vue')
}, {
  path: URI_PREFIX + '/run/trace',
  name: 'RunTrace',
  component: () => import('../views/app/RunTrace.vue')
}, {
  path: URI_PREFIX + '/app/logs',
  name: 'App Logs',
  component: () => import('../views/AppLogs.vue')
}, {
  path: URI_PREFIX + '/about',
  name: 'About',
  component: () => import('../views/pages/About.vue')
}, {
  path: '*',
  redirect: URI_PREFIX
}]
