import TestPage from '~components/TestPage'
import { PATH_PREFIX } from '~constants/routes'

export const routes = [
  {
    component: TestPage,
    path: PATH_PREFIX,
    exact: true,
  },
]
