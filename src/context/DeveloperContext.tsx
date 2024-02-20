'use client'

import { createContext } from 'react'

import developer from '@/data/developer'

const DeveloperContext = createContext<Developer>(developer)

export default DeveloperContext
