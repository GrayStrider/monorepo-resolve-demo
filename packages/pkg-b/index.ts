import {pipe, toUpper} from 'ramda'
import produce from 'immer'

export default class B {
	static person = 'JB Support Person'
}

/**
 * Automatic imports work well for locally listed packages
 * (pkg-a is not shared with this package)
 */
pipe(toUpper, (s) => `Hello, ${s}`, console.log)(B.person)
produce(() => {})
