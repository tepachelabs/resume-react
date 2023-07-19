import { createContext } from 'react'

import developer from '../developer'

const DeveloperContext = createContext<Developer>(developer)

export default DeveloperContext
