import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Avatar, Paper, Typography, TextField, IconButton, Icon} from '@material-ui/core';
import {FuseScrollbars} from 'Common';
import clsx from 'clsx';
import moment from 'moment/moment';
import * as Actions from './store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    messageRow  : {
        position                          : 'relative',
        display                           : 'flex',
        flexDirection                     : 'column',
        alignItems                        : 'flex-start',
        justifyContent                    : 'flex-end',
        padding                           : '0 16px 4px 16px',
        flex                              : '0 0 auto',
        '&.contact'                       : {
            '& $bubble'       : {
                backgroundColor        : theme.palette.primary.main,
                color                  : theme.palette.primary.contrastText,
                borderTopLeftRadius    : 5,
                borderBottomLeftRadius : 5,
                borderTopRightRadius   : 20,
                borderBottomRightRadius: 20,
                '& $time'              : {
                    marginLeft: 12
                }
            },
            '&.first-of-group': {
                '& $bubble': {
                    borderTopLeftRadius: 20
                }
            },
            '&.last-of-group' : {
                '& $bubble': {
                    borderBottomLeftRadius: 20
                }
            }
        },
        '&.me'                            : {
            paddingLeft: 40,

            '& $avatar': {
                order : 2,
                margin: '0 0 0 16px'
            },

            '& $bubble'       : {
                marginLeft             : 'auto',
                backgroundColor        : theme.palette.grey[300],
                color                  : theme.palette.getContrastText(theme.palette.grey[300]),
                borderTopLeftRadius    : 20,
                borderBottomLeftRadius : 20,
                borderTopRightRadius   : 5,
                borderBottomRightRadius: 5,
                '& $time'              : {
                    justifyContent: 'flex-end',
                    right         : 0,
                    marginRight   : 12
                }
            },
            '&.first-of-group': {
                '& $bubble': {
                    borderTopRightRadius: 20
                }
            },

            '&.last-of-group': {
                '& $bubble': {
                    borderBottomRightRadius: 20
                }
            }
        },
        '&.contact + .me, &.me + .contact': {
            paddingTop: 20,
            marginTop : 20
        },
        '&.first-of-group'                : {
            '& $bubble': {
                borderTopLeftRadius: 20,
                paddingTop         : 13
            }
        },
        '&.last-of-group'                 : {
            '& $bubble': {
                borderBottomLeftRadius: 20,
                paddingBottom         : 13,
                '& $time'             : {
                    display: 'flex'
                }
            }
        }
    },
    avatar      : {
        position: 'absolute',
        left    : -32,
        margin  : 0
    },
    bubble      : {
        position      : 'relative',
        display       : 'flex',
        alignItems    : 'center',
        justifyContent: 'center',
        padding       : 12,
        maxWidth      : '100%'
    },
    message     : {
        whiteSpace: 'pre-wrap',
        lineHeight: 1.2
    },
    time        : {
        position  : 'absolute',
        display   : 'none',
        width     : '100%',
        fontSize  : 11,
        marginTop : 8,
        top       : '100%',
        left      : 0,
        whiteSpace: 'nowrap'
    },
    bottom      : {
        background: theme.palette.background.default,
        borderTop : '1px solid rgba(0, 0, 0, 0.13)'
    },
    inputWrapper: {
        borderRadius: 24
    }
}));

