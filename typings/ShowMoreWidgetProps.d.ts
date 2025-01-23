/**
 * This file was generated from ShowMoreWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { DynamicValue, WebIcon } from "mendix";

export type TextTypeEnum = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HideByDefaultEnum = "true" | "false";

export type TruncTypeEnum = "charCount" | "lineCount";

export type ButtonLinkIconPreviewModeEnum = "previewMode" | "buttonType" | "iconType" | "linkType";

export type ButtonDisplayEnum = "default" | "inverse" | "primary" | "info" | "success" | "warning" | "danger";

export interface ShowMoreWidgetContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textArea: DynamicValue<string>;
    textType: TextTypeEnum;
    hideByDefault: HideByDefaultEnum;
    truncType: TruncTypeEnum;
    charInteger: number;
    lineInteger: number;
    buttonLinkIconPreviewMode: ButtonLinkIconPreviewModeEnum;
    cardIconExpand?: DynamicValue<WebIcon>;
    cardIconCollapse?: DynamicValue<WebIcon>;
    buttonDisplay: ButtonDisplayEnum;
    showMore: string;
    showLess: string;
    buttonExtraStyling: string;
    linkExtraStyling: string;
    textExtraStyling: string;
    iconExtraStyling: string;
}

export interface ShowMoreWidgetPreviewProps {
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    textArea: string;
    textType: TextTypeEnum;
    hideByDefault: HideByDefaultEnum;
    truncType: TruncTypeEnum;
    charInteger: number | null;
    lineInteger: number | null;
    buttonLinkIconPreviewMode: ButtonLinkIconPreviewModeEnum;
    cardIconExpand: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    cardIconCollapse: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    buttonDisplay: ButtonDisplayEnum;
    showMore: string;
    showLess: string;
    buttonExtraStyling: string;
    linkExtraStyling: string;
    textExtraStyling: string;
    iconExtraStyling: string;
}
