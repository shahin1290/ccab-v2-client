import { Container, Grid } from '@mui/material';
import {  styled } from '@mui/system';


export const SectionContainer = styled(Container)({
    background:"#f5f6f9 !important",
    marginTop: '110px',
    maxWidth:'none !important',
})

export const TextWrapper = styled('div')({
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '100px',
    paddingTop:'100px',
    "@media (max-width: 480px)":{
        marginTop: '30px',
        paddingTop:'30px',
    }
})

export const Title = styled('h1')({
    color:'#313030',
    fontSize:'24px',
    fontWeight:'bold',
    whiteSpace:'nowrap',
    "@media (max-width: 480px)":{
        whiteSpace:'break-spaces',
        fontSize:'20px',
    }
})


export const LineHolder = styled('span')({
    display: 'flex',
    justifyContent: 'center',
})


export const Line2 = styled('span')({
    bottom: '0',
    right: '24px',
    width: '85px',
    height: '6px',
    background: '#6364d9',
    transform: 'translateX(0px)',
    borderRadius: '10px',
})

export const Line1 = styled('span')({
    bottom: '0',
    right: '10px',
    width: '14px',
    height: '6px',
    marginRight:'8px',
    background: '#6364d9',
    transform: 'translateX(0px)',
    borderRadius: '10px',
})

export const Description = styled('p')({
    color:'#707070',
    fontSize:'18px',
    lineHeight:'1.5',
    "@media (max-width: 480px)":{
        fontSize:'15px',
    }
})

export const DesktopContent = styled(Grid)({
    textAlign:'center'
})

export const MobileContent = styled(Grid)({
    textAlign:'center'
})