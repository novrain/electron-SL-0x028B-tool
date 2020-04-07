import mutations from './mutations'
import actions from './actions'

export default (opts) => {
    const { id, containerId, menuId } = opts
    const state = {}
    const store = {
        modules: {
            iota: {
                modules: {
                    [containerId || 'container']: {
                        modules: {
                            [id || 'sl651center']: {
                                namespaced: true,
                                state,
                                mutations,
                                actions
                            },
                            [menuId || 'menu']: {
                                state: {
                                    menusRegister: [{
                                        "id": "console",
                                        "name": "管理控制台",
                                        "key": "/console",
                                        "linkTo": null,
                                        "icon": null,
                                        "desc": "",
                                        "affix": false,
                                        "parentId": null,
                                    },
                                    {
                                        "id": "sl651",
                                        "name": "连接管理",
                                        "key": "/console/sl651/connections",
                                        "linkTo": "/console/sl651/connections",
                                        "icon": "overview",
                                        "desc": "",
                                        "affix": true,
                                        "parentId": "console"
                                    }
                                    ]
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return store
}