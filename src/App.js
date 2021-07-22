import './App.css';
import './ScrollArrow.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar alt="H" src={require('./resources/avatar.jpg').default} style={{width:140, height: 140}}></Avatar>
        <h1>Welcome to my website</h1>
        <h3>Scroll down to see my information</h3>
        <br/>
        <br/>
        <div class="arrow">
                <span></span>
                <span></span>
                <span></span>
  
        </div>
      </header>
      <body className="App-body">
          <div style={{height: 100}}>
            <h3 style={{margin: 'auto', width: '100%'}}>Contact me</h3>
          </div>
            <List component="nav" aria-label="main mailbox folders" style={{marginLeft: 50, marginRight: 50}}>
              <ListItem button onClick={() => window.open("https://www.facebook.com/hiep.marin", "_blank")}>
                <FacebookIcon style={{marginRight: 20}}>
                  <InboxIcon />
                </FacebookIcon>
                <ListItemText primary="Trần Lộc Hiệp" />
              </ListItem>
              <Divider />

              <ListItem button onClick={() => window.open("https://www.instagram.com/hiepmarin/", "_blank")}>
                <InstagramIcon style={{marginRight: 20}}>
                  <DraftsIcon />
                </InstagramIcon>
                <ListItemText primary="hiepmarin" />
              </ListItem>
              <Divider />

              <ListItem button>
                <PhoneIcon style={{marginRight: 20}}>
                  <DraftsIcon />
                </PhoneIcon>
                <ListItemText primary="+84916367574" />
              </ListItem>
              <Divider />
        
      
              <ListItem button>
                <MailOutlineIcon style={{marginRight: 20}}>
                  <DraftsIcon />
                </MailOutlineIcon>
              <ListItemText primary="tranlochiep1111@gmail.com" />
              </ListItem>
              <Divider />

              <ListItem button onClick={() => window.open("https://www.linkedin.com/in/hieptran1009/", "_blank")}>
                <LinkedInIcon style={{marginRight: 20}}>
                  <DraftsIcon />
                </LinkedInIcon>
              <ListItemText primary="hiep.marin" />
              </ListItem>
              <Divider />
            </List>
      </body>
    </div>
  );
}

export default App;
