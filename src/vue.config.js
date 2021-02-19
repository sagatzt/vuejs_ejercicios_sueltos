// vue.config.js
export const devServer = {
    proxy: {
        '/egob': {
          target: 'https://datos.madrid.es/',
          ws: true,
          changeOrigin: true
        }
    }
}