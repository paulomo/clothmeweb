import React, {useState} from 'react';
import {TextField, Button, Dialog, DialogActions, DialogContent, Icon, IconButton, Typography, Toolbar, AppBar} from '@material-ui/core';
import {useForm} from 'Common/hooks';
import MailAttachment from './MailAttachment';

function MailCompose()
{
    const [openDialog, setOpenDialog] = useState(false);
    const {form, handleChange} = useForm({
        from   : 'johndoe@creapond.com',
        to     : '',
        cc     : '',
        bcc    : '',
        subject: '',
        message: ''
    });

    function handleOpenDialog()
    {
        setOpenDialog(true);
    }

    function handleCloseDialog()
    {
        setOpenDialog(false);
    }

    function handleDelete()
    {
        setOpenDialog(false);
    }

    function handleSubmit(ev)
    {
        ev.preventDefault();
        setOpenDialog(false);
    }

    return (
        <div className="p-24">

            <Button
                variant="contained"
                color="primary"
                className="w-full"
                onClick={handleOpenDialog}
            >
                COMPOSE
            </Button>

            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="form-dialog-title"
            >
                <AppBar position="static">
                    <Toolbar className="flex w-full">
                        <Typography variant="subtitle1" color="inherit">
                            New Message
                        </Typography>
                    </Toolbar>
                </AppBar>

                <form noValidate onSubmit={handleSubmit} className="flex flex-col">
                    <DialogContent classes={{root: "p-16 pb-0 sm:p-24 sm:pb-0"}}>

                        <TextField
                            className="mt-8 mb-16"
                            label="From"
                            id="from"
                            name="from"
                            value={form.from}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            disabled
                        />

                        <TextField
                            className="mt-8 mb-16"
                            label="To"
                            autoFocus
                            id="to"
                            name="to"
                            value={form.to}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            required
                        />

                        <TextField
                            className="mt-8 mb-16"
                            label="Cc"
                            id="cc"
                            name="cc"
                            value={form.cc}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />

                        <TextField
                            className="mt-8 mb-16"
                            label="Bcc"
                            id="bcc"
                            name="bcc"
                            value={form.bcc}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />

                        <TextField
                            className="mt-8 mb-16"
                            label="Subject"
                            id="subject"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />

                        <TextField
                            className="mt-8 mb-16"
                            id="message"
                            name="message"
                            onChange={handleChange}
                            value={form.message}
                            label="Message"
                            type="text"
                            multiline
                            rows={5}
                            variant="outlined"
                            fullWidth
                        />

                        <div className="pt-8">
                            <MailAttachment fileName="attachment-2.doc" size="12 kb"/>
                            <MailAttachment fileName="attachment-1.jpg" size="350 kb"/>
                        </div>
                    </DialogContent>

                    <DialogActions className="justify-between pl-8 sm:pl-16">
                        <div>
                            <Button variant="contained" color="primary" type="submit">
                                Send
                            </Button>
                            <IconButton>
                                <Icon>attach_file</Icon>
                            </IconButton>
                        </div>
                        <IconButton onClick={handleDelete}>
                            <Icon>delete</Icon>
                        </IconButton>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}

export default MailCompose;
