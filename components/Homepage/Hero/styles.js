import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    container:{
        marginTop:'100px',
    },
    leftSide:{
        marginTop:'140px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'10px',
        }
    },
    rightSide:{
        marginTop:'60px',
        [theme.breakpoints.down('sm')]:{
            marginTop:'0',
        }
    },
    headLine:{
        textAlign: 'left',
        color: '#707070',
        fontSize:"45px",
        marginBottom:'-20px',
        whiteSpace:'nowrap',
        [theme.breakpoints.down('sm')]:{
            fontSize:"30px",
        }
    },
    title:{
        fontSize:"48px",
        textAlign: 'left',
        color: '#6364D9',
        whiteSpace:'nowrap',
        marginBottom:'-5px',
        [theme.breakpoints.down('sm')]:{
            fontSize:"35px",
            whiteSpace:'break-spaces',
        }

    },
    description:{
        fontSize:"18px",
        textAlign: 'left',
        color: '#707070',
        lineHeight:'1.5',
        [theme.breakpoints.down('sm')]:{
            fontSize:"15px",
        }
    },
    image:{
        textAlign:"center",
        height:'100%',
        width:'100%',
        [theme.breakpoints.down('sm')]:{
            textAlign:"left",
        }
    }
}))