import Card from './components/Card';
import data from './data';

function App() {
  const dataJsx = data.map((item) => {
    return (
      <Card
        key={item.id}
        {...item}
      />
    );
  });

  return <div className="centerComponent">{dataJsx}</div>;
}

export default App;
