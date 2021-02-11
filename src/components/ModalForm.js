import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import config from '../config';


export default function FormDialog(props) {
  const {open, handleClose, meme, memeChanged} = props;
  const [caption, setCaption] = React.useState('');
  const [url, setUrl] = React.useState('');



  const handleChange = event => {
    console.log(event.target.name);
    let target = event.target.name;
    if (target == "url") {
      setUrl(event.target.value);
    }
    else if (target == "caption") {
      setCaption(event.target.value);
    }
    else {
      setUrl(event.target.value);
    }

  };
  const patchRequest = body => {
    const requestOptions = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    };

    fetch(config.SERVER_URL+meme.id, requestOptions)
      .then(response => response.json())
      .then(data => console.log(data));
  };

  const handleSubmit = event => {

    let newMeme = {}
    if(caption.length>0) newMeme.caption = caption;
    if(url.length>0) newMeme.url = url;


    console.log(newMeme);
    patchRequest(newMeme);
    let changedMeme = meme;
    if(caption.length>0) changedMeme.caption = caption;
    if(url.length>0) changedMeme.url = url;
    memeChanged(changedMeme);

    setCaption("");
    setUrl("");
    handleClose();
    event.preventDefault();
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit meme Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To Edit caption or url just enter the new one
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="caption"
            name="caption"
            label="Caption"
            type="text"
            onChange={handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="url"
            name="url"
            label="Url"
            type="text"
            onChange={handleChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
