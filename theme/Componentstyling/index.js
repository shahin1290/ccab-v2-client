import { Container, Grid } from '@mui/material';
import {  styled } from '@mui/system';
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


export const HeroTitle = styled('h1')({
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

export const HeroDescription = styled('p')({
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


export const SummaryContainer = styled(Container)({
    background: "#ffffff !important",
    maxWidth: "none !important",
  });
  
  export const TextWrapper = styled("div")({
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "20px",
    paddingTop: "100px",
    "@media (max-width: 480px)": {
      marginTop: "30px",
      paddingTop: "30px",
    },
  });
  


  export const Title = styled("h1")({
    color: "#313030",
    fontSize: "24px",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    "@media (max-width: 480px)": {
      whiteSpace: "break-spaces",
      fontSize: "20px",
    },
  });

  
  export const BranchedTitle = styled("span")({
    color: "#6364d9",
    fontSize: "24px",
    fontWeight: "900",
    whiteSpace: "none",
    paddingLeft: "4px",
    "@media (max-width: 480px)": {
      fontSize: "20px",
    },
  });
  
  export const LineHolder = styled("span")({
    display: "flex",
    justifyContent: "center",
  });
  
  export const Line2 = styled("span")({
    bottom: "0",
    right: "24px",
    width: "85px",
    height: "6px",
    background: "#6364d9",
    transform: "translateX(0px)",
    borderRadius: "10px",
  });
  
  export const Line1 = styled("span")({
    bottom: "0",
    right: "10px",
    width: "14px",
    height: "6px",
    marginRight: "8px",
    background: "#6364d9",
    transform: "translateX(0px)",
    borderRadius: "10px",
  });
  
  export const Description = styled("p")({
    color: "#707070",
    fontSize: "18px",
    lineHeight: "1.5",
    "@media (max-width: 480px)": {
      fontSize: "15px",
    },
  });

  
  export const CardTitle = styled("h3")({
    color: "#313030",
    fontSize: "20px",
    fontWeight: "bold",
    fontFamily: "Segoe UI, Bold",
    "@media (max-width: 480px)": {
      fontSize: "16px",
    },
  });
  
  export const CardDescription = styled("p")({
    color: "#707070",
    fontSize: "14px",
    lineHeight: "1.5",
    fontFamily: "Segoe UI, Regular",
    "@media (max-width: 480px)": {
      fontSize: "10px",
    },
  });
  
  export const CardButton = styled("button")({
    transition: "all .5s ease",
    borderRadius: "18px",
    background: "#6364d9",
    whiteSpace: "nowrap",
    fontSize: "14px",
    color: "#ffffff",
    outline: "none",
    border: "2px solid #ffffff",
    cursor: "pointer",
    overflow: " hidden",
    width: "167px",
    height: "35px",
    position: "relative",
    "&:hover": {
      background: "rgb(69, 70, 151)",
    },
  });
  
export const SectionContainer = styled(Container)({
    background:"#f5f6f9 !important",
    marginTop: '110px',
    maxWidth:'none !important',
})


export const DesktopContent = styled(Grid)({
    textAlign:'center'
})

export const MobileContent = styled(Grid)({
    textAlign:'center'
})

