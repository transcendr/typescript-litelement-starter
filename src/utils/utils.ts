import * as uuid from 'uuid'

/**
 * this is needed for HMR + web-components because they have global namespace ;)
 */
export const generateName = (name: string) => `${name}-${uuid()}`
