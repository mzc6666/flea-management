export default [
    {
        url: '/api/menu/list',
        method: 'get',
        response: () => {
            const menu = [
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'icon-all',
                            path: 'home',
                            element: 'home/index',
                            meta: {
                                title: '首页'
                            }
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'icon-clock',
                            path: 'user',
                            element: 'user/index',
                            meta: {
                                title: '用户管理'
                            }
                        }
                    ]
                },
                {
                    element: 'Layout',
                    children: [
                        {
                            icon: 'icon-calendar',
                            path: 'goods',
                            element: 'goods/index',
                            meta: {
                                title: '物品管理'
                            }
                        }
                    ]
                },
            ]

            return {
                code: 200,
                message: 'ok',
                data: menu
            }
        }
    }
]
