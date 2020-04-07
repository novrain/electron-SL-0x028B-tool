import mutations from './mutations'
import actions from './actions'

export default (opts) => {
    const { id, containerId } = opts
    const state = {
        menusRegister: [
            {
                "id": "console",
                "name": "管理控制台",
                "key": "/console",
                "linkTo": null,
                "icon": null,
                "desc": "",
                "affix": false,
                "parentId": null,
            }
        ],
        menus: {
            roots: [{ children: [] }],
            idMap: [],
            pathMap: []
        }
    }
    const store = {
        modules: {
            iota: {
                modules: {
                    [containerId || 'container']: {
                        // 注入到 container
                        state: {
                            layout: {
                                console: {
                                    left: {
                                        middle: {
                                            items: [{ component: 'ii-menu', props: { id, containerId } }]
                                        }
                                    },
                                    head: {
                                        right: {
                                        }
                                    },
                                    navigation: {
                                        bar: {
                                            items: [{ component: 'ii-tagbar', props: { id, containerId } }]
                                        },
                                    },
                                }
                            }
                        },
                        modules: {
                            [id || 'menu']: {
                                namespaced: true,
                                state,
                                mutations,
                                actions
                            }
                        }
                    }
                }
            }
        }
    }
    return store
}