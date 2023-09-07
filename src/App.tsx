import { useState } from 'react'
import Home from './components/Home'
import Header from './components/global/Header'
import AlertMessage from './components/AlertMessage'
import CategoryType from './components/global/types/CategoryType';

function App() {
  
  const [category, setCategory] = useState<CategoryType|null>(null);
  const [title, setTitle] = useState<string|null>(null);
  const [message, setMessage] = useState<string|null>(null);
  
  const flashMessage = (newCategory:CategoryType|null, newTitle:string|null, newMessage:string|null, ): void => {
    setCategory(newCategory);
    setTitle(newTitle);
    setMessage(newMessage);
  };
  
  return (
    <>
      <Header />
      {message && <AlertMessage category={category!} title={title} message={message}/>}
      <Home flashMessage={flashMessage}/>
    </>
  )
}

export default App
