// index.js import Counter Provider
import { CounterProvider } from "./context/Counter"

export default function RootLayout({children}:{
  children: React.ReactNode
}){
  return (
    <html>
      <body>
        <CounterProvider>
        {children}
        </CounterProvider>
      </body>
    </html>
  )
}