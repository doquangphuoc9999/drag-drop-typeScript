import { ReactNode } from "react";

export type RouterType = {
    element: ReactNode,
    state: string,
    index?: boolean,
    path?: string,
    child?: RouterType[],
    sidebarProps?: {
        displayText: string,
        icon?: ReactNode
    }
}