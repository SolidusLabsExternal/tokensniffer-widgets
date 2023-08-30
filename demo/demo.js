import React from 'react';
import ReactDOM from 'react-dom';
import { ScoreBadge, SmellTestResults } from 'tokensniffer-widgets';
import sampleData1 from './sample-data1';
import sampleData2 from './sample-data2';

const App = () => {
    return (
        <div className="App">
            <ScoreBadge data={sampleData1} theme="dark" />
            <SmellTestResults data={sampleData2} theme="dark" width="30em" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));