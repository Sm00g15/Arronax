import * as React from 'react';
import { DataView, TezosBlock } from '../types';
import { ExpandableGridRow } from './ExpandableGridRow';

interface ExpandableGridPops {
    dataView: DataView;
    data: Object[];
}

interface ExpandableGridState {
    expansions: Map<string, string>;
}

export class ExpandableGrid extends React.Component<ExpandableGridPops, ExpandableGridState> {

    constructor(props: ExpandableGridPops) {
        super(props);
        this.state = {expansions: new Map<string, string>()};
    }

    public render() {
        if (this.props.data.length !== 0) {
            return (
                <table>
                    <tr key="header">
                        {Object.keys(this.props.data[0]).map((value, index) => <th key="meh">{value}</th>)}
                    </tr>
                    {
                        this.props.data.map((row, index) =>
                            <ExpandableGridRow key="key" dataView={this.props.dataView} data={row}/>
                        )}
                </table>
            );
        } else {
            return(<p>No data to render!</p>);
        }
    }
}