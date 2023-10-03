// import 'antd/dist/antd.css';
import { DatePicker } from "antd"
import { useState } from "react"
import moment from "moment"
const { RangePicker } = DatePicker
import styles from "./Calender.module.css"

const Calender = () => {
  const [dates, setDates] = useState([])
  console.log(dates)

  return (
    <div>
      <RangePicker
        className={styles.calender}
        onChange={values => {
          if (values === null) {
            setDates([])
            return
          }

          setDates(
            values.map(item => {
              return moment(item).format("YYYY-DD-MM")
            })
          )
        }}
      />
    </div>
  )
}

export default Calender
