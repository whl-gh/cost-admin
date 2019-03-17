export let treeDataUser = [
    {
        title: '事业一部',
        value: '0-0',
        key: '0-0',
        selectable: false, //当前这个节点不可选，不影响子节点
        children: [
            {
                title: '狗蛋',
                value: '0-0-1',
                key: '0-0-1',
            }, 
            {
                title: '狗带',
                value: '0-0-2',
                key: '0-0-2',
            }
        ]
    },
    {
        title: '事业二部',
        value: '0-1',
        key: '0-1',
        selectable: false,
        children: [
            {
                title: '翠莲',
                value: '0-1-1',
                key: '0-1-2',
            }, 
            {
                title: '翠花',
                value: '0-1-2',
                key: '0-1-2',
            }
        ]
    }
];

export let treeDataOrg = [
    {
        title: '事业一部',
        value: '0-0',
        key: '0-0',
        children: [
            {
                title: '销售组',
                value: '0-0-1',
                key: '0-0-1',
            }, 
            {
                title: '人力组',
                value: '0-0-2',
                key: '0-0-2',
            }
        ]
    },
    {
        title: '事业二部',
        value: '0-1',
        key: '0-1',
    }
];