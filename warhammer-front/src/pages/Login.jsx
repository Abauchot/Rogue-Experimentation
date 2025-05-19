import { useState } from 'react'
import axios from '../api/axios.js'

export default function Login() {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('/auth/local', { identifier, password })
      const { jwt, user } = res.data
      localStorage.setItem('token', jwt)
      localStorage.setItem('user', JSON.stringify(user))
      alert('Connexion réussie !')
      // Rediriger vers dashboard si nécessaire
    } catch (err) {
      setError('Identifiants invalides')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Connexion</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Email ou Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
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
          Se connecter
        </button>
      </form>
    </div>
  )
}
