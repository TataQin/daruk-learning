import * as fs from 'fs'
import { CLASS_KEY } from './provider'

export function load(container) {
  const list = fs.readdirSync('./src/provider')
  for(const file of list) {
      
      if(/\.ts$/.test(file)) {
          console.log(file)
          const exports = require(`./${file}`)
          for(const m in exports) {
              const module = exports[m]
              if(typeof module === 'function') {
                  const metadata = Reflect.getMetadata(CLASS_KEY, module)
                //   console.log(metadata)
                  if(metadata)  {
                      container.bind(metadata.id, module, metadata.args)
                  }
              }
          }
      }
  }
}