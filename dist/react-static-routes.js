
    import React, { Component } from 'react'
    import { Route } from 'react-router-dom'
    import universal, { setHasBabelPlugin } from 'react-universal-component'

    setHasBabelPlugin()

    const universalOptions = {
      loading: () => null,
      error: () => null,
    }

    const t_0 = universal(import('../src/containers/Home'), universalOptions)
const t_1 = universal(import('../src/containers/About'), universalOptions)
const t_2 = universal(import('../src/containers/Post'), universalOptions)
const t_3 = universal(import('../src/containers/Blog'), universalOptions)
const t_4 = universal(import('../src/containers/404'), universalOptions)

    // Template Map
    const templateMap = {
      t_0,
t_1,
t_2,
t_3,
t_4
    }

    // Template Tree
    const templateTree = {c:{"404":{t:"t_4"},"/":{t:"t_0"},"about":{t:"t_1"},"blog":{c:{"post":{c:{1:{t:"t_2"},2:{t:"t_2"},3:{t:"t_2"},4:{t:"t_2"},5:{t:"t_2"},6:{t:"t_2"},7:{t:"t_2"},8:{t:"t_2"},9:{t:"t_2"},"10":{t:"t_2"},"11":{t:"t_2"},"12":{t:"t_2"},"13":{t:"t_2"},"14":{t:"t_2"},"15":{t:"t_2"},"16":{t:"t_2"},"17":{t:"t_2"},"18":{t:"t_2"},"19":{t:"t_2"},"20":{t:"t_2"},"21":{t:"t_2"},"22":{t:"t_2"},"23":{t:"t_2"},"24":{t:"t_2"},"25":{t:"t_2"},"26":{t:"t_2"},"27":{t:"t_2"},"28":{t:"t_2"},"29":{t:"t_2"},"30":{t:"t_2"},"31":{t:"t_2"},"32":{t:"t_2"},"33":{t:"t_2"},"34":{t:"t_2"},"35":{t:"t_2"},"36":{t:"t_2"},"37":{t:"t_2"},"38":{t:"t_2"},"39":{t:"t_2"},"40":{t:"t_2"},"41":{t:"t_2"},"42":{t:"t_2"},"43":{t:"t_2"},"44":{t:"t_2"},"45":{t:"t_2"},"46":{t:"t_2"},"47":{t:"t_2"},"48":{t:"t_2"},"49":{t:"t_2"},"50":{t:"t_2"},"51":{t:"t_2"},"52":{t:"t_2"},"53":{t:"t_2"},"54":{t:"t_2"},"55":{t:"t_2"},"56":{t:"t_2"},"57":{t:"t_2"},"58":{t:"t_2"},"59":{t:"t_2"},"60":{t:"t_2"},"61":{t:"t_2"},"62":{t:"t_2"},"63":{t:"t_2"},"64":{t:"t_2"},"65":{t:"t_2"},"66":{t:"t_2"},"67":{t:"t_2"},"68":{t:"t_2"},"69":{t:"t_2"},"70":{t:"t_2"},"71":{t:"t_2"},"72":{t:"t_2"},"73":{t:"t_2"},"74":{t:"t_2"},"75":{t:"t_2"},"76":{t:"t_2"},"77":{t:"t_2"},"78":{t:"t_2"},"79":{t:"t_2"},"80":{t:"t_2"},"81":{t:"t_2"},"82":{t:"t_2"},"83":{t:"t_2"},"84":{t:"t_2"},"85":{t:"t_2"},"86":{t:"t_2"},"87":{t:"t_2"},"88":{t:"t_2"},"89":{t:"t_2"},"90":{t:"t_2"},"91":{t:"t_2"},"92":{t:"t_2"},"93":{t:"t_2"},"94":{t:"t_2"},"95":{t:"t_2"},"96":{t:"t_2"},"97":{t:"t_2"},"98":{t:"t_2"},"99":{t:"t_2"},"100":{t:"t_2"}}}},t:"t_3"}}}

    // Get template for given path
    const getComponentForPath = path => {
      const parts = path === '/' ? ['/'] : path.split('/').filter(d => d)
      let cursor = templateTree
      try {
        parts.forEach(part => {
          cursor = cursor.c[part]
        })
        return templateMap[cursor.t]
      } catch (e) {
        return false
      }
    }

    if (typeof document !== 'undefined') {
      window.reactStaticGetComponentForPath = getComponentForPath
    }

    export default class Routes extends Component {
      render () {
        const { component: Comp, render, children } = this.props
        const renderProps = {
          templateMap,
          templateTree,
          getComponentForPath
        }
        if (Comp) {
          return (
            <Comp
              {...renderProps}
            />
          )
        }
        if (render || children) {
          return (render || children)(renderProps)
        }

        // This is the default auto-routing renderer
        return (
          <Route path='*' render={props => {
            let Comp = getComponentForPath(props.location.pathname)
            if (!Comp) {
              Comp = getComponentForPath('404')
            }
            return Comp && <Comp {...props} />
          }} />
        )
      }
    }
    