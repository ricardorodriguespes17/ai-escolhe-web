import Card from "../components/Card"
import SideContainer from "../components/SideContainer"

const HomePage = () => {
  return (
    <div className="flex flex-col h-full md:flex-row justify-center gap-6">
      <SideContainer />

      <div className="flex flex-1 flex-col gap-6">
        <Card className="gap-1">
          <strong>Não há receitas geradas recentemente, vamos começar?</strong>
          <p>Clique em <span className="text-primary">Gerar receita</span> no topo da página</p>
        </Card>
      </div>
    </div>
  )
}

export default HomePage