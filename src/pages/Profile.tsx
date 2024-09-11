import Button from "../components/Button"
import Card from "../components/Card"
import ProfilePhoto from "../components/ProfilePhoto"
import RecipeContainer from "../components/RecipesContainer"
import useUserStore from "../store/userStore"

const ProfilePage = () => {
  const { user, setUser } = useUserStore(state => state)

  const name = user?.name + " " + user?.surname
  const favoritiesNumber = user?.favorities.length || 0
  const createdAt = user?.createdAt.toLocaleDateString()

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full bg-primary h-[180px] rounded-lg relative mb-[50px]">
        <ProfilePhoto url={user?.imageURL} />
      </div>

      <h1>{name}</h1>

      <div className="flex gap-3 w-full">
        <div className="flex-1 flex flex-col gap-2">
          <Card className="gap-1">
            <h2>Estatísticas</h2>
            <label>
              <strong className="text-primary">14</strong> receitas geradas
            </label>
            <label>
              <strong className="text-primary">{favoritiesNumber}</strong> receitas favoritas
            </label>
            <label>
              <strong className="text-primary">7</strong> amizades
            </label>
          </Card>

          <Card className="gap-1">
            <h2>Seus dados</h2>
            <label>Criado em {createdAt}</label>

            <Button className="mt-2">Editar perfil</Button>
          </Card>

          <Card className="gap-1">
            <h2>Preferências</h2>
            <strong className="text-primary">Tema</strong>
            <label>{user?.preferences.theme}</label>
            <strong className="text-primary">Salvamento automático</strong>
            <label>{user?.preferences.autoSave ? "Sim" : "Não"}</label>
            <strong className="text-primary">Receber novidades via email</strong>
            <label>{user?.preferences.reciveEmail ? "Sim" : "Não"}</label>

            <Button className="mt-2" onClick={handleLogout}>
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