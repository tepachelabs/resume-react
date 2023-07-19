import { createContext } from 'react'

import resume from '../resume'

const ResumeContext = createContext<Resume>(resume)

export default ResumeContext
