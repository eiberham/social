import * as React from 'react';
import { useEffect, useCallback } from 'react';
import "./styles.scss";

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { eventsGetRequest } from '../../actions/events';

import { Table, Button, Icon, Pagination } from 'semantic-ui-react';

export interface EventProps {
    eventsGetRequest: (page: number) => any;
    events: Array<any>,
    pages: number
}

const Component: React.FC<EventProps> = props => {
    useEffect(() => {
        props.eventsGetRequest(1);
    }, []);
    const { events, pages } = props;

    const onPageChange = (e, data) => { 
        console.log("pagechange: ", data);
        const { activePage } = data;
        props.eventsGetRequest(activePage);
    }
    
    return (
        <React.Fragment>
            <h3>Social events given in the last weeks.</h3>
            <Table celled inverted selectable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Organizer</Table.HeaderCell>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    { events && events.map( event => (
                        <Table.Row key={event.id}>
                            <Table.Cell>{event.name}</Table.Cell>
                            <Table.Cell>{event.description}</Table.Cell>
                            <Table.Cell textAlign='right'>{event.organizer}</Table.Cell>
                            <Table.Cell textAlign='right'>{event.date}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='4'>
                        <Button
                            floated='right'
                            icon
                            labelPosition='left'
                            primary
                            size='large'
                        >
                            <Icon name='calendar alternate' /> New Event
                        </Button>

                        <Pagination
                            inverted
                            defaultActivePage={1}
                            ellipsisItem={{ content: <Icon name='ellipsis horizontal' />, icon: true }}
                            firstItem={{ content: <Icon name='angle double left' />, icon: true }}
                            lastItem={{ content: <Icon name='angle double right' />, icon: true }}
                            prevItem={{ content: <Icon name='angle left' />, icon: true }}
                            nextItem={{ content: <Icon name='angle right' />, icon: true }}
                            totalPages={pages}
                            onPageChange={onPageChange}
                        />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </React.Fragment>
    );
};

const mapStateToProps = ({
    events: {events, pages}
}) => ({ events, pages });

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        eventsGetRequest
    }, dispatch)
};

const Events = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Events };