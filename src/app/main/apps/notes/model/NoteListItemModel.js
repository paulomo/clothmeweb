import {Utils} from '@fuse';

function NoteListItemModel(data)
{
    const item = data ? data : {};
    return {
        id     : item.id || Utils.generateGUID(),
        checked: item.checked || false,
        text   : item.text || ''
    }
}

export default NoteListItemModel;
