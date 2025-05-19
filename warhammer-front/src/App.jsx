import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      {/* Ajout d'un texte avec des classes Tailwind */}
      <div className="mt-4 p-4 bg-red-500 text-white rounded-lg shadow-lg">
        Si vous voyez ce texte stylé, Tailwind fonctionne correctement !
      </div>
      {/* Ajout des boutons pour accéder aux pages */}
      <div className="mt-6 flex gap-4">
        <Link to="/login">
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Accéder à la page de connexion
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Accéder à la page d'inscription
          </button>
        </Link>
      </div>
    </>
  )
}

export default App