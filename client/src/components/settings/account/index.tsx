import * as React from 'react';
import { useState, useEffect } from 'react';
import useForm from 'react-hook-form';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { userChangePasswordRequest } from '../../../actions/users';

import { 
    Form, 
    Button, 
    Segment, 
    Confirm, 
    Checkbox, 
    Divider, 
    Label,
    Message
} from 'semantic-ui-react';
import { userUpdatedSelector } from '../../../selectors';

interface AccountProps {
    userChangePasswordRequest: (
        id: number, 
        current: string, 
        password: string, 
        repeat: string
    ) => any,
    userUpdated: boolean
}

const Component: React.FC<AccountProps> = props => {
    const { register, handleSubmit, errors } = useForm();
    const [open, setOpen] = useState(false);
    const [changePassword, setChangePassword] = useState(false);
    const [visible, setVisible] = useState(false);
    const { userChangePasswordRequest, userUpdated } = props;

    useEffect(() => {
        if (userUpdated) setVisible(true);
    }, [userUpdated])

    const onSubmit = ({current, password, repeat}, e) => {
        const id = 1;
        userChangePasswordRequest(id, current, password, repeat);
        // TODO: make sure it doesn't reset the form when typed password and confirmation password ain't equal
        e.target.reset();
    };

    const onDeleteAccount = () => {
        console.log("delete account");
    }

    const onDismiss = () => setVisible(false);

    return (
        <React.Fragment>
            { visible ? <Message info
                    onDismiss={onDismiss}
                    header='Done!'
                    content='Your account information has been updated successfully.'
                /> : ''}

            <Checkbox 
                slider 
                label={{ children: 'Change Password' }}
                checked={changePassword}
                onChange={() => setChangePassword(!changePassword)}    
            />

            <Divider horizontal></Divider>

            {changePassword && ( 
                <Form onSubmit={handleSubmit(onSubmit)}>

                    <Form.Field required>
                        <label>Current Password</label>
                        <input 
                            name="current" 
                            type="password" 
                            placeholder="Password"
                            ref={register({ required: true })} />
                            {errors.current && 'Password is required.'}
                    </Form.Field>

                    <Form.Field required>
                        <label>Desired Password</label>
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="Password"
                            ref={register({ required: true })} />
                            {errors.password && 'Password is required.'}
                    </Form.Field>

                    <Form.Field required>
                        <label>Repeat Password</label>
                        <input 
                            name="repeat" 
                            type="password" 
                            placeholder="Password"
                            ref={register({ required: true })} />
                            {errors.repeat && 'Password is required.'}
                    </Form.Field>

                    <Form.Field inline>
                        <Button type="submit" color="green" fluid>
                            Save
                        </Button>

                    </Form.Field>
                </Form>
            )}
            <Segment color='red' raised>
                <Label as='a' color='red' ribbon>
                    Danger Zone
                </Label>
                <Divider clearing />
                <Button type="submit" color="red" fluid onClick={() => setOpen(true)}>
                    Delete Account
                </Button>
            </Segment>
            <Confirm
                open={open}
                onCancel={() => setOpen(false)}
                onConfirm={onDeleteAccount}
            />
        </React.Fragment>
    );
}

const mapStateToProps = state => ({
    userUpdated: userUpdatedSelector(state)
})

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({
        userChangePasswordRequest
    }, dispatch);
}

const Account = connect(mapStateToProps, mapDispatchToProps)(Component);

export { Account };