import Card from "./Card"
import RecipeCard from "./RecipeCard"

const RecipeContainer = () => {
  return (
    <Card>
      <h1>Receitas geradas</h1>

      <div className="flex flex-col flex-1 gap-4">
        <RecipeCard
          title="Macarrão à Carbonara"
          subTitle="Um clássico italiano feito com bacon, ovos e macarrão para uma refeição cremosa e saborosa."
          rating={4.9}
          favorited={true}
        />
        <RecipeCard
          title="Salada de Macarrão com Bacon e Ovos Cozidos"
          subTitle="Uma salada refrescante e satisfatória que combina macarrão frio com bacon crocante e ovos cozidos, tudo envolvido em um molho cremoso."
          rating={4.7}
          favorited={false}
        />
      </div>
    </Card>
  )
}

export default RecipeContainer