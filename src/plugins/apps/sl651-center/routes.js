const Connections = () => import("./view/Connections")

export default (opts) => {
    const containerId = opts.containerId
    return {
        iota: {
            [containerId || 'container']: {
                redirect: '/console/sl651/connections',
                sl651: {
                    connections: {
                        path: '/console/sl651/connections',
                        component: Connections
                    }
                }
            }
        }
    }
}
