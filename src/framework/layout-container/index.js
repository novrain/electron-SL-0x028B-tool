import store from './store'
import routes from './routes'
import CollapsedControl from './view/layout/CollapsedControl'

const entry = (opts, Vue) => {
    Vue.mixin({
        computed: {
            $settings() {
                return {}
            }
        }
    })
    Vue.component('ii-collapsed-control', CollapsedControl)
    opts.complex = opts.complex || {}
    const theStore = store(opts)
    return {
        store: theStore,
        routes: routes(opts)
    }
}

export {
    entry
}