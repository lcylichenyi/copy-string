import copyString from './js/copyString'

const copy = copyString.init

if (typeof window !== 'undefined') {
  (window as any).copy = copy
}

export default copy