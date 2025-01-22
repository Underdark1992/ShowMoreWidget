import { ReactElement, createElement } from "react";
import { HelloWorldSample } from "./components/HelloWorldSample";
import { ShowMoreWidgetPreviewProps } from "../typings/ShowMoreWidgetProps";

export function preview({  }: ShowMoreWidgetPreviewProps): ReactElement {
    return <HelloWorldSample />;
}

export function getPreviewCss(): string {
    return require("./ui/ShowMoreWidget.css");
}
