import * as React from 'react';
import { useState, useEffect } from 'react';
import './styles.scss';

import { Grid, Menu, Segment, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { authSelector } from '../../selectors';
import { Events } from '../events';
import { Settings } from '../settings';

interface PanelProps {
    authenticated: boolean,
    history: any
}

const Component: React.FC<PanelProps> = props => {
    const [active, setActive] = useState('events');
    const [visible, setVisible] = useState(true);
    const { authenticated } = props;

    useEffect(() => {
        if(authenticated){
            setTimeout(() => {
                setVisible(false);
            }, 10000);
        } else {
            props.history.push("/login");
        }
    }, [authenticated])

    const handleItemClick = (e, {name}) => {
        setActive(name);
    }

    const onDismiss = () => setVisible(false);

    return (
        <React.Fragment>
            <section className="panel">
                { visible ? <Message info
                    onDismiss={onDismiss}
                    header='Welcome Back!'
                    content='Your authentication has been completed.'
                /> : ''}
                <h1>Panel</h1>
                <Grid>
                    <Grid.Column width={4}>
                        <Menu fluid vertical tabular>
                            <Menu.Item
                                name='events'
                                active={active === 'events'}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                name='history'
                                active={active === 'history'}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                name='settings'
                                active={active === 'settings'}
                                onClick={handleItemClick}
                            />
                            <Menu.Item
                                name='support'
                                active={active === 'support'}
                                onClick={handleItemClick}
                            />
                        </Menu>
                        
                    </Grid.Column>

                    <Grid.Column stretched width={12}>
                        <Segment color='blue'>
                            <Events />
                            <Settings />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </React.Fragment>
    )
};

const mapStateToProps = state => {
    return {
        authenticated: authSelector(state)
    }
}

const Panel = connect(mapStateToProps, null)(Component);

export { Panel };

