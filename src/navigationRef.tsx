import {
  NavigationContainerComponent,
  NavigationActions,
} from "react-navigation";

let navigator: NavigationContainerComponent;

export const setNavigator = (nav: NavigationContainerComponent) => {
  navigator = nav;
};

export const navigate = (routeName: string, params?: {}) => {
  navigator.dispatch(NavigationActions.navigate({ routeName, params }));
};
