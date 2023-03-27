import { Route } from "react-router-dom";
import { ReactNode } from "react";
import { RouterType } from "./config";
import PageWrapper from "../components/layout/PageWrapper";
import appRouter from "./appRouter";

const generateRoute = (routes: RouterType[]): ReactNode => {
    return routes.map((route, index) => (
        route.index ? (
            <Route 
                index
                path={route.path}
                element={<PageWrapper state="route.state">
                    {route.element}
                </PageWrapper>}
                key={index}
            />
        ) : (
            <Route 
                path={route.path}
                element={
                   <PageWrapper  state={route.child ? undefined : route.state}>
                        {route.element}
                   </PageWrapper>
                }
                key={index}
            >
                {route.child && (
                    generateRoute(route.child)
                )}
            </Route>
        )
    ))
};

export const routes: ReactNode = generateRoute(appRouter);
