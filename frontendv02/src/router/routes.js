
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'provider', component: () => import('src/pages/products/providerPg.vue') },
      { path: 'provider-add', component: () => import('src/pages/products/addProviderPg.vue') },
      // { path: 'provider-edit/:id', component: () => import('src/pages/products/editProviderPg.vue') },
      { path: 'product', component: () => import('src/pages/products/productPg.vue') },
      { path: 'product-add', component: () => import('src/pages/products/addProductPg.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
