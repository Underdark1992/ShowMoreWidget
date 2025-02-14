import { ReactElement, createElement } from "react";
import { ShowMore } from "./components/ShowMore";

import { ShowMoreWidgetContainerProps } from "../typings/ShowMoreWidgetProps";

import "./ui/ShowMoreWidget.css";

export default function ShowMoreWidget(props: ShowMoreWidgetContainerProps): ReactElement {
    return (
        <ShowMore
            myText={props.textArea}
            charCount={props.charInteger}
            lineCount={props.lineInteger}
            truncType={props.truncType}
            buttonLinkIconPreviewMode={props.buttonLinkIconPreviewMode}
            cardIconExpand={props.cardIconExpand}
            cardIconCollapse={props.cardIconCollapse}
            showMoreText={props.showMore}
            showLessText={props.showLess}
            buttonExtraStyling={props.buttonExtraStyling}
            linkExtraStyling={props.linkExtraStyling}
            iconExtraStyling={props.iconExtraStyling}
            textType={props.textType}
            textExtraStyling={props.textExtraStyling}
            buttonDefaultStyling={props.buttonDisplay}
            hideByDefault={props.hideByDefault}
        />
    );
}
