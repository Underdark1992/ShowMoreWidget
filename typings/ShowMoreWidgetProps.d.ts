/**
 * This file was generated from ShowMoreWidget.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { DynamicValue, WebIcon } from "mendix";

export type TextRenderModeEnum = "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HideByDefaultEnum = "true" | "false";

export type TruncTypeEnum = "charCount" | "lineCount";

export type ButtonRenderModeEnum = "none" | "buttonType" | "linkType";

export type ButtonDisplayEnum = "default" | "inverse" | "primary" | "info" | "success" | "warning" | "danger";

export interface ShowMoreWidgetContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    textArea: DynamicValue<string>;
    textRenderMode: TextRenderModeEnum;
    textClasses: string;
    hideByDefault: HideByDefaultEnum;
    truncType: TruncTypeEnum;
    charCount: number;
    lineCount: number;
    buttonRenderMode: ButtonRenderModeEnum;
    buttonDisplay: ButtonDisplayEnum;
    buttonClasses: string;
    cardIconExpand?: DynamicValue<WebIcon>;
    showMoreText: string;
    cardIconCollapse?: DynamicValue<WebIcon>;
    showLessText: string;
}

export interface ShowMoreWidgetPreviewProps {
    readOnly: boolean;
    renderMode: "design" | "xray" | "structure";
    translate: (text: string) => string;
    textArea: string;
    textRenderMode: TextRenderModeEnum;
    textClasses: string;
    hideByDefault: HideByDefaultEnum;
    truncType: TruncTypeEnum;
    charCount: number | null;
    lineCount: number | null;
    buttonRenderMode: ButtonRenderModeEnum;
    buttonDisplay: ButtonDisplayEnum;
    buttonClasses: string;
    cardIconExpand: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    showMoreText: string;
    cardIconCollapse: { type: "glyph"; iconClass: string; } | { type: "image"; imageUrl: string; iconUrl: string; } | { type: "icon"; iconClass: string; } | undefined;
    showLessText: string;
}
