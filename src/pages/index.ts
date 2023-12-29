import { createRouter, createWebHistory } from "vue-router";
import { Links, PathNames } from '@/shered/constants/route.constants';
import MainLayout from '@/widgets/MainLayout/MainLayout.vue';
import MainPage from "@/pages/MainPage/MainPage.vue";
import { useAuthStore } from "@/shered/store/auth";
import { storeToRefs } from "pinia";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  
  ]
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  const { isAuth } = storeToRefs(authStore);
  if (to.meta.requiredAuth && !isAuth.value) {
    alert('Нужна авторизация!');
    next({ name: PathNames.HOME });
  } else {
    next();
  }
});

export default router;