import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Dashboard() {

    const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/");
            return;
        }

        getTasks();

    }, []);

    const getTasks = async () => {

        try {

            const res = await api.get("/tasks");

            setTasks(res.data);

        } catch (err) {

            console.log(err);

        }

    };

    const addTask = async () => {

        try {

            await api.post("/tasks", {
                title,
                description: ""
            });

            setTitle("");

            getTasks();

        } catch (err) {

            console.log(err);

        }

    };

    return (
        <div className="container">

            <div className="header">

                <div>
                    <h2>Welcome Back 👋</h2>
                    <p>Manage your tasks efficiently</p>
                </div>

                <button
                    className="logout-btn"
                    onClick={() => {
                        localStorage.removeItem("token");
                        navigate("/");
                    }}
                >
                    Logout
                </button>

            </div>

            <input
                value={title}
                placeholder="Task title"
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={addTask}>
                Add Task
            </button>

            <hr />

            {tasks.map((task) => (

                <div className="task" key={task._id}>

                    <div>

                        <h3>{task.title}</h3>

                        <small>
                            Pending
                        </small>

                    </div>

                    <button
                        className="delete-btn"
                        onClick={async () => {

                            await api.delete(`/tasks/${task._id}`);

                            getTasks();

                        }}
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default Dashboard;