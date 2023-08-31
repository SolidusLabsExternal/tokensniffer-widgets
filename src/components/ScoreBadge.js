import React from "react";
import Logo from "./Logo";
import Gauge from "./Gauge";
import themes from "../theme/themes";
import "../theme/global.css";

const riskColor = (riskLevel) => {
    if (riskLevel == 'low')
        return '#ffffff';
    if (riskLevel == 'medium')
        return '#ffcd26';
    return '#f17059';
}

function classes(theme, data) {
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
            top: '-43px',
            textAlign: "center",
            height: 0,
            zIndex: 100,
            color: riskColor(data.riskLevel),
            fontWeight: "bold",
            fontSize: "42px"
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
            <Gauge value={data.score} backgroundColor="#e2e2e2" fillColor="#ffcd28" />
            <div style={c.score}>{data.score}</div>
            <div style={c.logo}>
                <Logo /> Token Sniffer
            </div>
        </div>
    );
}