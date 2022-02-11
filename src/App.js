import { DatePicker, Space } from 'antd';
import './App.scss';

function App() {


  const test = (date, dateString) => {
    console.log(date, dateString)
  }

  return (
    <div className="App">
      <h1> Web personal </h1>
      <h2> Hola mundo </h2>
      <DatePicker onChange={test} />
    </div>
  );
}

export default App;
