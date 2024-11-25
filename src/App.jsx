import { useEffect } from "react";
import './App.css';

// 마운트시 실행
function App() {
  useEffect(() => {
    // 실행할 작업, 컴포넌트가 화면에 렌더링될 때 실행
    console.log("컴포넌트가 마운트되었습니다!");

    return () => {
      // 정리 작업, 컴포넌트가 화면에서 제거될 때 실행
      console.log("컴포넌트가 언마운트되었습니다!");
    };
  }, []); // 빈 배열로 마운트/언마운트 시만 실행

  return <div>Hello, React!</div>;
}

export default App;
