const Timeofday = ({ time }) => {
  return time == "morning" ? <h1>good morning</h1> : <h1>good afternoon</h1>;
};

export default Timeofday;
