
const data = [
  {id: 1, title: "Công việc 1", isCompleted: false},
  {id: 2, title: "Công việc 2", isCompleted: false},
  {id: 3, title: "Công việc 3", isCompleted: false},
]

export default function handler(req, res) {
  res.status(200).json(data);
}
