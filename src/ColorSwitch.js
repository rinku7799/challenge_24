export default function ColorSwitch({ onChangeColor }) {
  const handleClick = () => {
    onChangeColor();
  };

  return <button onClick={handleClick}>Change color</button>;
}
