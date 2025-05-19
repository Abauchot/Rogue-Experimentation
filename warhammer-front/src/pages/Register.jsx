import { useState } from 'react'
import { register } from '../api/auth'

export default function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await register({ username, email, password })
      localStorage.setItem('token', data.jwt)
      localStorage.setItem('user', JSON.stringify(data.user))
      setSuccess(true)
      // rediriger vers dashboard ou login
    } catch (err) {
      setError("Erreur lors de l'inscription")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Inscription</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-600">Compte créé avec succès !</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="email"
          placeholder="Adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-black text-white p-2 rounded hover:bg-gray-800">
          S'inscrire
        </button>
      </form>
    </div>
  )
}
