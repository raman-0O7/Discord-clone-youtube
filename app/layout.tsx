import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/Providers/ThemeProvider'
import { cn } from '@/lib/utils'
import { ModeToggle } from '@/components/ModeToggle'


const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord-Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        
          <body className={cn(font.className, "bg-white dark:bg-[#313338]")}>
          <ThemeProvider 
          attribute='class'
          defaultTheme='dark'
          enableSystem={true}
          disableTransitionOnChange
          storageKey='discord-theme'
          >
            {children}
            <ModeToggle />
          </ThemeProvider>
          </body>
      </html>
    </ClerkProvider>
  )
}
