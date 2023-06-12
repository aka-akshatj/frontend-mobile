
import Date from "./Date";
import Group from "./components/Group";
import HomeIndicator from "./components/HomeIndicator";
import Reply from "./components/Reply";
import StatusBar from "./components/StatusBar";
import TextRecieve from "./components/TextRecieve";
import TextSend from "./components/TextSend";


function App() {
  return (
    <div className="bg-black flex justify-center">

      <div className="bg-[#FAF9F4] w-[375px] h-[812px] rounded-[32px] z-50">

        <StatusBar></StatusBar> 

        <Group></Group> 
 
        <Date></Date>

        <div className="z-10 ">
        <TextRecieve ></TextRecieve>
        <TextSend></TextSend>
        <TextRecieve ></TextRecieve>
        <TextRecieve ></TextRecieve>
        </div>

        
        

        <Reply></Reply>

        <HomeIndicator></HomeIndicator>
      </div>

    </div>
  );
}

export default App;
