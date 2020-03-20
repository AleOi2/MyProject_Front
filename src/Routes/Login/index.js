import React from 'react'
import { Button } from 'react-bootstrap'
import Form from '../../Components/Form'
import Panel from '../../Components/Panel';
import { loginRender }  from './input';
import Head from '../../Components/Header/';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { history } = this.props;
        return (
            <Panel >
                <Head navList={['HOME','SOBRE','MAIS','CONTATOS']}></Head>
                <Form render={loginRender.render}
                    onAccept={(formState, setFormState) => {
                        console.log(formState)
                        setFormState({ ...formState, password: '', login: '' })
                        //history.push('/app');
                    }}
                    initialState={{ login: '', password: '' }}
                ></Form>
            </Panel>

        )

    }

}