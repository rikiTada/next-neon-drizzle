import { getTodos } from "@/server/service/todoService";

export default async function Home() {
  const data = await getTodos();

  return (
    <div className="container m-4">
      <h1>Home</h1>
      <p>Here are the todos:</p>

      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Text</th>
            <th>Done</th>
          </tr>
          {data.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>{todo.text}</td>
              <td>{todo.done ? "done" : "not done"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
