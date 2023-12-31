import { createRouter, createWebHistory } from "vue-router";
import { Links, PathNames } from '@/shered/constants/route.constants';
import MainLayout from '@/widgets/mainLayout/MainLayout.vue';
import MainPage from "@/pages/mainPage/MainPage.vue";
import { ref } from "vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Links.HOME,
      name: PathNames.HOME,
      component: MainPage,
      meta: {
        layout: MainLayout,
        // title: 'Main Page'
      }
    },
    {
      path: Links.POSTS,
      name: PathNames.POSTS,
      component: () => import('@/pages/postsPage/PostsPage.vue'),
      meta: {
        layout: MainLayout,
        // title: 'Posts'
      }
    },
  ]
});

// router.beforeEach((to, from, next) => {
//   const isAuth = ref(true);
//   if (to.meta.requiredAuth && !isAuth.value) {
//     alert('Нужна авторизация!');
//     next({ name: PathNames.HOME });
//   } else {
//     next();
//   }
// });

export default router;