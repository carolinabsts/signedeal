import React, { FC } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import './WebBarSelect.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router';
import { pathString } from '../Router/pathString';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const MenuListComposition: FC<any> = ({
  setSideMenuIsOpen
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef: any = React.useRef(null);

  const history = useHistory();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef && anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: any) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
        if (anchorRef) {
            anchorRef?.current.focus();
        }
    };

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <div
        className="WebBarSelect__component"
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
        >
          Resources <ExpandMoreIcon/>
        </div>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem 
                    onClick={ (e) => {
                    setSideMenuIsOpen(false);
                    history.push(pathString.resources)
                    handleClose(e) }}>Customer Stories</MenuItem>
                    <MenuItem 
                    onClick={(e) => {
                    setSideMenuIsOpen(false);
                    history.push(pathString.demos)
                    handleClose(e);
                    }}>Demos</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};

export default MenuListComposition;