'use client'

import { createContext } from 'react'

import resume from '@/data/resume'

const ResumeContext = createContext<Resume>(resume)

export default ResumeContext
