import { ReactElement, createElement } from "react";
import { ShowMoreWidgetPreviewProps } from "../typings/ShowMoreWidgetProps";
import { ShowMore } from "./components/ShowMore";
import { ValueStatus } from "mendix";

export function preview({}: ShowMoreWidgetPreviewProps): ReactElement {
    return (
        <ShowMore
            textArea={{
                status: ValueStatus.Available,
                value: "undefined"
            }}
            charCount={0}
            lineCount={0}
            truncType={""}
            buttonRenderMode={""}
            cardIconExpand={undefined}
            cardIconCollapse={undefined}
            showMoreText={""}
            showLessText={""}
            textRenderMode={""}
            buttonDisplay={""}
            buttonClasses={""}
            textClasses={""}
            hideByDefault={""}
        />
    );
}

export function getPreviewCss(): string {
    return require("./ui/ShowMoreWidget.css");
}
