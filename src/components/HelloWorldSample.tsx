import { ReactElement, createElement } from "react";

export interface HelloWorldSampleProps {
    sampleText?: string;
}

export function HelloWorldSample(): ReactElement {
    return <div className="widget-hello-world"></div>;
}
