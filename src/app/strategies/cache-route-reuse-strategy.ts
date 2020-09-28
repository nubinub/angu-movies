import { RouteReuseStrategy, ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';

export class CacheRouteReuseStrategy implements RouteReuseStrategy {
    private storedRoutes = new Map<string, DetachedRouteHandle>();

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return route.routeConfig.path === 'medias';
    }

    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        this.storedRoutes.set(route.routeConfig.path, handle);
    }

    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return !!route.routeConfig && !!this.storedRoutes.get(route.routeConfig.path);
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
        const detachedRoute = this.storedRoutes.get(route.routeConfig.path);
        const handle = (detachedRoute as any);
        if (handle && handle.componentRef && handle.componentRef.instance && handle.componentRef.instance.onAttach) {
            handle.componentRef.instance.onAttach();
        }
        return detachedRoute;
    }

    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }
}
