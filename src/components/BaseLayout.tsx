import Header from "./Header"

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col w-full h-full relative overflow-auto">
      <Header />

      <main className="flex flex-col h-auto flex-1 justify-center gap-6 px-4 pb-6 pt-20 bg-background-light">
        {children}
      </main>
    </div>
  )
}

export default BaseLayout