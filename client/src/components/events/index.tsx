import * as React from 'react';
import { useEffect, useCallback } from 'react';
import "./styles.scss";

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { eventsGetRequest } from '../../actions/events';

import { Table } from 'semantic-ui-react';

export interface EventProps {
    eventsGetRequest: () => any;
}

const Component: React.FC<EventProps> = props => {
    useEffect(() => {
        props.eventsGetRequest();
    }, []);
    return (
        <React.Fragment>
            <h3>Social events given in the last weeks.</h3>
            <Table celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Organizer</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    <Table.Row>
                        <Table.Cell>John</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell textAlign='right'>None</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jamie</Table.Cell>
                        <Table.Cell>Approved</Table.Cell>
                        <Table.Cell textAlign='right'>Requires call</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Jill</Table.Cell>
                        <Table.Cell>Denied</Table.Cell>
                        <Table.Cell textAlign='right'>None</Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </React.Fragment>
    );
};

const mapStateToProps = state => {
    return {
        events: state.events
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        eventsGetRequest
    }, dispatch)
};

const Events = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Events };