

import {Tabs} from "../../../ui/tabs";
import {useState} from "react";
import MoneyTransfer from "./SendMoney"

function Payments () {

    const [paymentstab,setPaymentstab]  = useState([])

    


    const paymenttabs = [
  {
    title: "Send Money",
    value: "transfer",
    content:  <div className=" bg-white dark:bg-zinc-900 border border-green-700 rounded-xl shadow-md p-6">
      <MoneyTransfer />
    </div>,
  },

  {
    title: "History",
    value: "paymeent history",
    content: <div className="bg-white p-4 rounded-lg shadow">Here are your Transactions.</div>,
  },


];
    return (
        <div>
               <Tabs
                    
                    tabs={paymenttabs}
                    containerClassName="mb-4 mx-2"
                    tabClassName="text-sm font-medium text-white"
                    activeTabClassName="bg-blue-300 dark:bg-blue-800"
                    contentClassName="text-lg text-white"
                  />

        </div>

    )
}
export default Payments;