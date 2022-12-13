import * as React from 'react';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom"
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import cart from "./assets/cart.svg"
import trash from "./assets/trash-2.svg"
import PlaceholderP from "./assets/PlaceholderP.png"

export default function MySideNav() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Cart'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <div style={{ marginLeft: "10px" }}>
        <img src={PlaceholderP} />
        <div>
            <h3>Laptop</h3>
            <span>Qty: 1  </span>
            <span style={{ margin: "0 20px" }}>$1,200</span>
            <button className="trash"><img src={trash} /></button>
        </div>
        <h3>Total: $1,200</h3>
        <Link to="/checkout">
        <button className="checkout-btn">Check Out</button>
        </Link>
      </div>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button style={{ position: "relative", top: "-147px", right: "25px", float: "right" }} onClick={toggleDrawer(anchor, true)}>      
            <img src={cart} />
        </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

    </div>
  );
}