function Chat(props)
{
    const dispatch = useDispatch();
    const contacts = useSelector(({chatPanel}) => chatPanel.contacts.entities);
    const selectedContactId = useSelector(({chatPanel}) => chatPanel.contacts.selectedContactId);
    const chat = useSelector(({chatPanel}) => chatPanel.chat);
    const user = useSelector(({chatPanel}) => chatPanel.user);

    const classes = useStyles();
    const chatScroll = useRef(null);
    const [messageText, setMessageText] = useState('');

    useEffect(() => {
        scrollToBottom();
    }, [chat]);

    function scrollToBottom()
    {
        chatScroll.current.scrollTop = chatScroll.current.scrollHeight;
    }

    const onInputChange = (ev) => {
        setMessageText(ev.target.value);
    };

    const onMessageSubmit = (ev) => {
        ev.preventDefault();
        if ( messageText === '' )
        {
            return;
        }
        dispatch(Actions.sendMessage(messageText, chat.id, user.id))
            .then(() => {
                setMessageText('');
            });
    };

    return (
        <Paper elevation={3} className={clsx("flex flex-col", props.className)}>

            {useMemo(() => {
                    const shouldShowContactAvatar = (item, i) => {
                        return (
                            item.who === selectedContactId &&
                            ((chat.dialog[i + 1] && chat.dialog[i + 1].who !== selectedContactId) || !chat.dialog[i + 1])
                        );
                    };

                    const isFirstMessageOfGroup = (item, i) => {
                        return (i === 0 || (chat.dialog[i - 1] && chat.dialog[i - 1].who !== item.who));
                    };

                    const isLastMessageOfGroup = (item, i) => {
                        return (i === chat.dialog.length - 1 || (chat.dialog[i + 1] && chat.dialog[i + 1].who !== item.who));
                    };
                    return (<FuseScrollbars
                            ref={chatScroll}
                            className="flex flex-1 flex-col overflow-y-auto"
                        >
                            {!chat ?
                                (
                                    <div className="flex flex-col flex-1 items-center justify-center p-24">
                                        <Icon className="text-128" color="disabled">chat</Icon>
                                        <Typography className="px-16 pb-24 mt-24 text-center" color="textSecondary">
                                            Select a contact to start a conversation.
                                        </Typography>
                                    </div>
                                ) :
                                chat.dialog.length > 0 ?
                                    (
                                        <div className="flex flex-col pt-16 pl-40 pb-40">
                                            {chat.dialog.map((item, i) => {
                                                const contact = item.who === user.id ? user : contacts.find(_contact => _contact.id === item.who);
                                                return (
                                                    <div
                                                        key={item.time}
                                                        className={clsx(
                                                            classes.messageRow,
                                                            {'me': item.who === user.id},
                                                            {'contact': item.who !== user.id},
                                                            {'first-of-group': isFirstMessageOfGroup(item, i)},
                                                            {'last-of-group': isLastMessageOfGroup(item, i)}
                                                        )}
                                                    >
                                                        {shouldShowContactAvatar(item, i) && (
                                                            <Avatar className={classes.avatar} src={contact.avatar}/>
                                                        )}
                                                        <div className={classes.bubble}>
                                                            <div className={classes.message}>{item.message}</div>
                                                            <Typography className={classes.time}
                                                                        color="textSecondary">{moment(item.time).format('MMMM Do YYYY, h:mm:ss a')}</Typography>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col flex-1">
                                            <div className="flex flex-col flex-1 items-center justify-center">
                                                <Icon className="text-128" color="disabled">chat</Icon>
                                            </div>
                                            <Typography className="px-16 pb-24 text-center" color="textSecondary">
                                                Start a conversation by typing your message below.
                                            </Typography>
                                        </div>
                                    )
                            }
                        </FuseScrollbars>
                    )
                }
                , [chat, classes, contacts, selectedContactId, user])}
            {chat && (
                <form onSubmit={onMessageSubmit} className={clsx(classes.bottom, "py-16 px-8")}>
                    <Paper className={clsx(classes.inputWrapper, "flex items-center relative")}>
                        <TextField
                            autoFocus={false}
                            id="message-input"
                            className="flex-1"
                            InputProps={{
                                disableUnderline: true,
                                classes         : {
                                    root : "flex flex-grow flex-shrink-0 ml-16 mr-48 my-8",
                                    input: ""
                                },
                                placeholder     : "Type your message"
                            }}
                            InputLabelProps={{
                                shrink   : false,
                                className: classes.bootstrapFormLabel
                            }}
                            onChange={onInputChange}
                            value={messageText}
                        />
                        <IconButton className="absolute right-0 top-0" type="submit">
                            <Icon className="text-24" color="action">send</Icon>
                        </IconButton>
                    </Paper>
                </form>
            )}
        </Paper>
    );
}

export default Chat;
