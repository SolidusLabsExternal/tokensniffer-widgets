import React from "react";
import Logo from "./Logo";
import themes from "../theme/themes";
import '../theme/global.css';

const riskColor = (riskLevel) => {
    if (riskLevel == 'low')
        return '#FFFFFF';
    if (riskLevel == 'medium')
        return '#FFCD26';
    return '#F17059';
}

function classes(theme, data) {
    const theta = Math.floor(data.score/100 * 179 + 1);

    return {
        container: {
            display: "flex",
            flexDirection: "column",
            flexWrap: "nowrap",
            alignItems: "center",
            font: theme.font,
            fontWeight: 400,
            color: theme.colors.textPrimary, 
            backgroundColor: theme.colors.body, 
            cursor: "pointer"
        },
        logo: {
            fontSize: "25px"
        },
        score: {
            position: "relative",
            top: '-47px',
            textAlign: "center",
            height: 0,
            zIndex: 100,
            color: riskColor(data.riskLevel),
            fontWeight: "bold",
            fontSize: "42px"
        },
        semiCircle: {
            background: "#ffcd28"
        },
        semiCircleMask: {
            transform: `rotate(${theta} deg) translate3d(0,0,0)`
        }
    };
};

export default function ScoreBadge({ theme, data }) {
    if (!data) {
        console.error('"data" is undefined');
        return (
            <div></div>
        );
    }

    let t;
    if (!theme)
        theme = "dark";
    if (typeof theme === 'object')
        t = theme;
    else
        t = themes["data"][theme];

    const c = classes(t, data);

    return (
        <div style={c.container}>
            <div className="gauge">
                <div className="mask">
                    <div className="semi-circle" style={c.semiCircle}></div>
                    <div className="semi-circle--mask" style={c.semiCircleMask}></div>
                </div>
                <div style={c.score}>{data.score}</div>
            </div>
            <div style={c.logo}>
                <Logo /> Token Sniffer
            </div>
        </div>
    );
}