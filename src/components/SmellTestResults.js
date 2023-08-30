import React from "react";
import CircledCheckIcon from "./CircledCheckIcon";
import CircledXIcon from "./CircledXIcon";
import Logo from "./Logo";
import themes from "../theme/themes";
import '../theme/global.css';

function precise(x) {
    if (x == 0)
      return '0';
    if (x < 1)
      return '<1';
    return Math.trunc(x*10)/10;
}

const riskColor = (riskLevel) => {
    if (riskLevel == 'low')
        return '#ffff';
    if (riskLevel == 'medium')
        return '#ffcd26';
    return '#f17059';
}

function classes(theme, width) {
    return {
        container: {
            font: theme.font,
            fontWeight: 400,
            color: theme.colors.textPrimary, 
            backgroundColor: theme.colors.body, 
            cursor: "pointer",
            width: (typeof width !== "undefined" ? width : "20em"),
        },
        section: {
            // display: "block",
        },
        row: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            paddingBottom: "0.4em"
        },
        col1: {
            minWidth: "2em"
        },
        col2: {
            color: theme.colors.textSecondary
        },
        line: {
            paddingBottom: "0.4em"
        },
        header: {
            display: "flex",
            flexDirection: "row",
            alignItems: "baseline",
            justifyContent: "space-between",
            margin: "1em 1em 0.5em 1em"
        },
        body: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            margin: "0.5em 1em 1em 1em"
        },
        logo: {
            fontWeight: "normal",
            fontSize: "x-large"
        },
        score: {
            fontWeight: "normal",
            fontSize: "x-large",
            padding: 0
        },
        alert: {
            padding: "0.5rem",
            margin: "0 1em 0 1em",
            border: "2px solid #f17059",
            borderRadius: "0.75em",
            maxWidth: "35em"
        },
        title: {
            fontWeight: "normal",
            fontSize: "large",
            margin: "0.5rem 0 0.5rem 0"
        },
        link: {
            color: theme.colors.textSecondary,
            textDecoration: "underline",
            cursor: "pointer",
            overflowWrap: "anywhere"
        },
        dashIcon: {
            color: theme.colors.textSecondary,
            fontSize: "0.925em",
            paddingLeft: "0.25em",
        }
    }
};

