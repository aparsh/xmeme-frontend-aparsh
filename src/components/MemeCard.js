import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import FormDialog from "./ModalForm";
var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';

const useStyles = makeStyles({
  root: {
    width: 700
  },
  media: {
    width: '100%',
    height: 500
  },
  avatar: {
    backgroundColor: "#00F",
  }
});

export default function MemeCard(props) {
  const { meme, newColorCode} = props;
  const color = newColorCode();
  const [open, setOpen] = React.useState(false);
  const [post, setPost] = React.useState(meme);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const memeChanged= (newMeme) => {
    console.log(newMeme);
    setPost(newMeme);
  }

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} style={{backgroundColor:color}}>
              {post.name.charAt(0).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleClickOpen}>
              <EditIcon />
            </IconButton>
          }
          title={post.name}
        />
        <FormDialog open={open} handleClose={handleClose} memeChanged={memeChanged} meme={meme}/>
        <CardContent>
          <Typography variant="body1" color="textSecondary" component="p" align="left">
            {post.caption}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={post.url}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}
