import * as React from 'react';
import styled from 'styled-components';
import { TezosFilter } from 'conseiljs';

interface FilterPanelProps {
  filters: TezosFilter;
  setFilter: (filters: TezosFilter) => void;
}

const Wrapper = styled.div`
  float: left;
  width: 20%;
  font-size: x-small;
`;

const TextAreaFilter = styled.textarea`
  width: 80%;
  height: 3em;
`;

const InputFilter = styled.input.attrs({
  type: 'text'
})`
  width: 80%;
`;

export class FilterPanel extends React.Component<
  FilterPanelProps,
  TezosFilter
> {
  constructor(props: FilterPanelProps) {
    super(props);
    this.state = props.filters;
    this.handleBlockIDs = this.handleBlockIDs.bind(this);
    this.handleLevels = this.handleLevels.bind(this);
    this.handleNetIDs = this.handleNetIDs.bind(this);
    this.handleProtocols = this.handleProtocols.bind(this);
    this.handleOperationIDs = this.handleOperationIDs.bind(this);
    this.handleAccountIDs = this.handleAccountIDs.bind(this);
    this.handleAccountManagers = this.handleAccountManagers.bind(this);
    this.handleAccountDelegates = this.handleAccountDelegates.bind(this);
    this.handleLimit = this.handleLimit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBlockIDs(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ block_id: event.target.value.split(',') });
  }

  handleLevels(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ block_level: event.target.value.split(',').map(Number) });
  }

  handleNetIDs(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ block_netid: event.target.value.split(',') });
  }

  handleProtocols(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ block_protocol: event.target.value.split(',') });
  }

  handleOperationIDs(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ operation_id: event.target.value.split(',') });
  }

  handleOperationSources(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ operation_source: event.target.value.split(',') });
  }

  handleAccountIDs(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ account_id: event.target.value.split(',') });
  }

  handleAccountManagers(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ account_manager: event.target.value.split(',') });
  }

  handleAccountDelegates(event: React.ChangeEvent<HTMLTextAreaElement>) {
    this.setState({ account_delegate: event.target.value.split(',') });
  }

  handleLimit(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ limit: Number(event.target.value) });
  }

  handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    this.props.setFilter(this.state);
  }

  public render() {
    return (
      <Wrapper>
        <div>
          <div>Blocks IDs:</div>
          <TextAreaFilter
            value={this.state.block_id.toString()}
            onChange={this.handleBlockIDs}
          />
        </div>
        <div>
          <div>Block Levels:</div>
          <TextAreaFilter
            value={this.state.block_level.toString()}
            onChange={this.handleLevels}
          />
        </div>
        <div>
          <div>Net IDs:</div>
          <TextAreaFilter
            value={this.state.block_netid.toString()}
            onChange={this.handleNetIDs}
          />
        </div>
        <div>
          <div>Protocols:</div>
          <TextAreaFilter
            value={this.state.block_protocol.toString()}
            onChange={this.handleProtocols}
          />
        </div>
        <div>
          <div>Operation IDs:</div>
          <TextAreaFilter
            value={this.state.operation_id.toString()}
            onChange={this.handleOperationIDs}
          />
        </div>
        <div>
          <div>Operation Sources:</div>
          <TextAreaFilter
            value={this.state.operation_source.toString()}
            onChange={this.handleOperationSources}
          />
        </div>
        <div>
          <div>Account IDs:</div>
          <TextAreaFilter
            value={this.state.account_id.toString()}
            onChange={this.handleAccountIDs}
          />
        </div>
        <div>
          <div>Account Managers:</div>
          <TextAreaFilter
            value={this.state.account_manager.toString()}
            onChange={this.handleAccountManagers}
          />
        </div>
        <div>
          <div>Account Delegates:</div>
          <TextAreaFilter
            value={this.state.account_delegate.toString()}
            onChange={this.handleAccountDelegates}
          />
        </div>
        <div>
          <div>Limit:</div>
          <InputFilter
            value={this.state.limit.toString()}
            onChange={this.handleLimit}
          />
        </div>
        <div>
          <button onClick={this.handleSubmit}>Refresh</button>
        </div>
      </Wrapper>
    );
  }
}
