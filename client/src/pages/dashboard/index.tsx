import {useUser} from '@clerk/clerk-react'
import { FinancialRecordList } from './financial-record-list'
import { FinancialRecordForm } from './financial-record-form'
import "./financial-record.css";
import { useMemo } from 'react';
import { useFinancialRecords } from "../../contexts/financial-record-context"



export const Dashboard = () => {
    const {user} = useUser();
    const {records} = useFinancialRecords();
    const totalMonthly = useMemo(()=>{
      let totalAmount = 0;
      records.forEach((record)=>{
        totalAmount += record.amount
      })
      return totalAmount
    },[records])
  return (
    <div className="dahboard-container">
        <h1>Welcome {user?.firstName}! Here are your finances</h1>
        <FinancialRecordForm/>
        <div>
          Total Monthly:${totalMonthly}
        </div>
        <FinancialRecordList/>
        
        </div>
  )
}
