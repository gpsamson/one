export type { VXSRouter, One } from './interfaces/router';
import type { VXSRouter } from './interfaces/router';
export type Href = VXSRouter.Href;
export type LinkProps<T extends string | object = string> = VXSRouter.LinkProps<T>;
export type { Endpoint, LoaderProps } from './types';
export * from '@vxrn/universal-color-scheme';
export { Root } from './Root';
export { render } from './render';
export { Stack } from './layouts/Stack';
export { Tabs } from './layouts/Tabs';
export { SafeAreaView } from 'react-native-safe-area-context';
export { Navigator, Slot } from './views/Navigator';
export { ErrorBoundary } from './views/ErrorBoundary';
export { ScrollRestoration } from './views/ScrollRestoration';
export { PageLoadProgressBar } from './views/PageLoadProgressBar';
export { createApp } from './createApp';
export { createRoute, route } from './createRoute';
export { onClientLoaderResolve } from './clientLoaderResolver';
export { isResponse } from './utils/isResponse';
export { useLinkTo } from './link/useLinkTo';
export { useRouter, useUnstableGlobalHref, usePathname, useNavigationContainerRef, useParams, useActiveParams, useSegments, useRootNavigationState, } from './hooks';
export { useLocalSearchParams, useGlobalSearchParams, } from './hooks';
export * as routerStore from './router/router';
export { router } from './imperative-api';
export { Link } from './link/Link';
export { Redirect } from './link/Redirect';
export { Head } from './head';
export { withLayoutContext } from './layouts/withLayoutContext';
export { useFocusEffect } from './useFocusEffect';
export { useNavigation } from './useNavigation';
export { useLoader } from './useLoader';
//# sourceMappingURL=index.d.ts.map