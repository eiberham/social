import * as React from 'react';
import { useState } from 'react';
import './styles.scss';

import { Grid, Menu, Segment, Message } from 'semantic-ui-react';

import { Events } from '../events';

const Panel: React.FC<{}> = props => {
    const [active, setActive] = useState('events');
    const [visible, setVisible] = useState(true);

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
                        <Segment>
                            <Events />
                        </Segment>
                    </Grid.Column>
                </Grid>
            </section>
        </React.Fragment>
    )
};

export { Panel };

