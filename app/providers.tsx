'use client'

import { ChildrenOnly } from '@/types/components_argument'
import { AnyARecord } from 'dns'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: ChildrenOnly) {
  return <ThemeProvider>{children}</ThemeProvider>
}