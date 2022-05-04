interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 p-2">{props.text ?? 'Default'}</button>
}

function App() {
  return <div>
    <Button text="Enviar" />,
    <Button text="Delete" />,
    <Button />
  </div>
}

export default App