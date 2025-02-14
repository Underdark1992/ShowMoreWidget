import { ReactElement, createElement } from "react";
import { ShowMore } from "./components/ShowMore";

import { ShowMoreWidgetContainerProps } from "../typings/ShowMoreWidgetProps";

import "./ui/ShowMoreWidget.css";

export default function ShowMoreWidget(props: ShowMoreWidgetContainerProps): ReactElement {
    return (
        <ShowMore
            {...props}
        />
    );
}
