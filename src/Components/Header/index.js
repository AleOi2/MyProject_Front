
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { safeAccess, elvisOperator } from '../../utils/utils';

let Header = (props) => {
    let {
        Img,
        styles,
        navList, routerList,
        loginCad, routerLoginCad

    } = props;
    useEffect(() => {

    }, []);

    return (
        <Head styles={elvisOperator(styles, styles, {})}>
            <div style={{ display: 'flex' }}>
                <Logo src={Img} alt='not found' />
                <Navigator>
                    <UListText>
                        {
                            (navList) ? navList.map((nav) => {
                                return <ListText key={nav}><HoverText>{nav}</HoverText></ListText>
                            }) : <div>Adicione navList</div>

                        }
                    </UListText>
                </Navigator>

            </div>
            <Navigator>
                <UListText>
                    {
                        (loginCad) ? loginCad.map((nav) => {
                            return <ListText key={nav}><HoverText>{nav}</HoverText></ListText>
                        }) : <div>Adicione navList</div>

                    }
                </UListText>
            </Navigator>

        </Head>
    )
}

export default Header;

const Logo = styled.img`
    width:100px;
`

const HoverText = styled.div`
    color: ${(props) => {
        let color = safeAccess(props, ['styles', 'HoverText', 'color'], undefined);
        return elvisOperator(color, color, 'white')
    }
    };

	:hover {
        color: ${(props) => {
        let color = safeAccess(props, ['styles', 'HoverTextHover', 'color'], undefined);
        return elvisOperator(color, color, '#ed1212')
    }
    };
		cursor: pointer;
    }
    text-decoration: none;
`

const ListText = styled.li`
    list-style: none;
    padding:20px;   
    font-size: 20pt
`

const UListText = styled.ul`
    list-style: none;
    display:flex;
    justify-content:space-between;
    border:2px solid red
`

const Navigator = styled.nav`

`


const Head = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding:0;
    margin:0;
    background-color: ${(props) => {
        let backgroundColor = safeAccess(props, ['styles', 'Header', 'backgroundColor'], undefined);
        return elvisOperator(backgroundColor, backgroundColor, 'black')
    }
    };
    border: ${(props) => {
        let border = safeAccess(props, ['styles', 'Header', 'border'], undefined);
        return elvisOperator(border, border, '2px solid black')
    }};

`

