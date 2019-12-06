import * as React from 'react';
import { useEffect, useCallback } from 'react';
import "./styles.scss";

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { eventsGetRequest } from '../../actions/events';

import { Table } from 'semantic-ui-react';

export interface EventProps {
    eventsGetRequest: () => any;
    events: Array<any>
}

const Component: React.FC<EventProps> = props => {
    useEffect(() => {
        props.eventsGetRequest();
    }, []);
    const { events } = props;
    console.log("events: ", events);
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
                    { events && events.map( event => (
                        <Table.Row>
                            <Table.Cell>{event.name}</Table.Cell>
                            <Table.Cell>{event.description}</Table.Cell>
                            <Table.Cell textAlign='right'>{event.organizer}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </React.Fragment>
    );
};

const mapStateToProps = ({events: {events}}) => ({ events });

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        eventsGetRequest
    }, dispatch)
};

const Events = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Events };