import B from '@resolve-demo/pkg-b'
import {pipe, prop} from 'sanctuary'

import {identity} from 'ramda'

export default class A {
	hello = 'world'
}

/**
 * Automatic imports work well for locally listed npm packages
 * and yarn workspace packages, listed in dependencies
 */
pipe([prop('name'), (s) => `Hello, ${s}`, console.log])(B.name)


/**
 * For packages, listed in @resolve-demo/pkg-b, automatic imports do not work:
 * Try typing 'zip', 'zipWith', produce etc.; you have to manually add it to import
 */
identity(B.name)
