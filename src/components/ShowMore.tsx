import { ReactElement, createElement, useState, useMemo, useRef, Fragment, useEffect } from "react";
import { DynamicValue, WebIcon } from "mendix";

export interface ShowMoreProps {
    myText: DynamicValue<string>;
    charCount: number;
    lineCount: number;
    truncType: string;
    buttonLinkIconPreviewMode: string;
    cardIconExpand?: DynamicValue<WebIcon>;
    cardIconCollapse?: DynamicValue<WebIcon>;
    showMoreText: string;
    showLessText: string;
    textType: string;
    buttonDefaultStyling: string;
    buttonExtraStyling: string;
    linkExtraStyling: string;
    iconExtraStyling: string;
    textExtraStyling: string;
    hideByDefault: string;
}

export function ShowMore({
    myText,
    charCount,
    lineCount,
    truncType,
    buttonLinkIconPreviewMode,
    cardIconExpand,
    cardIconCollapse,
    showMoreText,
    showLessText,
    textType,
    buttonDefaultStyling,
    buttonExtraStyling,
    linkExtraStyling,
    iconExtraStyling,
    textExtraStyling,
    hideByDefault
}: ShowMoreProps): ReactElement {
    const [isExpanded, setIsExpanded] = useState(hideByDefault !== "true");
    const text = myText.value || "";
    const textContainerRef = useRef<HTMLDivElement>(null);

    const buttonStyles: { [key: string]: string } = {
        default: "btn-default",
        inverse: "btn-inverse",
        primary: "btn-primary",
        info: "btn-info",
        success: "btn-success",
        warning: "btn-warning",
        danger: "btn-danger"
    };

    const buttonClassName = `mx-btn btn ${buttonStyles[buttonDefaultStyling]} ${buttonExtraStyling || ""}`;
    const linkClassName = `mx-link ${linkExtraStyling || ""}`;
    const textClassName = `${textExtraStyling || ""}`;

    const expandIconClassName = `${
        cardIconExpand?.value && "iconClass" in cardIconExpand.value ? cardIconExpand.value.iconClass : ""
    } ${iconExtraStyling || ""}`;

    const collapseIconClassName = `${
        cardIconCollapse?.value && "iconClass" in cardIconCollapse.value ? cardIconCollapse.value.iconClass : ""
    } ${iconExtraStyling || ""}`;

    const lineClampStyle = useMemo(
        () => ({
            display: "-webkit-box",
            overflow: "hidden",
            WebkitLineClamp: lineCount,
            WebkitBoxOrient: "vertical"
        }),
        [lineCount]
    );

    const truncatedText = useMemo(() => {
        if (truncType === "charCount") {
            return text.length > charCount ? `${text.substring(0, charCount)}...` : text;
        }
        return text; // For "lineCount", this assumes CSS handles the truncation.
    }, [truncType, text, charCount]);

    const toggleExpand = () => setIsExpanded(prev => !prev);

    const renderButton = () => (
        <button className={buttonClassName} type="button" onClick={toggleExpand}>
            {isExpanded ? showLessText : showMoreText}
        </button>
    );

    const renderIcon = () => (
        <div style={{ cursor: "pointer", display: "inline-block" }} onClick={toggleExpand}>
            <span className={isExpanded ? collapseIconClassName : expandIconClassName} aria-hidden="true"></span>
        </div>
    );

    const renderLink = () => (
        <a
            className={linkClassName}
            role="button"
            href="#"
            onClick={e => {
                e.preventDefault();
                toggleExpand();
            }}
        >
            {isExpanded ? showLessText : showMoreText}
        </a>
    );

    const renderToggle = () => {
        switch (buttonLinkIconPreviewMode) {
            case "buttonType":
                return renderButton();
            case "iconType":
                return renderIcon();
            case "linkType":
            default:
                return renderLink();
        }
    };

        return (
            <div className="showmore-wrapper">
                {createElement(
                    textType,
                    {
                        ref: textContainerRef,
                        className: textClassName,
                        style: isExpanded ? undefined : lineClampStyle
                    },
                    isExpanded ? text : truncatedText
                )}
                {buttonLinkIconPreviewMode !== "previewMode" && renderToggle()}
            </div>
        );
}