export default function SmellTestResults({ theme, width, showDetails, data }) {
    if (!data || !data?.tests) {
        console.error('"data" is undefined');
        return (
            <div></div>
        );
    }

    let t
    if (!theme)
        theme = "dark";
    if (typeof theme === 'object')
        t = theme;
    else
        t = themes["data"][theme];
    const c = classes(t, width);

    const tests = {};
    for (const t of data.tests) {
        tests[t.id] = t;
    }

    const TestResult = ({ test }) => {
        return (
            <div style={c.row}>
                <div style={c.col1}>
                    {test.result ? <CircledXIcon /> : <CircledCheckIcon />}
                </div>
                <div style={c.col2}>
                    {test.description}
                </div>
            </div>
        );
    }

    const isOwnershipRenounced = !tests["testForOwnershipNotRenounced"]["result"] && !tests["testForAuthorization"]["result"];

    const circulatingSupply = data.total_supply - data.balances.burn_balance;
    const tokenOwnerBalancePct = data.owner_balance / circulatingSupply;
    const tokenDevBalancePct = data.deployer_balance / circulatingSupply;
    const tokenBurnBalancePct = data.balances.burn_balance / data.total_supply;
    const tokenLockBalancePct = data.balances.lock_balance / data.total_supply;
    const isImpossibleHolder = tokenOwnerBalancePct > 1 || tokenDevBalancePct > 1 || data?.top_holders?.some(h => h.balance > circulatingSupply);

    const lpLocks = data.pools?.reduce((acc, p) => acc.concat(p.locks), []).sort((a, b) => b.balance - a.balance)

    return (
        <div style={c.container} onClick={() => window.open(`https://tokensniffer.com/token/${data.chainId}/${data.address}`, "_blank")}>
            <div style={c.header}>
                <div style={c.score}>
                    Score: <span style={{color: riskColor(data?.riskLevel), paddingLeft: "0.25em"}}>{data?.score}/100</span>
                </div>
                <div style={c.logo}>
                    <Logo /> Token Sniffer
                </div>
            </div>
            <div style={c.alert}>
                <b>WARNING:</b> This token was flagged due to evidence of a bug, hack, or scam.
            </div>
            <div style={c.body}>
                <div style={c.section}>
                    <div style={c.title}>
                        Swap Analysis
                    </div>
                    {['testForUnableToSell', 'testForHighBuyFee', 'testForHighSellFee'].map((id, index) =>
                        <TestResult key={index} test={tests[id]} />
                    )}
                </div>
                <div style={c.section}>
                    <div style={c.title}>
                        Contract Analysis
                    </div>
                    <TestResult test={tests["testForMissingSource"]} />
                    {tests["testForProxy"].result && 
                        <TestResult test={tests["testForProxy"]} />
                    }
                    {tests["testForPausable"].result && isOwnershipRenounced &&
                        <TestResult test={tests["testForPausable"]} />
                    }
                    {tests["testForMint"].result && isOwnershipRenounced &&
                        <TestResult test={tests["testForMint"]} />
                    }
                    {tests["testForMaxTransactionAmount"].result && isOwnershipRenounced &&
                        <TestResult test={tests["testForMaxTransactionAmount"]} />
                    }
                    {tests["testForModifiableFee"].result && isOwnershipRenounced &&
                        <TestResult test={tests["testForModifiableFee"]} />
                    }
                    {tests["testForBlacklist"].result && isOwnershipRenounced &&
                        <TestResult test={tests["testForBlacklist"]} />
                    }
                    <TestResult test={tests["testForOwnershipNotRenounced"]} />
                    <TestResult test={tests["testForAuthorization"]} />
                </div>
                <div style={c.section}>
                    <div style={c.title}>
                        Holder Analysis
                    </div>
                    {circulatingSupply == 0 &&
                        <div style={c.row}>
                            <div style={c.col1}>(alert icon)</div>
                            <div style={c.col2}>No tokens in circulation</div>
                        </div>
                    }
                    {circulatingSupply < 0 &&
                        <div style={c.row}>
                            <div style={c.col1}>(alert icon)</div>
                            <div style={c.col2}>Burned amount exceeds total token supply</div>
                        </div>
                    }
                    {isImpossibleHolder &&
                        <div style={c.row}>
                            <div style={c.col1}>(alert icon)</div>
                            <div style={c.col2}>A wallet exceeds the circulating token supply (likely a scam)</div>
                        </div>
                    }
                    {tokenBurnBalancePct >= 0.01 &&
                        <div style={c.row}>
                            <div style={c.col1}>
                                <div styles={c.dashIcon}>—</div>
                            </div>
                            <div style={c.col2}>
                                Tokens burned: {precise(100*tokenBurnBalancePct)}%, circulating supply: {circulatingSupply.toLocaleString()}
                            </div>
                        </div>
                    }
                    {tokenLockBalancePct >= 0.01 &&
                        <TestResult 
                            test={{
                                result: true,
                                description: `Tokens locked (${precise(100*tokenLockBalancePct)}%)`
                            }}
                        />
                    }
                    {!isOwnershipRenounced &&
                        <TestResult test={tests["testForHighOwnerTokenBalance"]} />
                    }
                    <TestResult test={tests["testForHighCreatorTokenBalance"]} />
                    <TestResult test={tests["testForHighWalletTokenBalance"]} />
                </div>
                <div style={c.section}>
                    <div style={c.title}>
                        Liquidity Analysis
                    </div>
                    {data.pools?.length == 0 
                        ? <div>
                            Liquidity pool not found (ignore for presale)
                        </div>
                        : <>
                            <TestResult test={tests["testForInadequateLiquidity"]} />
                            {!!showDetails && 
                                <div style={c.row}>
                                    <div style={c.col1}></div>
                                    <div style={c.col2}>
                                        {data.pools.map((pool, index) =>
                                            <div key={index} style={c.line}>
                                                {precise(pool.base_reserve).toLocaleString()} {pool.base_symbol} in {pool.name} {pool.fee > 0 && `(${pool.fee/10000}%)`}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }
                            <TestResult test={tests["testForInadequateInitialLiquidity"]} />
                            {!!showDetails && 
                                <div style={c.row}>
                                    <div style={c.col1}></div>
                                    <div style={c.col2}>
                                        {data.pools.map((pool, index) =>
                                            <div key={index} style={c.line}>
                                                {precise(pool.initial_base_reserve).toLocaleString()} {pool.base_symbol} in {pool.name}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }   
                            <TestResult test={tests["testForInadeqateLiquidityLockedOrBurned"]} />
                            {!!showDetails && lpLocks?.length > 0 && 
                                <div style={c.row}>
                                    <div style={c.col1}></div>
                                    <div style={c.col2}>
                                        {data.pools.map(pool => {
                                            return pool.locks.map((lock, index) => {
                                                const name = lock.url 
                                                    ? <a styles={c.link} href={lock.url} target="_blank">{lock.name}</a>
                                                    : lock.name
                                                const expired = lock.end_time && lock.end_time <= Date.now()/1000
                                                const dateStr = lock.end_time 
                                                    ? ' until ' + datetimeString(lock.end_time*1000) + ' (' + (expired ? '-' : '') + timeDiffString(lock.end_time*1000, null, true, true) + ')' 
                                                    : ''
                                                let expiredStr
                                                if (expired)
                                                    expiredStr = 'EXPIRED'
                                                else if (lock.end_time && lock.end_time <= Date.now()/1000 + constants.MIN_LP_LOCK_TIME)
                                                    expiredStr = 'LOCK IGNORED, EXPIRES SOON'
                                                return (
                                                    <div key={index}>
                                                        {pool.burn_balance > 1000 && 
                                                            <div style={c.line}>
                                                                {precise(100*pool.burn_balance)}% burned 
                                                            </div>
                                                        }
                                                        <div style={c.line}>
                                                            {precise(100*lock.balance/pool.total_supply)}% in {name} {dateStr} {expiredStr && <span>{expiredStr}</span>}
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        })}
                                    </div>
                                </div>
                            }
                        </>
                    }
                </div>
            </div>
        </div>
    );
}