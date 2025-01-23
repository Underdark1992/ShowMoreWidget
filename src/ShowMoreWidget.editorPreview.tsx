import { ReactElement, createElement } from "react";
import { ShowMoreWidgetPreviewProps } from "../typings/ShowMoreWidgetProps";
import { ShowMore } from "./components/ShowMore";
import { ValueStatus } from "mendix";

export function preview({}: ShowMoreWidgetPreviewProps): ReactElement {
    return (
        <ShowMore
            myText={{
                status: ValueStatus.Available,
                value: "undefined"
            }}
            charCount={0}
            lineCount={0}
            truncType={""}
            buttonLinkIconPreviewMode={""}
            cardIconExpand={undefined}
            cardIconCollapse={undefined}
            showMoreText={""}
            showLessText={""}
            textType={""}
            buttonDefaultStyling={""}
            buttonExtraStyling={""}
            linkExtraStyling={""}
            iconExtraStyling={""}
            textExtraStyling={""}
            hideByDefault={""}
        />
    );
}

export function getPreviewCss(): string {
    return require("./ui/ShowMoreWidget.css");
}
