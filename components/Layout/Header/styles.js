// import { makeStyles } from '@material-ui/core/styles';

// export default makeStyles((theme) => ({
//     appbar:{
//         height: '80px',
//         display:'flex',
//         background:'#f5f6f9',
//         alignItems:'center',
//         fontSize: '1rem',
//         // position:'fixed',
//         top:0,
//         zIndex:10,
//         marginTop:'30px',
//         [theme.breakpoints.down('md')]: {
//             transition: '0.8s all ease',
//     }},
//     navbarContainer:{
//         display: 'flex',
//         justifyContent: 'space-between',
//         height: '80px',
//         zIndex: 1,
//         width: '100%',
//         padding:' 0 24px',
//         maxWidth:'1100px',
//     },
//     navlogo:{
//         justifySelf:'flex-start',
//         cursor: 'pointer',
//         display:'flex',
//         alignItems: 'center',
//         color: '#ff5773',
//         fontSize:'1.25rem',
//         fontWeight: 'bold',
//         textDecoration:'none',
//     },
//     logo:{
//         top: '27px',
//         width: '98px',
//         height: '85px',
//         background: 'transparent  0% 0% no-repeat padding-box',
 
//     },
//     mobileIcon:{
//         display: 'none',
//         [theme.breakpoints.down('sm')]:{
//             display:'block',
//             position: 'absolute',
//             right: '40px',
//             transform: 'translate(100%, 60%)',
//             fontSize: '2rem',
//             cursor: 'pointer',
//             color:'#6162D8',
//             boxShadow: 'transparent 1.95px 1.95px 2.6px',
//         }
//     },
//     navMenu:{
//         display: 'flex',
//         justifySelf:"flex-end",
//         alignItems: 'center',
//         listStyle: 'none',
//         textAlign: 'center',       
//         [theme.breakpoints.down('xs')]:{
//         display:'none',
//         }
//     },
//     navItem:{
//         height: '60px',
        
//     },
//     navLinks:{
//         color: '#ffffff',
//         display:'flex',
//         fontSize: '20px',
//         alignItems:'center',
//         textDecoration: 'none',
//         padding: '0 1.5rem',
//         height: '100%',
//         cursor:'pointer',
       
        
//     },
//     buttonWrap:{
//         width: '100%',
// 	    display: 'flex',
// 	    justifyContent: 'flex-end',
// 	    flexFlow: 'wrap',
// 	    gap:' 0.5rem',
//         [theme.breakpoints.down('xs')]:{
//             display:'none',
//          }
//     },
//     button:{
//         transition: 'all .5s ease',
//         borderRadius: '18px',
// 	    background: 'none',
// 	    whiteSpace: 'nowrap',
// 	    fontSize: '20px',
// 	    color: '#ffffff',
// 	    outline: 'none',
// 	    border: '2px solid #ffffff',
// 	    cursor: 'pointer',
// 	    overflow:' hidden',
//         width:'115px',
//         height:'35px',
// 	    position: 'relative',
//         '&:hover':{
//             color: '#001F3F',
//             backgroundColor: '#fff',
//         },
//     },
//     button2:{
//         transition: 'all .5s ease',
//         borderRadius: '20px',
// 	    background: '#ffffff',
// 	    whiteSpace: 'nowrap',
// 	    fontSize: '18px',
// 	    color: '#001F3F',
// 	    outline: 'none',
// 	    border: '2px solid #ffffff',
// 	    cursor: 'pointer',
// 	    overflow:' hidden',
//         width:'115px',
//         height:'35px',
// 	    position: 'relative',
//         '&:hover':{
//             color: '#fff',
//             backgroundColor: 'transparent',
//         },
//     },
//     wrap:{
//         display:'flex',
//         position:'absolute',
//         justifyContent:'space-between',
//         width:'625px',
//         right:'0',
//         borderRadius: '38px 0px 0px 38px',
//         background: 'transparent linear-gradient(90deg, #6162D8 0%, #8D92ED 100%) 0% 0% no-repeat padding-box',
//         height:'60px',
//         top:'40px',
//         [theme.breakpoints.down('sm')]:{
//             display:'none',
//             background:'none',
//             borderRadius:"none"
//          }
//     },
//     sidebarLink:{
//         display:'flex',
//         alignItems:'center',
//         justifyContent:'center',
//         fontSize: '20px',
//         listStyle: 'none',
//         transition: '0.2 ease-in-out',
//         textDecoration : 'none',
//         color: '#6162D8',
//         cursor:'pointer',
//         boxShadow: 'transparent 1.95px 1.95px 2.6px',
//         '&:hover' :{
//             color:'#707070',
//             transition: '0.2s ease-in-out',
//         },
//     },

// }))