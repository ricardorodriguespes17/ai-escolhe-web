import Header from "./Header"

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-auto">
      <Header />

      <main className="flex flex-col h-full flex-1 bg-background-light px-4 pb-6 pt-20 overflow-auto">
        {children}
      </main>
    </div>
  )
}

export default BaseLayout