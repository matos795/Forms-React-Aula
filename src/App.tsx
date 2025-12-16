import { useState } from "react";

type FormData ={
  firstName: string;
  lastName: string;
}

function App() {

  const [fullName, setFullName] = useState<string>();

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: ''
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value})
  }

  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setFullName(formData.firstName + " " + formData.lastName);
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div>
          <input 
          type="text" 
          placeholder="Digite seu Nome"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange} />
        </div>
        <div>
          <input 
          type="text" 
          placeholder="Digite o Sobrenome"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange} />
        </div>
        <button type="submit">Mostrar o nome completo</button>
      </form>

      <h2>{fullName}</h2>
    </>
  )
}

export default App
