import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import '../styles/Side.css';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '500px',
    backgroundColor: theme.palette.background.paper,
  },

  p: {
    margin: 10,
  }

});

function ListDividers(props) {
  const { classes } = props;
  return (
    <div className="side">
      <List component="nav" className={classes.root}>
        <ListItem button>
          <ListItemText primary="Profile" />
        </ListItem>
        <Divider />
        <ListItem button divider>
          <ListItemText primary="Inbox" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Drafts" />
        </ListItem>
        <Divider light />
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>
      <p className={classes.p}>
        Tech virtual drone online browser platform through in a system. But stream software offline. Professor install angel sector anywhere create at components smart. Document fab developers encryption smartphone powered, bespoke blockstack edit atoms. Companies a storage adopters. Hardware company planet, torrent ut developers stream, engineering keyphrase end. Document reality edit, install strategy startups hardware stream, analytics e-commerce smart. Privacy news data policies analytics documents.

        Now digital designs id anywhere atoms. Now strategy startups documents designs. Venture crypto adopters niche. Video algorithm system ultra-private policies engineering. Users takedowns. In apps torrent, decentralized bespoke IPO funding, change word company. e-commerce components goods support in file system edit steem on videos engineering algorithm hundreds; Pocketable strategy startups e-commerce system. Document 1,000 how torrent, non security mi sell crypto. Despite clever designers how, word steem ability analytics.
      </p>
    </div>

  );
}

ListDividers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListDividers);