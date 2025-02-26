import { ReactElement, createElement, useState, useMemo, useRef, Fragment } from "react";
import { DynamicValue, ValueStatus, WebIcon } from "mendix";
import { Icon } from "mendix/components/web/Icon";

export interface ShowMoreProps {
    textArea: DynamicValue<string>;
    charCount: number;
    lineCount: number;
    truncType: string;
    buttonRenderMode: string;
    cardIconExpand?: DynamicValue<WebIcon>;
    cardIconCollapse?: DynamicValue<WebIcon>;
    showMoreText: string;
    showLessText: string;
    textRenderMode: string;
    buttonDisplay: string;
    buttonClasses: string;
    textClasses: string;
    hideByDefault: string;
    tabIndex?: number;
}

export function ShowMore({
    textArea,
    charCount,
    lineCount,
    truncType,
    buttonRenderMode,
    cardIconExpand,
    cardIconCollapse,
    showMoreText,
    showLessText,
    textRenderMode,
    buttonDisplay,
    buttonClasses,
    textClasses,
    hideByDefault,
    tabIndex
}: ShowMoreProps): ReactElement {
    const [isExpanded, setIsExpanded] = useState(hideByDefault !== "true");
    const text = textArea.value || "";
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

    const buttonClassName = `mx-btn btn ${buttonStyles[buttonDisplay]} ${buttonClasses || ""}`;
    const linkClassName = `mx-link ${buttonClasses || ""}`;
    const textClassName = `${textClasses || ""}`;

    const lineClampStyle = useMemo(
        () =>
            truncType === "lineCount"
                ? {
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitLineClamp: lineCount,
                      WebkitBoxOrient: "vertical"
                  }
                : {},
        [truncType, lineCount]
    );

    const isTruncated = useMemo(() => {
        if (truncType === "charCount") {
            return text.length > charCount;
        }
        return true;
    }, [truncType, text, charCount]);

    const truncatedText = useMemo(() => {
        if (truncType === "charCount" && isTruncated) {
            return `${text.substring(0, charCount)}...`;
        }
        return text;
    }, [truncType, text, charCount, isTruncated]);

    const toggleExpand = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        setIsExpanded(prev => !prev);
    };

    const renderIcon = () => {
        let toggledIcon = isExpanded ? cardIconCollapse : cardIconExpand;
        if (!toggledIcon || toggledIcon?.status !== ValueStatus.Available) return null;
        return (
            <Fragment>
                <Icon icon={toggledIcon.value} />
            </Fragment>
        );
    };

    const renderButton = () => (
        <button className={buttonClassName} type="button" onClick={toggleExpand} tabIndex={tabIndex}>
            {renderIcon()}
            {isExpanded ? showLessText : showMoreText}
        </button>
    );

    const renderLink = () => (
        <a className={linkClassName} role="button" href="#" onClick={toggleExpand} tabIndex={tabIndex}>
            {renderIcon()}
            {isExpanded ? showLessText : showMoreText}
        </a>
    );

    const renderToggle = () => {
        if (!isTruncated) return null; // If truncation is not needed, don't render toggle
        return buttonRenderMode === "buttonType" ? renderButton() : renderLink();
    };

    return (
        <div className="showmore-wrapper">
            {createElement(
                textRenderMode,
                {
                    ref: textContainerRef,
                    className: textClassName,
                    style: isExpanded || !isTruncated ? undefined : lineClampStyle
                },
                isExpanded || !isTruncated ? text : truncatedText
            )}
            {renderToggle()}
        </div>
    );
}
