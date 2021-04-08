import React from 'react';
import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={400}
            height={460}
            viewBox="0 0 400 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="137" cy="127" r="123" />
            <rect x="-1" y="263" rx="3" ry="3" width="280" height="22" />
            <rect x="-1" y="301" rx="6" ry="6" width="280" height="84" />
            <rect x="71" y="410" rx="0" ry="0" width="3" height="11" />
            <rect x="2" y="412" rx="3" ry="3" width="85" height="30" />
            <rect x="154" y="418" rx="0" ry="0" width="0" height="3" />
            <rect x="146" y="407" rx="20" ry="20" width="135" height="45" />
        </ContentLoader>
    );
}

export default LoadingBlock
