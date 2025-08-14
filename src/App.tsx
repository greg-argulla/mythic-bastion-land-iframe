import styles from "./App.module.css";
function App() {
  return (
    <div className={styles.global}>
      test
      <iframe
        src="https://mythicbastionland.a-dark-place.io/"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
}

export default App;
