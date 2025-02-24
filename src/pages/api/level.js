import levels from '../../config/levels'
export default function handler(req, res) {
  const { id } = req.query
  const level = levels.find(l => l.id === id)
  res.status(200).json(level || {})
}
