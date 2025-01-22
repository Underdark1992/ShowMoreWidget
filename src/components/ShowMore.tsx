import { ReactElement, createElement, useState, useEffect, useRef } from "react";
import { DynamicValue,  WebIcon } from "mendix";


export interface ShowMoreProps {
    myText: DynamicValue<string>;
    charCount: number;
    lineCount: number;
    truncType: string;
    buttonOrLinkorIcon: string;
    cardIconExpand: DynamicValue<WebIcon> | undefined,
    cardIconCollapse: DynamicValue<WebIcon> | undefined,
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
    buttonOrLinkorIcon,
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
    const [showMore, setShowMore] = useState(hideByDefault === "false");
    const text = myText.value || "";

    const textContainerRef = useRef<HTMLDivElement>(null);

    const buttonStyles: { [key: string]: string } = {
        default: "btn btn-default",
        inverse: "btn btn-inverse",
        primary: "btn btn-primary",
        info: "btn btn-info",
        success: "btn btn-success",
        warning: "btn btn-warning",
        danger: "btn btn-danger"
    };
    


    // Combining button styles more concisely
    const btnStyle = `${buttonStyles[buttonDefaultStyling]} ${buttonExtraStyling || ""}`;
    const lnkStyle = `mx-link ${linkExtraStyling || ""}`;
    const txtStyle = `mendixContainer ${textExtraStyling || ""}`;
    const icnExpandStyle = `${cardIconExpand?.value.iconClass || ""} ${iconExtraStyling || ""}`;
    const icnCollapseStyle = `${cardIconCollapse?.value.iconClass || ""} ${iconExtraStyling || ""}`;
    
    
    


    const lineStyling = {
        display: "-webkit-box",
        overflow: "hidden",
        WebkitLineClamp: lineCount,
        WebkitBoxOrient: "vertical"
    };


    const calculateTruncatedText = () => {
        if (truncType === "charCount") {
            return text.substring(0, charCount) + (text.length > charCount ? "..." : "");
        }
        if (truncType === "lineCount") {
            true;
            return text;
        }
        return text;
    };


    const [truncatedText, setTruncatedText] = useState<string>(calculateTruncatedText());

    useEffect(() => {
        setTruncatedText(calculateTruncatedText());
    }, [truncType, text, charCount, lineCount]);

    const toggleShowMore = () => setShowMore(prev => !prev);

    return (
        <div className="mendixContainer">
            {createElement(
                textType || "div",
                {
                    ref: textContainerRef,
                    className: txtStyle,
                    style: showMore ? {} : lineStyling
                },
                showMore ? text : truncatedText
            )}
            {buttonOrLinkorIcon === "buttonType" ? (
                <button className={btnStyle} onClick={toggleShowMore}>
                    {showMore ? showLessText : showMoreText}
                </button>
            ) : buttonOrLinkorIcon === "iconType" ? (
                <div  style={{cursor: "pointer",display: "inline-block"}} onClick={toggleShowMore}>
                    {showMore? <span className={icnCollapseStyle }></span> : <span  className={icnExpandStyle }></span>}
                </div>
            ) : (
                <a
                    className={lnkStyle}
                    style={{ textOverflow: "ellipsis" }}
                    role="button"
                    href="#"
                    onClick={e => {
                        e.preventDefault();
                        toggleShowMore();
                    }}
                >
                    {showMore ? showLessText : showMoreText}
                </a>
            )}
        </div>
    );
}
