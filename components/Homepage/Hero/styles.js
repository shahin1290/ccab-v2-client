import {  styled } from '@mui/system';
import { Container, Grid } from "@mui/material";
import Image from 'next/image';


export const HeroContainer = styled(Container)({
    background:"#f5f6f9",
    maxWidth:"none !important",
    fontFamily:'Segoe UI',
    "@media (max-width: 480px)":{
        fontSize:"5px",
}
})

export const LeftSide = styled(Grid)({
        marginTop:'120px',
        zIndex:'1',
        "@media (max-width: 480px)":{
            marginTop:'10px',
}
})

export const RightSide = styled(Grid)({
    marginTop:'60px',
    "@media (max-width: 480px)":{
        marginTop:'0',
    }
})


export const HeadLine = styled('h2')({
        textAlign: 'left',
        color: '#707070',
        fontSize:"45px",
        marginBottom:'-40px',
        marginLeft:"30px",
        whiteSpace:'nowrap',
        "@media (max-width: 600px)":{
            fontSize:"25px",
            marginBottom:'-5px',
            marginLeft:"0",
        }

})


export const Title = styled('h1')({
        fontSize:"48px",
        textAlign: 'left',
        color: '#6364D9',
        whiteSpace:'nowrap',
        marginLeft:"30px",
        marginBottom:'-5px',
        "@media (max-width: 600px)":{
            whiteSpace:'break-spaces',
            fontSize:"26px",
            marginLeft:"0",
}
})

export const Description = styled('p')({
        fontSize:"18px",
        textAlign: 'left',
        color: '#707070',
        lineHeight:'1.5',
        marginLeft:"30px",
        "@media (max-width: 600px)":{
            fontSize:"15px",
            marginLeft:"0",
        }
})

export const Media = styled(Image)({
        textAlign:"center",
        height:'100%',
        width:'100%',
        "@media (max-width: 600px)":{
            textAlign:"left",
}
})