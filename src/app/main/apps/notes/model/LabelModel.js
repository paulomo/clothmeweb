import {Utils} from '@fuse';

function LabelModel(data)
{
    const item = data ? data : {};
    return {
        id  : item.id || Utils.generateGUID(),
        name: item.name || '',
        get handle()
        {
            return Utils.handleize(this.name)
        }
    }
}

export default LabelModel;
