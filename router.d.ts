import 'vue-router';
import { RouteLocationNormalizedLoaded } from 'vue-router';

export interface IBreadcrumb {
  title?: string;
  link?: string;
}

export type TBreadcrumbType = (route: RouteLocationNormalizedLoaded) => IBreadcrumb[];

declare module 'vue-router' {
  interface RouteMeta {
    layout?: unknown;
    title?: string;
    requiredAuth?: boolean;
    breadcrumb: TBreadcrumbType;
  }
}