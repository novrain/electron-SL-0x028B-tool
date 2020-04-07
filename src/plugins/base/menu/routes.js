
export default (opts) => {
    const containerId = opts.containerId
    return {
        iota: {
            [containerId || 'container']: {

            }
        }
    }
}
