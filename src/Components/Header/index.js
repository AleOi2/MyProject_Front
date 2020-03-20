
import React from 'react'
import styled from 'styled-components';
import Img from '../../img/tsubaki2.svg'

let Header = (props) =>{
    let {navList} = props;
    return(
        <Head>
            <Logo src={Img} alt='not found'/> 
            <Navigator> 
                <UListText>
                    {
                        navList.map((nav) =>{
                            return <ListText key={nav}><HoverText>{nav}</HoverText></ListText>
                        })
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
	color: #000;
	:hover {
		color: #ed1212;
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
`

const Navigator = styled.nav`

`


const Head = styled.header`
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    align-items: center;
    padding:0;
    margin:0;

`