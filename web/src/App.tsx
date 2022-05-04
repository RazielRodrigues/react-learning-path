interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button 
    className="
      bg-violet-500 
      px-2 h-10 
      rounded 
      hover:bg-violet-900 
      text-white 
      transition-color"
    >
    {props.text ?? 'Default'}
  </button>
}

function App() {
  return <div className="flex gap-2">
    <Button text="Enviar" />
    <Button text="Delete" />
    <Button />
  </div>
}

export default App