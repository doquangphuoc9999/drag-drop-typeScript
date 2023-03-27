import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ChangelogPage from '../pages/changelog/ChangelogPage';
import DashboardIndex from "../pages/dashboard/DashboardIndex";
import DashboardPage from "../pages/dashboard/DashboardPage";
import DefaultPage from "../pages/dashboard/DefaultPage";
import HomePage from "../pages/home/HomePage";
import { RouterType } from "./config";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AnalyticsPage from '../pages/dashboard/AnalyticsPage';
import SassPage from '../pages/dashboard/SassPage';

const appRouter: RouterType[] = [
    {
        index: true,
        element: <HomePage />,
        state: "home"
    },
    {
        path: "/dashboard",
        element: <DashboardPage />,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlinedIcon />,
        },
        child: [
            {
                index: true,
                element: <DashboardIndex />,
                state: "dashboard.index",
                sidebarProps: {
                    displayText: "Default",

                }
            },
            {
                path: "/dashboard/default",
                element: <DefaultPage />,
                state: "dashboard.DefaultPage",
                sidebarProps: {
                    displayText: "default",

                }
            },
            {
                path: "/dashboard/analytics",
                element: <AnalyticsPage />,
                state: "dashboard.analytics",
                sidebarProps: {
                    displayText: "analytics",

                }
            },
            {
                path: "/dashboard/saas",
                element: <SassPage />,
                state: "dashboard.saas",
                sidebarProps: {
                    displayText: "saas",

                }
            }
        ]
    },
    {
        path: "/changelog",
        element: <ChangelogPage />,
        state: "changelog",
        sidebarProps: {
            displayText: "changelog",
            icon: <FormatListBulletedIcon />,
        },
    }
];

export default appRouter;