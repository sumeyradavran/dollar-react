import React from "react";
import Button from "./components/Button";
import Table from "./components/Table";
import Error from "./components/Error";

const url =
  "https://cors-anywhere.herokuapp.com/https://www.bloomberght.com/piyasa/intradaydata/dolar";

let apiData = [];

class App extends React.Component {
  componentDidMount() {
    this.fetchData();
  }
  state = {
    apiDataResults: [],
    error: null
  };

  fetchData() {
    fetch(url)
      .then(res => res.json())
      .then(res => (apiData = res["SeriesData"].slice(-10)))
      .then(() => this.generateDateAndTime(apiData))
      .then(() => this.setState({ apiDataResults: [apiData] }))
      .catch(err => this.setState({ error: true }));
  }
  generateDateAndTime(array) {
    array.map(data => {
      let date = new Date(data[0]).toLocaleDateString("tr-TR");
      let time = new Date(data[0])
        .toLocaleTimeString("tr-TR")
        .toString()
        .slice(0, -3);
      return (data[0] = `${date} ${time}`);
    });
  }
  onClick = () => {
    this.setState({ apiDataResults: [] });
    this.fetchData();
  };
  render() {
    return (
      <div>
        {this.state.error ? (
          <Error />
        ) : (
          <div>
            <Button onClick={this.onClick} />
            <Table apiResult={this.state.apiDataResults} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
