import {useState} from "react";

export const LoginPage = () => {
    const [formData, setFormData] = useState({username: '', password: ''});
    
    const handleChange = ({target:{name,value}}: React.ChangeEvent<HTMLInputElement>) => setFormData(state=>({...state, [name]: value}));
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    }
    
    return (
        <div className="page-sm">
            <h1 className="title">LoginPage</h1>
            
            <form onSubmit={submitHandler} className="flex flex-col gap-3">
                <input type="text" placeholder="username" name="username" value={formData.username} onChange={handleChange}/>
                <input type="password" placeholder="password" name="password" value={formData.password} onChange={handleChange}/>
                <button className="btn primary" type="submit">SIGN IN</button>
            </form>
        </div>
    )
}
