import 'vue-router';
import { RouteLocationNormalizedLoaded } from 'vue-router';
declare module 'vue-router' {
  interface RouteMeta {
    layout?: unknown;
    title?: string;
    requiredAuth?: boolean;
  }
}