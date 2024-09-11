import Button from "../components/Button"
import Card from "../components/Card"
import ProfilePhoto from "../components/ProfilePhoto"
import RecipeContainer from "../components/RecipesContainer"

const ProfilePage = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full bg-primary h-[180px] rounded-lg relative mb-[50px]">
        <ProfilePhoto />
      </div>

      <h1>Ricardo Rodrigues</h1>

      <div className="flex gap-3 w-full">
        <div className="flex-1 flex flex-col gap-2">
          <Card className="gap-1">
            <h2>Estatísticas</h2>
            <label>
              <strong className="text-primary">14</strong> receitas geradas
            </label>
            <label>
              <strong className="text-primary">5</strong> receitas favoritas
            </label>
            <label>
              <strong className="text-primary">7</strong> amizades
            </label>
          </Card>

          <Card className="gap-1">
            <h2>Seus dados</h2>
            <label>Criado em 10/09/2024</label>

            <Button className="mt-2">Editar perfil</Button>
          </Card>

          <Card className="gap-1">
            <h2>Preferências</h2>
            <strong className="text-primary">Tema</strong>
            <label>light</label>
            <strong className="text-primary">Salvamento automático</strong>
            <label>Não</label>
            <strong className="text-primary">Receber novidades via email</strong>
            <label>Não</label>

            <Button className="mt-2">
              Sair
            </Button>
          </Card>
        </div>

        <div className="flex-[3] flex flex-col gap-2">
          <RecipeContainer />
          <RecipeContainer />
          <RecipeContainer />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage