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
    tabIndex?: number
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

    const toggleExpand = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        e.preventDefault();
        setIsExpanded(prev => !prev);
    }

    const renderIcon = () => {
        let toggledIcon = isExpanded ? cardIconCollapse : cardIconExpand;
        if (toggledIcon == undefined || toggledIcon?.status !== ValueStatus.Available) return null;

        return <Fragment>
            <Icon
                icon={toggledIcon.value}
            >
            </Icon>{" "}
        </Fragment>;
    }
    const renderButton = () => (
        <button
            className={buttonClassName}
            type="button"
            onClick={toggleExpand}
            tabIndex={tabIndex}
        >
            {renderIcon()}
            {isExpanded ? showLessText : showMoreText}
        </button>
    );

    const renderLink = () => (
        <a
            className={linkClassName}
            role="button"
            href="#"
            onClick={toggleExpand}
            tabIndex={tabIndex}
        >
            {renderIcon()}
            {isExpanded ? showLessText : showMoreText}
        </a>
    );

    const renderToggle = () => {
        switch (buttonRenderMode) {
            case "none":
                return undefined;
            case "buttonType":
                return renderButton();
            case "linkType":
            default:
                return renderLink();
        }
    };

    return (
        <div className="showmore-wrapper">
            {createElement(
                textRenderMode,
                {
                    ref: textContainerRef,
                    className: textClassName,
                    style: isExpanded ? undefined : lineClampStyle
                },
                isExpanded ? text : truncatedText
            )}{" "}
            {renderToggle()}
        </div>
    );
}
