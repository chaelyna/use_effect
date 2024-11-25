import { useState, useEffect } from "react";
import './App.css';

// 상태 변화 감지
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`현재 카운트: ${count}`); // 최신 카운트 값 출력
  }, [count]); // 특정 값 의존, count가 변경될 때마다 useEffect가 실행

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;
