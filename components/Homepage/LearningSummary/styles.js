import { Container } from '@mui/material';
import {  styled } from '@mui/system';

export const SummaryContainer = styled(Container)({
    background:"#ffffff !important",
    maxWidth:'none !important',
})

export const TextWrapper = styled('div')({
    textAlign: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: '20px',
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

export const BranchedTitle = styled('span')({
    color:'#6364d9',
    fontSize:'24px',
    fontWeight:'900',
    whiteSpace:'none',
    paddingLeft:'4px',
    "@media (max-width: 480px)":{
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


export const CardTitle = styled('h3')({
    color:'#313030',
    fontSize:'20px',
    fontWeight:'bold',
    fontFamily:'Segoe UI, Bold',
    "@media (max-width: 480px)":{
        fontSize:'16px',
    }
})

export const CardDescription = styled('p')({
    color:'#707070',
    fontSize:'14px',
    lineHeight:'1.5',
    fontFamily:'Segoe UI, Regular',
    "@media (max-width: 480px)":{
        fontSize:'10px',
    }
})

export const CardButton = styled('button')({
    transition: 'all .5s ease',
        borderRadius: '18px',
	    background: '#6364d9',
	    whiteSpace: 'nowrap',
	    fontSize: '14px',
	    color: '#ffffff',
	    outline: 'none',
	    border: '2px solid #ffffff',
	    cursor: 'pointer',
	    overflow:' hidden',
        width:'167px',
        height:'35px',
	    position: 'relative',
        '&:hover':{
            background: 'rgb(69, 70, 151)',
        },
})