import Internet from "../assets/no-internet.jpg";

const NoInternet = () => {
  return (
    <div className="noInternet">
      <img src={Internet} alt="" />
      <div className="inner">
        <h1>No Internet</h1>
        <p>Try:</p>
        <ul>
          <li>Checking the network cables, modem and router</li>
          <li>Reconnecting to Wi-Fi</li>
        </ul>
        <p>ERR_INTERNET_DISCONNECTED</p>
      </div>
    </div>
  );
};
export default NoInternet;
